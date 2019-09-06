4.times do |i|
	Category.create({
		name: Faker::FunnyName.name
	})
end

50.times do |i|
	
	Faker::Config.random = nil
	
	price = Faker::Number.decimal(l_digits: 2, r_digits: 2)
	cost = price * (Faker::Number.within(range: 0...80).to_f / 100)
	name = Faker::Food.dish

	Item.create({
		name: name,
		description: Faker::Food.description,
		category: Category.select(:id).order('RANDOM()').first,
		picture: "http://lorempixel.com/640/480/food",
		max_discount: Faker::Number.within(range: 0..20),
		price: Faker::Number.decimal(l_digits: 2, r_digits: 2),
		cost: cost.to_i
	})
end