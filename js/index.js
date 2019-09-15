//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
let element = document.createElement('div');
//create the element

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
//color and add content

document.body.appendChild(element);
//add to the DOM

element.style.textAlign = 'center';
//align now visible text
