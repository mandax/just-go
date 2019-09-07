import { Get, Delete, PutJSON, PostJSON } from "./base";

export interface Item {
  id: number
  created_at: Date
  modified_by: Date
  name: string
  description: string
  category_id: number
  category_name: string
  picture: string
  max_discount: string
  price: string
  cost: string

  [key: string]: string | number | Date
}

export interface Items {
  [category_name: string]: Item[]
}

export interface NewItem {
  name: string
  description: string
  category_id: number
  picture: string
  max_discount: string
  price: string
  cost: string

  [key: string]: string | number
}

export interface ErrorMessage {
  status: number,
  error: string
}


export const GetItem = (id: number) => Get<Item>(`/items/${id}`);

export const GetItems = () => Get<Items>('/items');

export const CreateItem = (id: number, body: NewItem) => PostJSON<NewItem, Item>('/items', body);

export const UpdateItem = (id: number, body: Item) => PutJSON<Item, Item>(`/items/${id}`, body);

export const DeleteItem = (id: number) => Delete(`/items/${id}`);