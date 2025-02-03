import { Component, inject, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { EventCardComponent } from "../Shared/components/event-card/event-card.component";
import { HomeService } from "./home.service";
import { emptyMovie, Movie } from "../Shared/models/movie.model";
import { NgFor } from "@angular/common";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, EventCardComponent, NgFor],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
    homeService = inject(HomeService);

    movies: Movie[] = [];

    ngOnInit() {
        this.homeService.getData().subscribe((response) => {

            this.movies = response.movies;

        });
    }
}





