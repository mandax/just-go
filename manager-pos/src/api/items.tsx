import { Get, Delete, PutJSON } from "./index";
import { Item, Items, NewItem } from "../types";

export const GetItem = (id: number) => Get<Item>(`/items/${id}`);

export const GetItems = () => Get<Items>('/items');

export const UpdateItem = (id: number, body: NewItem) => PutJSON<NewItem, Item>(`/items/${id}`, body);

export const DeleteItem = (id: number) => Delete(`/items/${id}`);