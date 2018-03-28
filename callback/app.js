// CreatePosts receives the getPosts function as a parameter that is invoked after
// 2 seconds using the setTimout function.

const posts = [
    {title: 'Post one', body: 'this is a post'},
    {title: 'Post two', body: 'This is another post'},
    {title: 'post three', body: 'The third post'}
];

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.querySelector('.posts').innerHTML = output;
    });
}

createPost({title: 'Another post', body: 'a great article'}, getPosts);

getPosts();