let form = document.querySelector("#form");

form.addEventListener('submit', retriveData);

function retriveData(e) {
    e.preventDefault();

    let phNum1 = document.querySelector("#phNum").value;
    let password1 = document.querySelector("#pass").value;

    let getPhNumber = localStorage.getItem('phNumber');
    let Password = localStorage.getItem('Password');

    if (phNum1 == getPhNumber && password1 == Password) {
        location.href = "todo.html";
    } else {
        alert("incorrect");
    }
}