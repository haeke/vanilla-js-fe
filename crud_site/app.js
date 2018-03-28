
//create an instance of the reshttp() function
const http = new resHTTP();

//use the get function in the library API
http.get('https://jsonplaceholder.typicode.com/posts1', function (error, response) {
    if (error) {
        console.log(`${error} ${response}`);
    } else {
        console.log(response);
    }
});