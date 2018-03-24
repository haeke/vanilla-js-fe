
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
    //add event listener to taskList
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter task events
    filter.addEventListener('keyup', filterTasks);
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

    //append the li tag to the ul tag
    taskList.appendChild(li);
    //clear the input
    taskInput.value = '';

    e.preventDefault();
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
        }
    }
    e.preventDefault();
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