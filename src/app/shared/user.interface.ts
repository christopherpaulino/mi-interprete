export interface User {
    uid: string;
    email?: string;
    displayName?: string;
    fullName?: string;
    emailVerified?: boolean;
    phone?: string;
    photoUrl?: string;
    city?: string;
    firstLogin?: boolean;
}