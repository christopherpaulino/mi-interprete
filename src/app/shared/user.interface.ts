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
}

export const genders: string[] = [
    "Sin especificar", "Masculino", "Femenino", "Otro"
]