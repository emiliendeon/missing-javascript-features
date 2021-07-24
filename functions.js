// linearize a composition of functions
const compose =
	(...functions) =>
	(data) =>
		functions.reduce((acc, f) => f(acc), data);

// Example :
// const f = (x) => x + 2
// const g = (x) => x * 3
// const h = (x) => x + 7
// compose(f, g, h)(5) = h(g(f(5))) = 28
