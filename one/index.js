
let val;


val = document.all;

console.log(val);

// use document.getElementById('HTMLidName - example #task-title')

console.log(document.getElementById('task-title'));

// getElementId() has properties that we can get such as
document.getElementById('task-title').id;
document.getElementById('task-title').innerHTML;

//change styling
document.getElementById('task-title').style.background = '#efe';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '50px';
document.getElementById('task-title').style.display = 'none';

// best practice - use single events for on hover event
//change the content of an id
document.getElementById.apply('task-title').textContent = 'Task Listed';
document.getElementById('task-list').innerText = 'my tasks';

//use innerHTML to insert HTML into an ID - this will completely replace the existing HTML inside that div
document.getElementById('task-list').innerHTML = '<span style="color:red;">Task List</span>';

//best practice - store the element you are going to manipulate
const taskTitle = document.getElementById('task-title');
//change the styles by calling the variable
taskTitle.innerText = 'my tasks';
taskTitle.innerHTML = '<span style="color: red;">Task List</span>';

// document.querySelector() - select any CSS selector
//div id
console.log(document.querySelector('#task-title'));
//div class
console.log(document.querySelector('.card-title'));
//div HTML tag - it will get the first h5 in the document
console.log(document.querySelector('h5'));

//select the first li in the document
document.querySelector('li').style.color = 'red';
//

//css pseudo classes
document.querySelector('li:last-child').style.color = 'purple';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(3)').textContent = 'hello';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';

//selectors used to select multiple elements
//return an HTML collection or node list

//document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item');
console.log(items);
//selector a specific item ( the first one )
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'hello';

//you can use querySelector and getElementsByClassName together
//to get a more specific list of elements
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);

//convert an HTML collection to an array
lis = Array.from(lis);
//we can now use Array methods
lis.reverse();
//change the text content contained in the li tags
lis.forEach((li) => {
    lis.textContent = 'Walk the dog';
});

//use document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach((item, index) => {
    item.textContent = `${index}: walk the dog`;
});

// navigating the DOM

const list = document.querySelector('ul.collection');
const lisItem = document.querySelector('li.collection-item:first-child');

//get list of child nodes (NOTE this will account for linebreaks)
console.log(list.childNodes);

//when using childNodes property
list.childNodes;
list.childNodes[0];
list.childNodes[0].nodeName;
//the nodeType returns a number
// the number determines the type of node it is
// 1 - element 2- attribute 3- text node 8- comment 9- document 10- doctype
list.childNodes[1].nodeType;

//PREFERRED METHOD get the children element nodes (no linebreaks)
//children will give you the HTMLcollection of all elements
console.log(list.children);
//get tehe children element nodes
list = list.children[1];
//children of children
list = list.children[1].children[0];
//add an id to a child of a child
list = list.children[0].children[0].id = 'test-link';
//get the firstElementChild
list = list.firstChildElement;

//get the parent node
list = list.parentNode;
//get the parent element ( containing div )
list = list.parentElement;
//get the parents parent element (containing div)
list = list.parentElement.parentElement;

//get the next sibling
list = list.nextElementSibling;
//get the previous sibling
list = list.previousElementSibling;

//create an element
const li = document.createElement('li');
//add a class
li.className = 'collection-item';
//add id
li.id = 'new-item';
//add attribute
li.setAttribute('title', 'New Item');
//create a text node and append
li.appendChild(document.createTextNode('Hello New Item'));
//create a new link element
const link = document.createElement('a');
//add classes
link.className = 'delete-item secondary-content';
//add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';
//append link into li
li.appendChild(link);
//append li as a child to the ul
document.querySelector('ul.collection').appendChild(li);

//REPLACE AN ELEMENT
//create an element
const newheading = document.createElement('h2');
//add id
newheading.id = 'task-title';
//new textnode
newheading.appendChild(document.createTextNode('Task List'));
//get old heading
const oldheading = document.querySelector('#task-title');
//Parent
const cardAction = document.querySelector('.card-action');
//replace
cardAction.replaceChild(newheading, oldheading);

//REMOVE ELEMENT remove a specific list item
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
//remove the item
lis[0].remove();
//remove child element
list.removeChild(lis[2]);

//CLASSES AND ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

//CLASSES
//get the list of classNames
link.className;
//get a DOM token list of classes
link.classList;
//access classList by number
link.classList[0];
//add a class with classList
link.classList.add('test');
//remove  a class with classList
link.classList.remove('test');

//ATTRIBUTES
//get the attribute name
link.getAttribute('href');
//replace an attribute
link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
//check for an attribute - returns a boolean
link.hasAttribute('title')
//remove an attribute
link.removeAttribute('title');


console.log(firstLi.children[0]);

document.querySelector('.clear-tasks').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('hello world');
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    console.log(e);
    e.preventDefault();
    val = e;
    //event target element
    //there are a lot of useful attributes here
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'hello';
    console.log(val);
}
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//listen for a click event
clearBtn.addEventListener('click', runEvent);
//listen for a click event
clearBtn.addEventListener('dblclick', runEvent);
//listen for mouse down
clearBtn.addEventListener('mousedown', runEvent);
//listen for mouse up
clearBtn.addEventListener('mouseup', runEvent);
//listen for mouse enter
card.addEventListner('mouseenter', runEvent);
//listen for mouse leave
card.addEventListener('mouseleave', runEvent);
//mouseout and mouseover display child elements
//listen for mouse over
card.addEventListener('mouseover', runEvent);
//listen for mouse out
card.addEventListener('mouseout', runEvent);
//listen for mousemove
card.addEventListener('mousemove', runEvent);


//Event Handler
function runEvent(e) {
    console.log(`EventTYPE: ${e.type}`);
    //display coordinates of the mouse
    heading.textContent = `MouseX: ${e.offsetX} mouseY: ${e.offsetY}`;
    //changed the background color
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},60)`;
}

// input and form events

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

//clear the taskInput field
taskInput.value = '';

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    //get the input field values
    // console.log(e.target.value);
    // console.log(taskInput.value);
}

//target the heading element
const heading = document.querySelector('h5');
//events to be run on the input field
const taskInput = document.querySelector('#task');
taskInput.value = '';
//Key down event
// taskInput.addEventListener('keydown', taskEvent);
//key press
// taskInput.addEventListener('keypress', taskEvent);
//keyup event
taskInput.addEventListener('keyup', taskEvent);
function taskEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    heading.innerText = e.target.value;
}

// Event Bubbling and Event Delegation

// When handling events, all events will trigger on its parent elements

// In the example below - the .card-title div is clicked. All of the parent div's will be triggered as a result.

// ```js
document.querySelector('.card-title').addEventListener('click', function() {
  console.log('card title');
});

document.querySelector('.card-content').addEventLsitener('click', function() {
    console.log('card content');
});

document.querySelector('.card').addEventListener('click', function() {
    console.log('card');
});

document.querySelector('.col').addEventListener('click', function() {
    console.log('col');
});

// USE EVENT DELEGATION TO DELETE AN ITEM IN AN UL
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    //get the parentElement's parentElement
    // console.log(e.target.parentElement.parentElement);
    //call remove to delete it
    // e.target.parentElement.parentElement.remove();
    
    //ALTERNATELY by className we need to match everything in the className
    // if (e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('delete item');
    // }

    //PREFERRED WAY
    //ALTERNATIVELY - use classList.contains to look for a specific className
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item' + e.target);
    }
}



