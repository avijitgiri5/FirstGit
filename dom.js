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

//  let items=document.getElementsByClassName('list-group-item')
// // // console.log(items)
// //items[0].textContent="Hello"
// // items[0].style.fontWeight='bold'
//  items[2].style.backgroundColor="green"
// for(let i=0;i<items.length;i++)
// {
    
//     items[i].style.fontWeight="bold"
    
// }
////GET ELEMENTBYCLASSNAME//////

// const newli=document.getElementsByClassName('new-item')
// newli[0].style.fontWeight="bold"
// newli[0].style.backgroundColor="red";
// newli[0].textContent="New Li element"
// newli[0].style.padding="15px"


//GET ELEMENTBYTAG NAME//////

// const li=document.getElementsByTagName('li')
// li[4].textContent="New Li Modification";
// li[4].style.fontWeight="bold";
// li[4].style.backgroundColor="red";
// li[4].style.padding="15px"


////QUERYSELETOR////////


// let header=document.querySelector('#main-header');
// header.style.borderBottom="solid 3px #000";


//first input element change ///////////////////////////////////////////////////
// let input=document.querySelector('input');
// input.value="Hello";

/////change button by css name//////////////////////////////////////////
// let submit=document.querySelector('input[type="submit"]');
// submit.value="send"
// submit.style.backgroundColor="yellow"

//another way to modified button by class name/////////////////////////////////
// let btn=document.querySelector('.btn');
// btn.value="new botton";
// btn.style.backgroundColor="red"


/////////////modify list item by ul tag//////////////////////////////////////////
// let ul=document.querySelector("#items");
// // ul.firstElementChild.style.color="red"
// // ul.lastElementChild.style.color="yellow"
// ul.children[1].style.backgroundColor="green"
// ul.children[2].style.display="none"

////////queryselectorAll////////////////////////////////////////////////////
// let titles=document.querySelectorAll('.title');
// titles[0].textContent="Hello"
// titles[1].textContent="list Items"

let li_items=document.querySelectorAll('li');
li_items[1].style.color="green"

let od=document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<od.length;i++)
{
    od[i].style.backgroundColor="green"

}