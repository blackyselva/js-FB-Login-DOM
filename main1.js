let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

form.addEventListener('submit', function(e){
    e.preventDefault();
    readPost();
});

let data = {};
function readPost() {
    data['text'] = input.value;
    createPost();
}

function createPost() {
    posts.innerHTML += `<div>
    <p>${data.text}</p>
        <span class="icon">
            <iconify-icon onClick="editPost(this)" icon="material-symbols:edit-document"></iconify-icon>
            <iconify-icon onClick="deletePost(this)" icon="material-symbols:delete-outline"></iconify-icon>
        </span>
    </div>`
    input.value = " ";
}

function editPost(e) {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    posts.innerHTML = " ";
}

function deletePost(e) {
    input.value = " ";
    posts.innerHTML = " ";
}