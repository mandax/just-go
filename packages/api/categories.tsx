import { Get, Delete, PutJSON, PostJSON } from "./base";

export interface Category {
	id: number,
	name: string
};


export const GetCategory = (id: number) => Get<Category>(`/categories/${id}`);

export const GetCategories = () => Get<Category[]>('/categories');

export const CreateCategory = (body: string) => PostJSON<string, Category>('/categories', body);

export const DeleteCategory = (id: number) => Delete(`/categories/${id}`);