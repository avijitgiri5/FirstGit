// //console.dir(document)
// console.log(document.domain)    
// //console.log(document.title) 
document.title=123;
// console.log(document.head)
// // console.log(document.all)
// // console.log(document.all[10])
// //document.all[10].textContent="Hello"
// console.log(document.forms[0])
// console.log(document.links)


let headerTitle=document.getElementById('header-title');
headerTitle.style.borderBottom="solid 3px #000"

const additems=document.getElementById('title');
additems.style.fontWeight='bold';
additems.style.color='green'


//let header=document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent="Hello"
// headerTitle.innerText="Goodby"
//headerTitle.innerHTML='<h1>Hello</h1>'

 let items=document.getElementsByClassName('list-group-item')
// // console.log(items)
//items[0].textContent="Hello"
// items[0].style.fontWeight='bold'
 items[2].style.backgroundColor="green"
for(let i=0;i<items.length;i++)
{
    
    items[i].style.fontWeight="bold"
    
}

const newli=document.getElementsByClassName('new-item')
newli[0].style.fontWeight="bold"
newli[0].style.backgroundColor="red";
newli[0].textContent="New Li element"
newli[0].style.padding="15px"



