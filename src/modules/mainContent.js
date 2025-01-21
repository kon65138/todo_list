import { render } from './renderElements.js';
import { todo } from './todo.js';
import addTodoIcon from '../imgs/pencil-plus.svg';
import { de } from 'date-fns/locale';


const domElements = [
    {element: 'h1', class: 'title', textContent: "default"},
    {element: 'div', class: 'tasksContainer'},
    {element: 'button', id: 'addTodo_button'},
    {element: 'img', src: addTodoIcon, id: 'addTodoIcon', parent: '#addTodo_button'}
];

render(domElements);

export const projects = [

];


const submitPopup = document.querySelector('#newt');

submitPopup.addEventListener("click", () => {
    const title = document.getElementById("ttitle")
    const description = document.getElementById("tdescription")
    const todoDate = document.getElementById("tdueDate")
    const prio = document.getElementById("tpriority")
    const project = document.getElementById("tproject")

    
    

    projects[project.value].todo_library[projects[project.value].todo_library.length] = new todo (title.value, description.value, todoDate.value, prio.value, false, project.value);
    renderProj(projects[project.value]);


});


const openPopup = document.querySelector("#addTodo_button");

openPopup.addEventListener("click", () => {

    const Ttitle = document.getElementById("ttitle")
    const description = document.getElementById("tdescription")
    const todoDate = document.getElementById("tdueDate")
    const prio = document.getElementById("tpriority")
    const project = document.getElementById("tproject")
    
    Ttitle.value = '';
    description.value = '';
    todoDate.value = '';
    prio.value = 'yellow';
    project.innerHTML = '';

    for (let i = 0; i < projects.length; i++) {
        let p = document.createElement('option');
        p.textContent = projects[i].name;
        p.setAttribute('value', projects[i].project_no);
        project.appendChild(p);
    }

    let currentDate = new Date().toJSON().slice(0, 10);

    todoDate.setAttribute('min', currentDate);

    document.querySelector('.todoPopup').style = "display: flex;"

});

const closePopup = document.querySelector('#cancelt');
closePopup.addEventListener("click", () => document.querySelector('.todoPopup').style = "display: none;")

export function renderProj (proj) {
    const pageTitle = document.querySelector(".title");
    const taskCont = document.querySelector(".tasksContainer");

    pageTitle.textContent = proj.name;
    taskCont.innerHTML = '';
    for (let i = 0; i < proj.todo_library.length; i++) {
        proj.todo_library[i].renderTodo(i);

        let editT = document.querySelector(`#_${proj.project_no}_${i} .taskEdit`);

        let delT = document.querySelector(`#_${proj.project_no}_${i} .taskDelete`);

        delT.addEventListener('click', () => {
            projects[proj.project_no].todo_library[i].delete(i);
        })

        editT.addEventListener('click', () => {
            const Ttitle = document.getElementById("ttitle")
            const description = document.getElementById("tdescription")
            const todoDate = document.getElementById("tdueDate")
            const prio = document.getElementById("tpriority")
            const project = document.getElementById("tproject")
    
            Ttitle.value = proj.todo_library[i].name;
            description.value = proj.todo_library[i].description;
            todoDate.value = proj.todo_library[i].dueDate;
            prio.value = proj.todo_library[i].priority;
            project.innerHTML = '';

            for (let i = 0; i < projects.length; i++) {
                let p = document.createElement('option');
                p.textContent = projects[i].name;
                p.setAttribute('value', projects[i].project_no);
                project.appendChild(p);
            }

            project.value = proj.todo_library[i].id;

            let currentDate = new Date().toJSON().slice(0, 10);

            todoDate.setAttribute('min', currentDate);

            document.querySelector('.todoPopup').style = "display: flex;"
        })
    }


};






