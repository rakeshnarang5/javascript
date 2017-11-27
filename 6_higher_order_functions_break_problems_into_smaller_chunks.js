// the array of animals
var animals = [
    { name: 'Fluffy', species: 'rabbit' },
    { name: 'Jumbo', species: 'dog' },
    { name: 'Rocko', species: 'dog' },
    { name: 'Mushy', species: 'cat' },
    { name: 'Blob', species: 'rabbit' },
    { name: 'Fluffy', species: 'rabbit' },
    { name: 'Fluffy', species: 'rabbit' }
]
// we declare the filter function isDog
// returns true if an animal is dog
var isDog = function(animal) {
	return animal.species === 'dog';
}
// using 'filter' and 'reject' higher order method of array
var dogs = animals.filter(isDog);
var otherAnimals = animals.reject(isDog);