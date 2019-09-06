
export type Children =
  Element |
  Element[] |
  React.ReactElement |
  HTMLElement |
  React.ReactElement[] |
  HTMLElement[];

export interface Item {
  id: number
  created_at: Date
  modified_by: Date
  name: string
  description: string
  category_id: number
  category_name: string
  picture: string
  max_discount: number
  price: string
  cost: string
}

export interface Items {
  [category_name: string]: Item[]
}

export interface NewItem {
  name: string
  description: string
  category_id: number
  picture: string
  max_discount: number
  price: string
  cost: string
}

export interface ErrorMessage {
  status: number,
  error: string
}
