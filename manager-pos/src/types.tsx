
export type Children =
  Element |
  Element[] |
  React.ReactElement |
  HTMLElement |
  React.ReactElement[] |
  HTMLElement[];

export interface Item {
  id: string
  created_at: Date
  modified_by: Date
  name: string
  description: string
  category: string
  pictures: string[]
  max_discount: number
  price: number
  cost: number
}

export interface NewItem {
  name: string
  description: string
  category: string
  pictures: string[]
  max_discount: number
  price: number
  cost: number
}