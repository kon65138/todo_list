import './style.css';
import { loadDefaultTasks, renderProj } from './modules/mainContent.js';
import { loadSidebarProjects } from './modules/sidebar.js';
import { project } from './modules/project.js';
import { projects } from './modules/mainContent.js';
import { todo } from './modules/todo.js';

projects[projects.length] = new project ('default', projects.length);
let currentDate = new Date().toJSON().slice(0, 10);
projects[0].todo_library[projects[0].todo_library.length] = new todo ('Example task', "example description...", currentDate, "green", false, `0`);
renderProj(projects[0]);


loadSidebarProjects();





