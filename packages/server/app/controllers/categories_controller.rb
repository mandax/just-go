class CategoriesController < ActionController::API
	
	def index 
		categories = Category.all
		render json: categories, status: :ok
	end

	def show 
		category = Category.find(params[:id])
		render json: category
	end

	def update
		id = params[:id]
		category = Category.find(id)

		if category.present? and permitted_params.permitted? then
			category = Category.update(id, permitted_params)
			render json: item
		else
			render "Was not possible to update this record.", :status => :bad_request
		end
	end

	def create		
		if permitted_params.permitted? then
			category = Category.create(permitted_params)
			render json: category
		else
			render "There is something wrong with the payload.", :status => :bad_request
		end
	end

	def destroy
		# TODO: when some category is deleted, the dishes related to it must be migrated
		Category.delete(params[:id])
	end

	private
	def permitted_params
		params.permit(:name)
	end

end
