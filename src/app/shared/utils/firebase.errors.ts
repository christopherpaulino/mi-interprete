
export function authError(error: string): string {
    switch (error) {
        case "auth/email-already-exists": {
            return "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único."
        }
        case "auth/id-token-expired": {
            return "El token de ID de Firebase que se proporcionó está vencido."
        }
        case "auth/id-token-revoked": {
            return "Se revocó el token de ID de Firebase."
        }
        case "auth/invalid-argument": {
            return "Se proporcionó un argumento no válido para un método de autenticación. El mensaje de error debe incluir información adicional."
        }
        case "auth/internal-error": {
            return "El servidor de Authentication encontró un error inesperado cuando se intentaba procesar la solicitud."
        }
        case "auth/invalid-argument": {
            return "Se proporcionó un argumento no válido para un método de autenticación."
        }
        case errorForRegister: {
            return "Usuario no registrado, puede registrarse como un usuario nuevo."
        }
        case "auth/invalid-email": {
            return "Email no valido"
        }
        case "": {
            return ""
        }
        case "": {
            return ""
        }
        case "": {
            return ""
        }
        case "": {
            return ""
        }
        default: {
            return "Error desconocido"
        }
    }
}

export const errorForRegister = "auth/user-not-found"