export interface Movie {
    id: number;
    title: string;
    description: string;
    place: string;
    unitPrice: number;
    genreId: number;
    genre: string;
    dateEvent: string;
    timeEvent: string;
    imagenUrl: string;
    ticketsQuantity: number;
    finalized: boolean;
    status: string;
}

export const emptyMovie: Movie = {
    id: 0,
    title: '',
    description: '',
    place: '',
    unitPrice: 0,
    genreId: 0,
    genre: '',
    dateEvent: '',
    timeEvent: '',
    imagenUrl: '',
    ticketsQuantity: 0,
    finalized: false,
    status: ''
}