let itemlist=document.querySelector('#items');
/////parent nodes\\\\\\\\\\\\\

// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor='red'
// console.log(itemlist.parentNode.parentNode.parentNode)

//////////parentnode Element/////////////////

// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor='red'
// console.log(itemlist.parentElement.parentElement.parentElement)

///////////ChildNodes//////////////////

itemlist.children[1].textContent="second Child"
itemlist.children[1].style.backgroundColor='yellow'

//first child\\\\\\\\\\\\\\\\
itemlist.firstElementChild.textContent='First Chilld';
itemlist.firstElementChild.style.backgroundColor="green"

//last chlild\\\\\\\\\\\\\
itemlist.lastElementChild.textContent='last child';
itemlist.lastElementChild.style.backgroundColor='Pink'

//////////next sibling////////////////
console.log(itemlist.nextSibling)
////nextSiblingElement

console.log(itemlist.nextElementSibling)
itemlist.nextElementSibling.style.color="red"

//////previous siblings/////////////////////
console.log(itemlist.previousSibling)
////previousSiblingElement\\\\\\\\\\
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.color="green"

//////create element/////
let newdiv=document.createElement('div')
console.log(newdiv);

//add class name
newdiv.className="hello";

//add id/////
newdiv.id="hello1"

//set attribute
newdiv.setAttribute('title','hello div')
newdiv.style.fontSize='30px'
//create text in newdiv
let newdivtext=document.createTextNode('Hello ')

//add text to div
newdiv.appendChild(newdivtext)

//add this new div in the dom
let container=document.querySelector('header .container')
let h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1)


