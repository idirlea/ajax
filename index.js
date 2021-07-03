function clearData() {
    document.getElementById("text-container").innerHTML = ''
}

function loadData(file) {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        document.getElementById("text-container").innerHTML = this.responseText;
    }

    xhttp.open("GET", file, true);
    xhttp.send();
}