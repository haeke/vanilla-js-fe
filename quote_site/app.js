//reference to the .get-jokes class in the DOM
const getjokes = document.querySelector('.get-jokes');

//when clicking on the .get-jokes button call the getJokes function
getjokes.addEventListener('click', getJokes);

//implementation of getJokes
function getJokes(e) {
    //target the number input type
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);
    //use xmlhttprequest
    const xhr = new XMLHttpRequest();
    //make a get request to the api
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    //if the request was successful - log it to the console for now
    xhr.onload = function() {
        if (this.status === 200) {
            //parse the JSON to create an object
            const response = JSON.parse(this.responseText);
            console.log(response.value);
        }
    }
    xhr.send();

    e.preventDefault();
}