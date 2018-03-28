
// different type of RESTful requests

function resHTTP() {
    //create an xhp response object
    this.http = new XMLHttpRequest();
}

//HTTP get request implementation
resHTTP.prototype.get = function(url, callback) {
    //XHR open request
    this.http.open('GET', url, true);
    //check if the status is 200
    this.http.onload = function() {
        if (this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback('Error: ', this.http.status);
        }
    }.bind(this);
    this.http.send();
}
//HTTP post implementation
resHTTP.prototype.post = function(url, data, callback) {
    //create a post request
    this.http.open('POST', url, true);
    //set the content type
    this.http.setRequestHeader('Content-type', 'application/json');
    //call onload
    this.http.onload = function() {
        callback(null, this.http.responseText);
    }.bind(this);

    this.http.send(JSON.stringify(data));
}

//HTTP put implementation
resHTTP.prototype.put = function(url, data, callback) {
    //create a put request
    this.http.open('PUT', url, true);
    //set the content type
    this.http.setRequestHeader('Content-type', 'application/json');
    //call on load
    this.http.onload = function() {
        callback(null, this.http.responseText);
    }.bind(this);

    this.http.send(JSON.stringify(data));
};

//HTTP get implementation
resHTTP.prototype.delete = function(url, callback) {
    //create a delete request
    this.http.open('DELETE', url, true);
    this.http.onload = function() {
        //check the status
        if (this.http.status === 200) {
            callback(null, 'The post has been deleted');
        } else {
            callback('Error: ', this.http.status);
        }
    }.bind(this);

    this.http.send();
}