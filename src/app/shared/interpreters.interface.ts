import { User } from './user.interface';
export class Interpreter {
    $key: string;
    worksDone?: number;
    review?: number;
    connected?: boolean;
    user_id?: string;
    user?: User;
}