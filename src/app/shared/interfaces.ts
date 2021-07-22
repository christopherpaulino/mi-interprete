export interface City {
    $key: string,
    name: string
}

export interface Interpreter {
    $key: string;
    worksDone?: number;
    review?: number;
    connected?: boolean;
    user_id?: string;
    user?: User;
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
}

export interface Languages {
    $key: string;
    name: string;
}

export const GENDERS: string[] = [
    "Sin especificar", "Masculino", "Femenino", "Otro"
]
