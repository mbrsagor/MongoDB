db.table_name.insert({
	name: "lenovo thinkpad x1 carbon",
	model: "x1 carbon",
	configuration: {
		ram: 8,
		processer: "i5",
		generation: "4th gen",
		h_drive: "256 SSD",
		backup: "4.5 hours"
	},
	price: 42000,
	date: Date()
})


db.product.insertMany([
{
	name: "lenovo thinkpad x1 carbon",
	category: "laptop",
	model: "x1 carbon",
	configuration: {
		ram: 8,
		processer: "i5",
		generation: "4th gen",
		h_drive: "256 SSD",
		backup: "4.5 hours"
	},
	price: 42000,
	date: Date()
},
{
	name: "Macbook pro 2019",
	category: "laptop",
	model: "macbook pro",
	configuration: {
		ram: 8,
		processer: "i5",
		generation: "4th gen",
		h_drive: "256 SSD",
		backup: "12 hours"
	},
	price: 62000,
	date: Date()
}
])