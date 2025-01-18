import { projects } from './default.js';
import { renderProj } from './default.js';
import { project } from './project.js';

export function loadSidebarProjects () {
    const sideProjHtml = document.querySelector(".projects");

    sideProjHtml.innerHTML = '';

    for (let i = 0; i < projects.length; i++) {
        let e = document.createElement('button');
        let t = document.createElement('div');
        t.textContent = projects[i].name;
        e.appendChild(t);
        e.classList.add(projects[i].name, 'sBtn');

        e.addEventListener("click", (e) => {
            renderProj(projects[i]);
        })


        sideProjHtml.appendChild(e);
    }
};

const openProjectPopupBtn = document.querySelector(".newProject");
const closeProjPopup = document.getElementById('cancelProj');
const projectPopup = document.querySelector(".projectsPopup");
const projNameInpt = document.querySelector("#projName");
const newProjBtn = document.querySelector("#newProj");

openProjectPopupBtn.addEventListener("click", () => {
    projNameInpt.value = '';
    projectPopup.style = "display:flex;";
})

closeProjPopup.addEventListener("click", () => {
    projectPopup.style = "display:none;";
})

newProjBtn.addEventListener("click", () => {
    projects[projects.length] = new project (projNameInpt.value, projects.length);
    loadSidebarProjects();
})
