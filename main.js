var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

function setData() {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    }
};

setTimeout(function() {
    console.log(data);
}, 500)
