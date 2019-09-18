import { Get, Delete, PutJSON, PostJSON } from "./base";

export interface Dish {
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

export interface Dishes {
  [category_name: string]: Dish[]
}

export interface NewDish {
  name: string
  description: string
  category_id: number
  category_name: string
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

export const NewEmptyDish: NewDish = ({
  name: '',
  description: '',
  category_id: null,
  category_name: '',
  picture: '',
  max_discount: '',
  price: '',
  cost: ''
})

export const GetDish = (id: number) => Get<Dish>(`/dishes/${id}`);

export const GetDishes = () => Get<Dishes>('/dishes');

export const CreateDish = (body: NewDish) => PostJSON<NewDish, Dish>('/dishes', body);

export const UpdateDish = (id: number, body: Dish) => PutJSON<Dish, Dish>(`/dishes/${id}`, body);

export const DeleteDish = (id: number) => Delete(`/dishes/${id}`);