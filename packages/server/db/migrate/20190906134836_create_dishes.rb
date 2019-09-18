class CreateDishes < ActiveRecord::Migration[6.0]
  def change
    create_table :dishes do |t|
      t.string :name
      t.text :description
      t.references :category, null: false, foreign_key: true
      t.decimal :price, precision: 5, scale: 2
      t.string :picture
      t.integer :max_discount, limit: 3
      t.decimal :cost, precision: 5, scale: 2

      t.timestamps
    end
  end
end
