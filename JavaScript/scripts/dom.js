// Accessing HTML elements

// 1. document.querySelector(<css selector>); - selects all the elements with the specified criteria into an array
// 2. document.querySelectorAll(<css selector>);
// 3. document.getElementById(<id>);
// 4. document.getElementsByClassName(<class>);
// 5. document.getElementsByTagName(<tagname>);

// Change the text content of first h1 heading to Document Object Model
document.querySelector('h1').innerText = "Document Object Model";

//Chanhe the text color of first h1 heading to red
document.querySelector('h1').style.color = "red";

// Change the font size of first paragraph to 18px
document.querySelector('p').style.fontSize = "25px";

//Change text color of all the h2 elements to green
let elements = document.querySelectorAll('h2');

for(i=0; i<elements.length; i++){
    elements[i].style.color="green";

}

//Change text color to brown and font size to 16px for all the paragraphs with class desc

let p =document.getElementsByClassName('desc');

for(i=0; i<p.length; i++){
    p[i].style.color = "brown";
    p[i].style.fontSize = "16px";

}