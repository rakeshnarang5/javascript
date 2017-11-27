// filter on array
array.filter(function(object) {
    return object.field === 'filter-value';
});
// map arrow operator
field[] = array.map((object) => object.field);
// new objects using map
new_object[] = array.map((object) =>
    return object.field1 + " is a: " + object.field2); // returns an object array of some logical string representation of object
// filtering data using loops #old-school
var filtered_array = []
for (int i = 0 ; i < array.length ; i++) {
	if (array[i].field === 'filter-field') {
		filtered_array.push(array[i]);
	}
}
// functions as variables
var triple = function(x) {
	return x * 30;
}
// passing around variables
var waffles = triple;
// c-out
console.log(waffles(30)); // will print 90
// filter and reject on array make problems easier
filtered_array_with_matching_entries = array.filter((object) => object.field === 'filter-value');
filtered_array_with_different_entries = array.reject((object) => object.field === 'filter-value');