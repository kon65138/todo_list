import './style.css';
import { renderProj } from './modules/mainContent.js';
import { loadSidebarProjects } from './modules/sidebar.js';
import { project } from './modules/project.js';
import { projects } from './modules/mainContent.js';
import { todo } from './modules/todo.js';

if (!localStorage.getItem('projects')) {
    projects[projects.length] = new project ('default', projects.length);
    let currentDate = new Date().toJSON().slice(0, 10);
    projects[0].todo_library[projects[0].todo_library.length] = new todo ('Example task', "example description...", currentDate, "green", false, `0`);
    renderProj(projects[0]);
    populateStorage();
} else {
    loadStorage()
    renderProj(projects[0]);
}




loadSidebarProjects();

export function populateStorage () {
    console.log('now population storage')
    localStorage.setItem('projects', JSON.stringify(projects));
    console.log(JSON.parse(localStorage.getItem('projects')))
}

function loadStorage () {
    let storageArr = JSON.parse(localStorage.getItem('projects'));
    for (let i = 0; i < storageArr.length; i++) {
        projects[i] = new project(storageArr[i].name, i);
        for (let b = 0; b < storageArr[i].todo_library.length; b++) {
            projects[i].todo_library[b] = new todo(storageArr[i].todo_library[b].name, storageArr[i].todo_library[b].description, storageArr[i].todo_library[b].dueDate, storageArr[i].todo_library[b].priority, storageArr[i].todo_library[b].checked, storageArr[i].todo_library[b].id);
        }
    }
    console.log('now loading storage')
    console.log(projects);
    console.log(storageArr);
}







