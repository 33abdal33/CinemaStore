import { Movie } from "../Shared/models/movie.model";

export interface HomeApiResponse {
    movies: Movie[];
    genres: Genre[];
    success: boolean;
}

interface Genre {

    id: number;
    name: string;
    status: boolean;
}