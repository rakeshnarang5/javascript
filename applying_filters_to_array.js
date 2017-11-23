// filtering array on the basis of some value
// e.g. filtering dog objects from an array of animal objects
var animals = [
    { name: 'Fluffy', species: 'rabbit' },
    { name: 'Jumbo', species: 'dog' },
    { name: 'Rocko', species: 'dog' },
    { name: 'Mushy', species: 'cat' },
    { name: 'Blob', species: 'rabbit' },
    { name: 'Fluffy', species: 'rabbit' },
    { name: 'Fluffy', species: 'rabbit' }
]
// using filter function
// filters make functiona more composable
// this results in less code
// less logic written
// 
var dogs = animals.filter(function(animal) {
    return animal.species === 'dog';
});