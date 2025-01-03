import './style.css';
import { loadDefaultTasks } from './modules/default.js';

loadDefaultTasks()


const createTodoButton = document.querySelector("#addTodo_button");
createTodoButton.addEventListener("click", () => {
    const title = document.querySelector('.page > .title');
    const projectDropdown = document.querySelector("#tproject");

    projectDropdown.innerHTML = '';
    
    let p = document.createElement('option');
    p.textContent = title.textContent;
    p.setAttribute('value', title.textContent);

    projectDropdown.appendChild(p);

    document.querySelector('.todoPopup').style = "display: flex;"

});

const closePopup = document.querySelector('#cancelt');
closePopup.addEventListener("click", () => document.querySelector('.todoPopup').style = "display: none;")


