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
// ecma script 6 arrow operator
// makes function assignment even shorter
// syntax: var assignmentVariable = arrayName.map((argument) => {return logic});
var names = arrayOfAnimals.map((animal) => animal.name);
// logging
console.log(names);