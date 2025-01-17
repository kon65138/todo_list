import { projects } from './default.js';
import { renderProj } from './default.js';

export function loadSidebarProjects () {
    const sideProjHtml = document.querySelector(".projects");

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

const openProjectPopup = document.querySelector(".newProject");
const closeProjPopup = document.getElementById('cancelProj');
const projectPopup = document.querySelector(".projectsPopup");

openProjectPopup.addEventListener("click", () => {


    projectPopup.style = "display:flex;";
})

closeProjPopup.addEventListener("click", () => {
    projectPopup.style = "display:none;";
})
