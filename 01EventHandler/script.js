let text = document.getElementsByClassName("text");
for (let index = 0; index < text.length; index++) {
    console.log(text[index].innerHTML)
    
}
console.log(text.innerText)
// textContent will display all the text

let h1 = document.querySelectorAll('h1');
console.log(h1)

// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
// An HTMLCollection is a list of nodes