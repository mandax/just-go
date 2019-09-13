class ItemsController < ActionController::API
	
	def index 

		order = params[:orderBy] || 'created_at'
		sort = params[:sort] || 'desc'
		items = []
		
		if Item.available_orders.include?(order) then
			items = Item
				.select('items.*, categories.name AS category_name')
				.joins('LEFT JOIN categories ON categories.id = items.category_id')
				.order("#{order} #{sort}")
				.group_by{|i| i.category_id}
		end

		render json: items, status: :ok
	end

	def show 
		item = Item.find(params[:id])
		render json: item
	end

	def update
		id = params[:id]
		item = Item.find(id)

		if item.present? and permitted_params.permitted? then
			item = Item.update(id, permitted_params)
			render json: item
		else
			render "Was not possible to update this record.", :status => :bad_request
		end
	end

	def create		
		if permitted_params.permitted? then
			item = Item.create(permitted_params)
			render json: item
		else
			render "There is something wrong with the payload.", :status => :bad_request
		end
	end

	def destroy
		Item.delete(params[:id])
	end

	private
	def permitted_params
		params.permit(:id, :name, :category_id, :max_discount, :price, :cost, :description, :picture)
	end

end
