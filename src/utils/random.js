export const getRandomPos = length => {
	let array = [];
	for (var pos = 0; pos < length; pos++) {
		array.push(pos);
	}
	let i = array.length;
	let j = 0;
	let temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};
