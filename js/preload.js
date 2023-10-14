function domLoad() {
    loadLocations();
}

function loadLocations() {
    var imageData;
    getData("https://gist.githubusercontent.com/LvInSaNevL/7ee67b34e03f8b735acef94c367b9564/raw/7ec9bf744041066ce9a1390751fb5bb436197fc3/flight_test_data.json", function(text){
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