const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');
let square;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

add.onclick = function () {
	console.log('add clicked');
	// Create a custom square element
	square = document.createElement('custom-square');
	square.setAttribute('l', '100');
	square.setAttribute('c', 'red');
	document.body.appendChild(square);
	// const node = document.querySelector('main');
	// node.appendChild(square)

	update.disabled = false;
	remove.disabled = false;
	add.disabled = true;
};

update.onclick = function () {
	console.log('update clicked');
	// Randomly update square's attributes
	square.setAttribute('l', random(50, 200));
	square.setAttribute('c', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
};

remove.onclick = function () {
	console.log('remove clicked');
	// Remove the square
	document.body.removeChild(square);

	update.disabled = true;
	remove.disabled = true;
	add.disabled = false;
};