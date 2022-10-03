export interface IUser {
    _id: number;
    email: string;
    password: string;
}

export type UserWithoutPassword = Omit<IUser, 'password'>;
