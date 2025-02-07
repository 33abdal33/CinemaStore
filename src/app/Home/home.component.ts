import { Component, inject, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { EventCardComponent } from "../Shared/components/event-card/event-card.component";
import { HomeService } from "./home.service";
import { emptyMovie, Movie } from "../Shared/models/movie.model";
import { AsyncPipe } from "@angular/common";
import { combineLatest, map, Observable, shareReplay, startWith, switchMap } from "rxjs";
import { Genre } from "../Shared/models/genre.model";
import { SearchBarService } from "./services/search-bar.service";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, EventCardComponent, AsyncPipe, RouterLink, ReactiveFormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
    genres$ = new Observable<Genre[]>();
    filteredConcerts$ = new Observable<Movie[]>();

    homeService = inject(HomeService);
    searchBarService = inject(SearchBarService);

    currentGenre = new FormControl(0);

    ngOnInit() {
        const data$ = this.homeService.getData().pipe(shareReplay(1));

        this.genres$ = data$.pipe(
            map((data) => data.genres.filter((genre) => genre.status))
        );

        const initialMovies$ = data$.pipe(map((data) => data.movies));

        const filterByGenre$ = this.currentGenre.valueChanges.pipe(
            startWith(0),
            switchMap((genreId) =>
                initialMovies$.pipe(
                    map((movies) =>
                        genreId === 0
                            ? movies
                            : movies.filter((movie) => movie.genreId === genreId)
                    )
                )
            )
        );

        this.filteredConcerts$ = combineLatest([
            filterByGenre$,
            this.searchBarService.currentValue$,
        ]).pipe(
            map(([movies, searchValue]) =>
                movies.filter((movie) =>
                    searchValue === ''
                        ? true
                        : movie.description
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                )
            )
        );
    }
}





