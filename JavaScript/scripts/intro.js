//single line comment 
/*Multi line
 comment*/

 //Displaying output 

//  1. page content

document.writeln("Text Output from Js");
document.writeln('<h1>Hello from JavaScript</h1>');
document.writeln(`<h2>Printed form external script</h2>`);

// 2. Browser Console - Used in debuging

console.log("Message from Javascript"); //General log message
console.error("Error from Script"); //Error message

// 3. popup message

alert("Hello, I'm an alert"); // Normal message
prompt("Enter Your name : "); // A message with an input field
confirm("Are you suer? "); // Allows user to select one form 2 options

// 4. As the content of an element

document.querySelector('div').innerHTML = 
'<div style = "height:100px;width:100px;background-color:blue;"></div>';

