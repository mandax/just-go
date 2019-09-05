
50.times do |i|

	if (i % 4 == 0) then
		Faker::Config.random = Random.new(42)
	end
	
	cat = Faker::FunnyName.name
	Faker::Config.random = nil
	
	Items.create({
		name: Faker::Food.dish,
		description: Faker::Food.description,
		category: cat,
		picture: 'https://picsum.photos/1024',
		max_discount: Faker::Number.number(digits: 2),
		price: Faker::Number.decimal(l_digits: 2, r_digits: 2),
		cost: nil
	})
end