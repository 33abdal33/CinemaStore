import { Genre } from "../Shared/models/genre.model";
import { Movie } from "../Shared/models/movie.model";

export interface HomeApiResponse {
    movies: Movie[];
    genres: Genre[];
    success: boolean;
}

