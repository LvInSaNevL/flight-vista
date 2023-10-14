function getData(file, callback) {
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open("GET", file, false);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status == "200") {
           callback(request.responseText);
        }
    }
    request.send(null);
 }