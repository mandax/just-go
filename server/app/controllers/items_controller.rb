class ItemsController < ActionController::API
	def index 

		order = params[:orderBy] || 'created_at'
		sort = params[:sort] || 'desc'
		items = []
		
		if (Item.available_orders.include?(order)) then
			items = Item
				.select('items.*, categories.name AS category_name')
				.joins('LEFT JOIN categories ON categories.id = items.category_id')
				.order("#{order} #{sort}")
				.group_by{ |i| i.category_name}
		end

		render json: items, status: :ok
	end
end
