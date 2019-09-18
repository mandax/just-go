class Dish < ApplicationRecord
  belongs_to :category

  validates :name, presence: true, length: {maximum: 80}
	validates :description, length: {maximum: 250}
	validates :category, presence: true
  validates :price, presence: true
  validates :max_discount, :numericality => { less_than_or_equal_to: 100 }

	def self.available_orders
		['price', 'cost', 'max_discount', 'created_at', 'updated_at'] 
  end
  
end
