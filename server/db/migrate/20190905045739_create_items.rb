class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name, limit: 80
      t.text :description
      t.string :category
      t.decimal :price, precision: 10, scale: 2
      t.string :picture
      t.integer :max_discount
      t.decimal :cost, precision: 10, scale: 2

      t.timestamps
    end
  end
end
