import { Role } from "./role.entity";

export interface UserRequest {
    name: string;
    email: string;
    password: string;
    day: string;
    month: string;
    year: string;
}

export interface UserResponse {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    birthday: string; //* example: 19.9.2022
}

export type UserErrors = Partial<Record<keyof UserRequest | "global", string>>;

export interface UserIdentifier {
    email: string;
    password: string;
}