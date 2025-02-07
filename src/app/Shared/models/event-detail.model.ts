import { Movie } from './movie.model';

export interface EventDetailApiResponse {
    data: Movie;
    success: boolean;
    errorMessage: string;
}
