import { projects } from './mainContent.js';
import { renderProj } from './mainContent.js';
import { project } from './project.js';
import dltIcon from "../imgs/delete.svg";
import { compareAsc } from "date-fns";
import { cproj } from './mainContent.js';
import { populateStorage } from '../index.js';

const openProjectPopupBtn = document.querySelector(".newProject");
const closeProjPopup = document.getElementById('cancelProj');
const projectPopup = document.querySelector(".projectsPopup");
const projNameInpt = document.querySelector("#projName");
const newProjBtn = document.querySelector("#newProj");
const deadlineBtn = document.querySelector(".deadline");
const urgencyBtn = document.querySelector(".urgency");

function hasWhiteSpace(s) {
    return /\s/g.test(s);
};


export function loadSidebarProjects () {
    const sideProjHtml = document.querySelector(".projects");

    sideProjHtml.innerHTML = '';

    for (let i = 0; i < projects.length; i++) {
        projects[i].project_no = i;
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
                loadSidebarProjects()
                renderProj(projects[0]);
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
    populateStorage();
})


let deadlineClicked = 1;
export let deadlineOn = true;
deadlineBtn.addEventListener("click", () => {
    deadlineClicked += 1;
    urgencyOn = false;
    deadlineOn = true;
    deadlineSort(cproj);
    renderProj(projects[cproj]);
});

let urgencyClicked = 0; 
export let urgencyOn = false;
urgencyBtn.addEventListener("click", () => {
    urgencyClicked += 1;
    urgencyOn = true;
    deadlineOn = false;
    urgencySort(cproj);
    renderProj(projects[cproj]);
});

function greyTodo (projectNumber) {
    projects[projectNumber].todo_library.sort(function(a, b) {
        if (a.checked === b.checked) {
            return 0    
        } else if (a.checked === true) {
            return 1
        } else if (a.checked === false && b.checked === true) {
            return -1
        }
    });
};



export function deadlineSort (projectNumber) {
    if ((deadlineClicked & 1) === 1) {
        projects[projectNumber].todo_library.sort(function (a, b) {
            return compareAsc(a.dueDate, b.dueDate);
        });
        greyTodo(projectNumber);
    } else if ((deadlineClicked & 1) === 0) {
        projects[projectNumber].todo_library.sort(function (a, b) {
            return compareAsc(b.dueDate, a.dueDate);
        });
        greyTodo(projectNumber);
    };
};

export function urgencySort (projectNumber) {
    if ((urgencyClicked & 1) === 1) {
        projects[projectNumber].todo_library.sort(function (a, b) {
            return compareAsc(a.dueDate, b.dueDate);
        });
        projects[projectNumber].todo_library.sort(function (a, b) {
            if (a.priority === b.priority) {
                return 0
            } else if (a.priority === 'red' && b.priority !== 'red') {
                return -1
            } else if (a.priority === 'yellow' && (b.priority !== 'yellow' && b.priority !== 'red')){
                return -1
            } else {
                return 1
            }
        });
        greyTodo(projectNumber);
    } else if ((urgencyClicked & 1) === 0) {
        projects[projectNumber].todo_library.sort(function (a, b) {
            return compareAsc(a.dueDate, b.dueDate);
        });
        projects[projectNumber].todo_library.sort(function (a, b) {
            if (a.priority === b.priority) {
                return 0
            } else if (b.priority === 'red' && a.priority !== 'red') {
                return -1
            } else if (b.priority === 'yellow' && (a.priority !== 'yellow' && a.priority !== 'red')){
                return -1
            } else {
                return 1
            };
        });
        greyTodo(projectNumber);
    };
}

