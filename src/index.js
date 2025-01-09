import './style.css';
import { loadDefaultTasks } from './modules/default.js';

loadDefaultTasks()


const openPopup = document.querySelector("#addTodo_button");
openPopup.addEventListener("click", () => {
    const title = document.querySelector('.page > .title');
    const projectDropdown = document.querySelector("#tproject");

    projectDropdown.innerHTML = '';
    
    let p = document.createElement('option');
    p.textContent = title.textContent;
    p.setAttribute('value', title.textContent);

    projectDropdown.appendChild(p);

    const Ttitle = document.getElementById("ttitle")
    const description = document.getElementById("tdescription")
    const todoDate = document.getElementById("tdueDate")
    const prio = document.getElementById("tpriority")
    const project = document.getElementById("tproject")
    
    Ttitle.value = '';
    description.value = '';
    todoDate.value = '';
    prio.value = 'yellow';

    let currentDate = new Date().toJSON().slice(0, 10);

    todoDate.setAttribute('min', currentDate);

    document.querySelector('.todoPopup').style = "display: flex;"

});

const closePopup = document.querySelector('#cancelt');
closePopup.addEventListener("click", () => document.querySelector('.todoPopup').style = "display: none;")


