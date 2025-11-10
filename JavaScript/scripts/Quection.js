let x = prompt("Enter First Number : ");
let y = prompt("Enter Second Number : ");

let total = parseInt(x) + parseInt(y);
let defferent = parseInt(x) - parseInt(y);
let mul = parseInt(x) * parseInt(y);
let div = parseInt(x) / parseInt(y);

document.writeln(`<h1>Total is : ${total}</h1>`);
document.writeln(`<h1>defference is : ${defferent}</h1>`);
document.writeln(`<h1>Multipication is : ${mul}</h1>`);
document.writeln(`<h1>Division is : ${div.toFixed(2)}</h1>`);