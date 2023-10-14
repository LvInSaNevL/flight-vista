function domLoad() {
    loadLocations();
}

function loadLocations() {
    var imageData;
    getData("https://raw.githubusercontent.com/LvInSaNevL/flight-vista/main/Images/image_reference.json", function(text){
        var JSON_object = JSON.parse(text);
        imageData = JSON_object;
    });
    console.log(imageData);

    const sidebar = document.getElementById("sidebar");
    imageData.forEach(element => {
        sidebar.appendChild(generateLocationItem(element))
    });
}

function generateLocationItem(data) {
    const newDiv = document.createElement("div");

    // Data
    newDiv.appendChild(document.createTextNode(data["name"]));

    return newDiv;
}