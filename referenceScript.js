// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// // DON"T USE AS IT MAKES IT HARD TO MAKE CHANGES
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(let i=0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTBYTAGNAME //
// let li = document.getElementsByClassName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(let i=0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello world';

// let submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //

// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
// let itemList = document.querySelector('#items');
// parentNode property
// onsole.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement property
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNodes property
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild property
// console.log(itemList.firstChild);

// firstElementChild property
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello 1";

// nextSibling property
// console.log(itemList.nextSibling);
// nextElementSibling property
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement method
// let newDiv = document.createElement('div');

// // add class
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'hello 1';

// // add attribute
// newDiv.setAttribute('title', 'Hello div');

// // Create text node
// let newDivText = document.createTextNode('Hello world');

// // Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// let button = document.getElementById('button').addEventListener
// ('click',buttonClick);

// function buttonClick(e){
    // console.log("Button clicked");
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = '#ccc';
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // let output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);


// }

// let button = document.getElementById('button');
// let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);


// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');
// let select =  document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent)

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//     e.preventDefault();
//     console.log('EVENT TYPE: '+e.type);


    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

// }

// START OF PROJECT HERE //

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event //
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e){
    e.preventDefault();

    // get input value
    let newItem = document.getElementById("item").value;

    // create new li element
    let li = document.createElement("li");
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure?")){   
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter item
function filterItems(e){
    // convert to lowercase
    let text = e.target.value.toLowerCase();
    // lis
    let items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })

}







