
//Define the UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//function to load all event listeners
loadEventListeners();

//load all events
function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
}

//to add a task
function addTask(e) {
    if (taskInput.value === '') {
        alert('You need to add a task');
    }

    //create an li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //append a textNode to the li element
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to the li tag
    li.appendChild(link);

    //append the li tag to the ul tag
    taskList.appendChild(li);
    //clear the input
    taskInput.value = '';

    e.preventDefault();
}