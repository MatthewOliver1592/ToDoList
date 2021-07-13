let toDo = document.getElementById('addForm');
let itemList = document.getElementById('items');

toDo.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);


function addItem(e){
    e.preventDefault();
    if (document.querySelector('input').value == "") {
        alert("You must enter a value!");
    } else {
    let newToDo = document.getElementById('item').value;
    let newLi = document.createElement("li");
    newLi.className = 'list-group-item';
    newLi.appendChild(document.createTextNode(newToDo));
    itemList.appendChild(newLi);
    let input = document.querySelector('input');
    input.value = "";
    }
}


function removeItem(e){
    let text = e.target.innerText;
    e.target.className = 'list-group-item';
    e.target.innerHTML = '<del>'+text+'</del>';
    let timeout = setTimeout(delayedDelete, 1000);
    function delayedDelete (){
        itemList.removeChild(e.target);
    }

}