import { projects } from './mainContent.js';
import { renderProj } from './mainContent.js';
import { project } from './project.js';
import dltIcon from "../imgs/delete.svg";

function hasWhiteSpace(s) {
    return /\s/g.test(s);
};


export function loadSidebarProjects () {
    const sideProjHtml = document.querySelector(".projects");

    sideProjHtml.innerHTML = '';

    for (let i = 0; i < projects.length; i++) {
        let hoverDelete = false;
        let e = document.createElement('button');
        let t = document.createElement('div');

        t.textContent = projects[i].name;
        e.appendChild(t);
        e.classList.add(projects[i].name.replace(/\s/g, '_'), 'sBtn');

        if (i > 0) {
            let d = document.createElement('div');
            let img = document.createElement('img');
            img.setAttribute('src', dltIcon);
            d.appendChild(img);
            d.classList = "deleteProjDiv";
            e.appendChild(d);
            img.addEventListener("click", () => {
                hoverDelete = true;
                projects.splice(i, 1);
                renderProj(projects[0]);
                loadSidebarProjects()
            })
        }

        e.addEventListener("click", (e) => {
            if (hoverDelete == true) {
                return
            } else {
                renderProj(projects[i]);
            }
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
    if (projNameInpt.value === '' || projNameInpt.value === null) {
        return
    } else if (hasWhiteSpace(projNameInpt.value) === true) {

    }
    projects[projects.length] = new project (projNameInpt.value, projects.length);
    loadSidebarProjects();
})
