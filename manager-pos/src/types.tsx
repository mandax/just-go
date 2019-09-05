
export type Children =
  React.ReactElement |
  HTMLElement |
  React.ReactElement[] |
  HTMLElement[];

export interface Item {
  id: string
  created_at: Date
  modified_by: Date
  name: string
  category: string
  picture: string[]
  max_discount: number
  price: number
  cost: number
}