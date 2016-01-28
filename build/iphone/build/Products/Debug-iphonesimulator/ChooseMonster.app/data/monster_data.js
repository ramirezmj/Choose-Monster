/**
 * @author Jose Manuel Ramírez Martínez
 */
function getData() {
	var data = [
		{ username: 'Monster 1', exp: 42, image: '1.png' },
		{ username: 'Monster 2', exp: 123, image: '2.png' },
		{ username: 'Monster 3', exp: 76, image: '3.png' },
		{ username: 'Monster 4', exp: 82, image: '4.png' },
		{ username: 'Monster 5', exp: 111, image: '5.png' },
		{ username: 'Monster 6', exp: 234, image: '6.png' },
		{ username: 'Monster 7', exp: 16, image: '7.png' },
		{ username: 'Monster 8', exp: 99, image: '8.png' },
	];
	return data;
}
exports.get = getData;