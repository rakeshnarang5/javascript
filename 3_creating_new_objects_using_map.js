// the array
var arrayOfAnimals = [
	{name: 'Fluffy', species: 'dog'},
	{name: 'Jumbo', species: 'cat'},
	{name: 'Blob', species: 'dog'},
	{name: 'Rock', species: 'cat'},
	{name: 'Shin', species: 'dog'},
	{name: 'Min', species: 'mouse'},
	{name: 'Juno', species: 'lion'}
]
// the map function which returns a new object
// one string per animal in the list
var newObject = arrayOfAnimals.map(function(animal) {
	return animal.name + " is a: " + animal.species;
});
// logging
console.log(newObject);
console.log("#sorted");