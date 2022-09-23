import { Category } from "./category.entity";

export interface Post {
    id: number;
    like: number;
    title: string;
    description: string;
    bucket: string;
    category: Category;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
}