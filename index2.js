function loadData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayNames(data))
}

function displayNames(data) {
    const liContainer = document.getElementById("li-container");
    for (const eachElement of data) {
        const name = eachElement.name;
        const li = document.createElement("li");
        li.innerText = name;
        liContainer.appendChild(li);
    }



}