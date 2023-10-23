// our data store
const user = {
	name: ""
};

// let's add a function that will handle the event
// of changing the name of the user.
// we will wrap the function inside a special object
// that the Proxy object understands it
const userHandler = {
	set: (prevData, prop, newValue, d) => {
		console.log('prevData:')
		console.log(prevData);
		console.log(`prop    : ${prop}`)
		console.log(`newValue: ${newValue}`)
		console.log('d:      :')
		console.log(d);
		prevData[prop] = newValue;
		render();
		return true;
	}
};

// now let's transform our user object into a reactive object
// that reacts to changes such as setting the name prop to a new value
const userProxy = new Proxy(user, userHandler);

// let's grab our input and the container that will host the
// user's name
const userInput = document.querySelector("#userInput");
const userName = document.querySelector("#userName");

// let's create a function that executes when we
// change the input value
function onInputKeyUp(evt) {
	// evt is the keyup event we've been listening to
	// the target is the node that triggered it, in our case
	// is the input and the value as you can guess is the value of the input
	// aka the user name we just typed
	userProxy.name = evt.target.value;
}

// let's start listening for whenever a user types inside that input
userInput.addEventListener("keyup", onInputKeyUp);

// let's create our render function that will change the name value inside the title
// so Hello stranger will become Hello Captain V or whathever name you will set up
function render() {
	userName.innerText = user.name;
}


