export interface LoginApiResponse {
    data: {
        token: string;
        expirationDate: string;
    };
    success: boolean;
    errorMessage: string;
}
export interface LoginRequestBody {
    username: string;
    password: string;
}

export interface RegisterApiResponse {
    data: {
        userId: string;
        token: string;
        expirationDate: string;
    };
    success: boolean;
    errorMessage: string;
}

export interface RegisterRequestBody {
    documentNumber: string;
    firsName: string;
    lastName: string;
    password: string;
    email: string;
    documentType: number;
    age: number;
    confirmPassword: string;
}

//FORGOT PASSWORD
export interface ForgotPasswordApiResponse {
    success: boolean;
    errorMessage: string;
}

export interface ForgotPasswordRequestBody {
    email: string;
}
