import './style.css';
import { loadDefaultTasks } from './modules/default.js';
import { loadSidebarProjects } from './modules/sidebar.js';
import { project } from './modules/project.js';

let ham = new project("ham", 3);
console.log(ham);


loadSidebarProjects();
loadDefaultTasks();



