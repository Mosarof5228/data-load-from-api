function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayData(data))
}
loadData()

function displayData(posts) {
    const postContainer = document.getElementById("post-container");
    for (const post of posts) {
        console.log(post)
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
        <h4>Id-${post.id}</h4>
        <h4>title-${post.title}</h4>
        <p>Description-${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}