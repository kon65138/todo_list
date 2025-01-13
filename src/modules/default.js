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
    {
    name: 'default',
    todo_library: [new todo ("miles", "library test", "11/04/2023", "blue", true, "default_library_0"),
        new todo ("luke", "test description to see how it copes with long stuff lmao lets gooo vaveiavhaeovaovahvoivhoaivheovihvghagoig", "11/09/2001", "yellow", true, "default_library_1"),
    ],
    project_no: 0,
    },
    {
    name: 'mum',
    todo_library: [new todo ("2nd proj test", "", "11/04/2023", "blue", true, "default_library_0"),
        new todo ("luke", "test description to see how it copes with long stuff lmao lets gooo vaveiavhaeovaovahvoivhoaivheovihvghagoig", "11/09/2001", "yellow", true, "default_library_1"),
    ],
    project_no: 1,
    },
];


export function loadDefaultTasks () {   

    
    for (let task of projects[0].todo_library) {
        task.renderTodo()
    }

};

const submitPopup = document.querySelector('#newt');

submitPopup.addEventListener("click", (e) => {
    const title = document.getElementById("ttitle")
    const description = document.getElementById("tdescription")
    const todoDate = document.getElementById("tdueDate")
    const prio = document.getElementById("tpriority")
    const project = document.getElementById("tproject")

    
    

    projects[project.value].todo_library[projects[project.value].todo_library.length] = new todo (title.value, description.value, todoDate.value, prio.value, false, `${projects[project.value].name}_${projects[project.value].todo_library.length}`);
    document.querySelector('.tasksContainer').innerHTML = "";
    loadDefaultTasks();

    
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
    for (let task of proj.todo_library) {
        task.renderTodo()
    }
};
