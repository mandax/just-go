class DishesController < ActionController::API
	
	def index 

		order = params[:orderBy] || 'created_at'
		sort = params[:sort] || 'desc'
		dishes = []
		
		if Dish.available_orders.include?(order) then
			dishes = Dish
				.select('dishes.*, categories.name AS category_name')
				.joins('LEFT JOIN categories ON categories.id = dishes.category_id')
				.order("#{order} #{sort}")
				.group_by{|i| i.category_id}
		end

		render json: dishes, status: :ok
	end

	def show 
		dish = Dish.find(params[:id])
		render json: dish
	end

	def update
		id = params[:id]
		dish = Dish.find(id)

		if dish.present? and permitted_params.permitted? then
			dish = Dish.update(id, permitted_params)
			render json: dish
		else
			render "Was not possible to update this record.", :status => :bad_request
		end
	end

	def create		
		if permitted_params.permitted? then
			dish = Dish.create(permitted_params)
			render json: dish
		else
			render "There is something wrong with the payload.", :status => :bad_request
		end
	end

	def destroy
		Dish.delete(params[:id])
	end

	private
	def permitted_params
		params.permit(:id, :name, :category_id, :max_discount, :price, :cost, :description, :picture)
	end

end
