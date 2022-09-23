import { Change } from "./change.entity";

export interface Transaction {
    name: string;
    change: Change;
    amount: number;
}