//reference to the .get-jokes class in the DOM
const getjokes = document.querySelector('.get-jokes');

//when clicking on the .get-jokes button call the getJokes function
getjokes.addEventListener('click', getJokes);

//implementation of getJokes
function getJokes(e) {
    //target the number input type
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);
    //use output to store what we want to place into the DOM
    let output = '';
    //use xmlhttprequest
    const xhr = new XMLHttpRequest();
    if (number > 0) {
        //make a get request to the api
        xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
        //if the request was successful - log it to the console for now
        xhr.onload = function() {
            if (this.status === 200) {
                //parse the JSON to create an object
                const response = JSON.parse(this.responseText);
                console.log(response.value);
                //determine what to display based on
                //whether the request was successful or not
                if (response.type === 'success') {
                    //append the jokes to the output variable
                    response.value.forEach(joke => {
                        //create the list of jokes
                        output += `<li>${joke.joke}</li>`;
                    });
                } else {
                    //the reponse was not successful
                    output += '<li>Something went wrong</li>';
                }
                document.querySelector('.jokes').innerHTML = output;
            }
        }
    } else {
        //handle the case where someone tries to enter an empty form
        output += '<li>You need to enter a number</li>';
        document.querySelector('.jokes').innerHTML = output;
    }
    //only make a send request of the readyStatus is 1
    if (xhr.readyState === 1) {
        xhr.send();
    }
    e.preventDefault();
}