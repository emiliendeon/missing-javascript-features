// make each element unique in an array
const atomize = (array) =>
	array.reduce((acc, value) => (acc.includes(value) ? acc : [...acc, value]), []);

// make each element unique in an array of objects, based on an integer "id" key
const atomizeById = (array) =>
	array.reduce(
		(acc, value) => (acc.some((item) => item.id === +value.id) ? acc : [...acc, value]),
		[]
	);

// make each element unique in an array of objects, based on a custom key
const atomizeByKey = (array, key) =>
	array.reduce(
		(acc, value) => (acc.some((item) => item[key] === value[key]) ? acc : [...acc, value]),
		[]
	);

// make each element unique in an array, based on a custom condition that checks the existence of the element in the new array
const atomizeByCondition = (array, condition) =>
	array.reduce(
		(acc, value) => (acc.some((item) => condition(item, value)) ? acc : [...acc, value]),
		[]
	);

// For example, an equivalent of atomizeById would be :
// atomizeByCondition(array, (item, value) => item.id === +value.id);

// apply a callback on array values that satisfy a condition
const applyIf = (array, condition, callback) =>
	array.map((item) => (condition(item) ? callback(item) : item));

// sum array values (or computed values if operations is defined)
const sum = (array, operation) =>
	operation
		? array.reduce((acc, value) => acc + operation(value), 0)
		: array.reduce((acc, value) => acc + value, 0);

// sum a custom key in an array of objects
const sumByKey = (array, key) => array.reduce((acc, value) => acc + value[key], 0);

// randomly sorts an array
const shuffle = (array) =>
	array.reduce(
		(acc, value, index, arr) => [
			...acc,
			arr.filter((x) => !acc.includes(x))[
				Math.floor(Math.random() * (arr.length - acc.length))
			],
		],
		[]
	);
