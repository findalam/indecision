console.log("app.js is runnig");

// JSX = Javascript XML

var template = (
	<div>
	<h1> Inside Appliation</h1>
    <p> This is some text from the APPLICATION</p>
	
	<ol>
	<li>Item One</li>
	<li>Item Two</li>
	</ol>
	<ul>
	<li>Number One</li>
	<li>Number Two</li>
	</ul>
	
	</div>);
	
	


let add =0;

const addOne = () => {
	console.log("addOne");
};

	const templateTwo = (
	
	<div>
		
		<h1>Add Five each time: {add}</h1>
		
		<button onClick={addOne}> +1 Each Time</button>
	</div>
		
	
	);
	
console.log(templateTwo);

	const appTwo = document.getElementById("myApp");
	const appRoot = document.getElementById("app");


	ReactDOM.render(template, appRoot);
	ReactDOM.render(templateTwo, appTwo);