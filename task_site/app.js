
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
    //DOM event to add localstorage
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task event
    form.addEventListener('submit', addTask);
    //add event listener to taskList
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter task events
    filter.addEventListener('keyup', filterTasks);
}

//get the local storage data
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //create DOM elements from all the text in the tasks variable
    tasks.forEach(function(task) {
        //create li element
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(task));
        //create new link element
        const link = document.createElement('a');
        //add class
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);
        //append li to ul
        taskList.appendChild(li);
    });
}

//to add a task
function addTask(e) {
    //check if a user tries to submit an empty form
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

    // store the value into local storage
    storeLocalStorage(taskInput.value);

    //append the li tag to the ul tag
    taskList.appendChild(li);
    //clear the input
    taskInput.value = '';

    e.preventDefault();
}

//local storage implementation
function storeLocalStorage(task) {
    let tasks;
    //check to see if local storage exists for tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        //use JSON.parse to convert the string into an array
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    //add the item
    tasks.push(task);

    //set the new tasks array in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove a task
function removeTask(e) {
    //use e.target to get a reference to what was clicked
    console.log(e.target.parentElement.parentElement);
    //remove the element by targeting the parent elements parent element
    if (e.target.parentElement.classList.contains('delete-item')) {
        //add a confirmation
        if(confirm('Are you sure?')) {
            //remove the element by targeting the parent elements parent element
            e.target.parentElement.parentElement.remove();
            //remove from localStorage
            removeFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    e.preventDefault();
}

//remove from local storage implementation
function removeFromLocalStorage(taskItem) {
    console.log('test removelocalstroage');
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        //check if the textContent matches the current tasks iteration
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    console.log(tasks);
    //set local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear task implementation
function clearTasks() {
    // not preferred method
    // taskList.innerHTML = '';

    //preferred method for removing elements
    while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
    }
}

//filtering task implementation
function filterTasks(e) {
    //reference to the value that is being typed
    const text = e.target.value.toLowerCase();
    //target all of the items with collection and iterate through each item
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            //display the item because there is a match
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
