// array of animals
var arrayOfAnimals = [
	{name: 'Fluffy', species: 'dog'},
	{name: 'Jumbo', species: 'cat'},
	{name: 'Blob', species: 'dog'},
	{name: 'Rock', species: 'cat'},
	{name: 'Shin', species: 'dog'},
	{name: 'Min', species: 'mouse'},
	{name: 'Juno', species: 'lion'}
]
// using map function instead of for loop
var names = arrayOfAnimals.map(function(animal) {
	return animal.name;
});
// logging
console.log(names);