
const input = document.querySelector("#inp");
const add = document.querySelector("#add");
const remove = document.querySelector("#rem");
let data = JSON.parse(localStorage.getItem('values')) || [];

function addButton() {
    add.addEventListener("click", function() {
        if (input.value.trim() !== "") {
            data.push(input.value.trim());
            input.value = ""; 
            renderTasks();
            localStore();
        }
    });
}

function renderTasks() {
    let clutter = "";
    data.forEach((item, index) => {
        clutter += `<div id="mytask">
            <input type="checkbox" name="" id="">
            <h2>${item}</h2>
            <button onclick="removeTask(${index})">remove</button>
        </div>`;
    });
    document.querySelector("#todo").innerHTML = clutter;
    
    // Show or hide the remove button based on the length of data
    remove.style.display = data.length ? "block" : "none";
}

function removeTask(index) {
    data.splice(index, 1);
    renderTasks();
    localStore();
}

function localStore() {
    localStorage.setItem('values', JSON.stringify(data));
}

window.addEventListener("load", function() {
    renderTasks();
});

addButton();
