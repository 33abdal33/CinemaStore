export interface BuyApiResponse {
    data: number;
    success: boolean;
    errorMessage: string;
}

export interface BuyRequestBody {
    movieId: string;
    ticketsQuantity: string;
}
