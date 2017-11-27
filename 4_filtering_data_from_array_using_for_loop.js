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
// method to filter out dogs
var dogs = []
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs.push(animals[i]);
    }
}