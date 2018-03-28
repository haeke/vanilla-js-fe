
//create an instance of the reshttp() function
const http = new resHTTP();

//use the get function in the library API
// http.get('https://jsonplaceholder.typicode.com/posts1', function (error, response) {
//     if (error) {
//         console.log(`${error} ${response}`);
//     } else {
//         console.log(response);
//     }
// });

//create a data object
const data = {
    title: 'First Post',
    body: 'This is another custom post'
};
//create a post request
http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
})