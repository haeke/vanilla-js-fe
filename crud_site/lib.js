
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

//HTTP put implementation
