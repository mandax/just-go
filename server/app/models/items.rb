class Items < ApplicationRecord

	validates :name, presence: true, length: {maximum: 80}
	validates :description, length: {maximum: 250}
	validates :category, presence: true
	validates :price, presence: true

	def self.available_orders
		['price', 'cost', 'max_discount', 'created_at', 'updated_at'] 
	end
	
	def self.available_groups
		['category', 'created_at', 'updated_at']
	end
end
