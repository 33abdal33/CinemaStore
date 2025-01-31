import { Component, inject, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { EventCardComponent } from "../Shared/components/event-card/event-card.component";
import { HomeService } from "./home.service";
import { emptyMovie, Movie } from "../Shared/models/movie.model";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, EventCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
    homeService = inject(HomeService);

    movieTest1: Movie = emptyMovie;
    movieTest2: Movie = emptyMovie;
    movieTest3: Movie = emptyMovie;
    movieTest4: Movie = emptyMovie;

    ngOnInit() {
        this.homeService.getData().subscribe((response) => {
            console.log(response);
            this.movieTest1 = response.movies[0];
            this.movieTest2 = response.movies[1];
            this.movieTest3 = response.movies[2];
            this.movieTest4 = response.movies[3];

        });
    }
}





