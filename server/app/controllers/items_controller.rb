class ItemsController < ActionController::API
	def index 

		order = params[:orderBy] || 'created_at'
		group = params[:groupBy]
		
		if (Items.available_orders.include?(order)) then
			items = Items.order("#{order} DESC")
		end

		if (Items.available_groups.include?(group)) then
			items = items.group_by(&group.to_sym)
		end

		render json: items, status: :ok
	end
end
