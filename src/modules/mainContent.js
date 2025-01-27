import { render } from './renderElements.js';
import { todo } from './todo.js';
import addTodoIcon from '../imgs/pencil-plus.svg';
import { deadlineOn } from './sidebar.js';
import { deadlineSort } from './sidebar.js';
import { urgencyOn } from './sidebar.js';
import { urgencySort } from './sidebar.js';
import { populateStorage } from '../index.js';


const domElements = [
    {element: 'h1', class: 'title', textContent: "default"},
    {element: 'div', class: 'tasksContainer'},
    {element: 'button', id: 'addTodo_button'},
    {element: 'img', src: addTodoIcon, id: 'addTodoIcon', parent: '#addTodo_button'}
];


let edit = '';
let ih = 0;
let pro = '';
export let cproj = 0;
render(domElements);

export const projects = [

];


const submitPopup = document.querySelector('#newt');

submitPopup.addEventListener("click", (e) => {
    if (edit == true) {
        const ttitle = document.getElementById("ttitle")
        const tdescription = document.getElementById("tdescription")
        const todoDate = document.getElementById("tdueDate")
        const prio = document.getElementById("tpriority")
        const project = document.getElementById("tproject")

        if (ttitle.value === '' || ttitle.value === null) {
            return
        } else if (todoDate.value === '' || todoDate.value === null) {
            return
        };


        projects[pro.project_no].todo_library[ih].name = ttitle.value;
        projects[pro.project_no].todo_library[ih].description = tdescription.value;
        projects[pro.project_no].todo_library[ih].dueDate = todoDate.value;
        projects[pro.project_no].todo_library[ih].priority = prio.value;
        projects[pro.project_no].todo_library[ih].id = project.value;

        if (pro.project_no != project.value) {
            let tempPro = projects[pro.project_no].todo_library[ih];
            projects[pro.project_no].todo_library.splice(ih, 1);
            projects[project.value].todo_library[projects[project.value].todo_library.length] = tempPro;
        }
        pro = '';
        edit = false;
        ih = 0;
        renderProj(projects[project.value]);
        document.querySelector('.todoPopup').style = "display: none;";
    } else {
        const title = document.getElementById("ttitle")
        const description = document.getElementById("tdescription")
        const todoDate = document.getElementById("tdueDate")
        const prio = document.getElementById("tpriority")
        const project = document.getElementById("tproject")

        if (title.value === '' || title.value === null) {
            return
        } else if (todoDate.value === '' || todoDate.value === null) {
            return
        };

    
    

        projects[project.value].todo_library[projects[project.value].todo_library.length] = new todo (title.value, description.value, todoDate.value, prio.value, false, project.value);
        renderProj(projects[project.value]);
    };
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

    project.value = cproj;

    let currentDate = new Date().toJSON().slice(0, 10);

    todoDate.setAttribute('min', currentDate);

    document.querySelector('.todoPopup').style = "display: flex;"

});

const closePopup = document.querySelector('#cancelt');
closePopup.addEventListener("click", () => document.querySelector('.todoPopup').style = "display: none;")

export function renderProj (proj) {

    const pageTitle = document.querySelector(".title");
    const taskCont = document.querySelector(".tasksContainer");
    cproj = proj.project_no;

    if (deadlineOn) {
        deadlineSort(cproj);
    } else if (urgencyOn) {
        urgencySort(cproj);
    };

    pageTitle.textContent = proj.name;
    taskCont.innerHTML = '';
    for (let i = 0; i < proj.todo_library.length; i++) {
        proj.todo_library[i].id = cproj
        proj.todo_library[i].renderTodo(i);

        let checkboxT = document.querySelector(`#_${cproj}_${i} .taskLeft > input`)

        let editT = document.querySelector(`#_${cproj}_${i} .taskEdit`);

        let delT = document.querySelector(`#_${cproj}_${i} .taskDelete`);

        checkboxT.addEventListener("change", () => {
            if (checkboxT.checked) {
                proj.todo_library[i].checked = true;
            renderProj(projects[cproj]);
            } else {
                proj.todo_library[i].checked = false;
            renderProj(projects[cproj]);
            }
        });

        delT.addEventListener('click', () => {
            projects[proj.project_no].todo_library[i].delete(i);
        })

        editT.addEventListener('click', () => {
            pro = proj
            edit = true;
            ih = i;
            const Ttitle = document.getElementById("ttitle")
            const tdescription = document.getElementById("tdescription")
            const todoDate = document.getElementById("tdueDate")
            const prio = document.getElementById("tpriority")
            const project = document.getElementById("tproject")
    
            Ttitle.value = proj.todo_library[i].name;
            tdescription.value = proj.todo_library[i].description;
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

    populateStorage();

};






