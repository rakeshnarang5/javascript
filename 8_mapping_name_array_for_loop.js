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
// for loop
var names = [];
for (var i = 0 ; i < arrayOfAnimals.length;i++) {
	names.push(arrayOfAnimals[i].name);
}
// logging
console.log(names);