export interface City {
    $key: string,
    name: string
}

export interface Interpreter {
    $key: string;
    aboutMe: string;
    worksDone?: number;
    review?: number;
    connected?: boolean;
    user_id?: string;
    user?: User;
    languages?: string[];
}

export interface User {
    uid: string;
    email?: string;
    displayName?: string;
    fullName?: string;
    emailVerified?: boolean;
    gender?: string;
    phone?: string;
    photoUrl?: string;
    city?: string;
    firstLogin?: boolean;
    isInterpreter?: boolean;
    dateBirth?: string
}

export interface Booking {
    $key: string;
    user_id?: string;
    interpreter_id?: string;
    title?: string;
    description?: string;
    date?: string;
    hour?: string;
    status?: boolean;
    city?: string;
    user?: User;
    interpreter?: Interpreter;
    languageFrom?: string;
    languageTo?: string;
}

export interface Language {
    $key: string;
    name: string;
}

export interface Comments {
    user: string,
    description: string,
    interpreter: string,
    rating: number
}

export interface Slides {
    $key: string;
    screen: string;
    position: number;
    title: string;
    description?: string;
    imageUrl?: string;
    footer?: string;
}

export const GENDERS: string[] = [
    "Sin especificar", "Masculino", "Femenino", "Otro"
]
