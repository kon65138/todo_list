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

export const default_library = [
    new todo ("miles", "library test", "11/04/2023", "blue", true, "default_library_0"),
    new todo ("luke", "test description to see how it copes with long stuff lmao lets gooo vaveiavhaeovaovahvoivhoaivheovihvghagoig", "11/09/2001", "yellow", true, "default_library_1"),
];

export function loadDefaultTasks () {   

    
    for (let task of default_library) {
        task.renderTodo()
    }

};

const submitPopup = document.querySelector('#newt');

submitPopup.addEventListener("click", () => {
    const title = document.getElementById("ttitle")
    const description = document.getElementById("tdescription")
    const date = document.getElementById("tdueDate")
    const prio = document.getElementById("tpriority")
    const project = document.getElementById("tproject")
    

    default_library[default_library.length] = new todo (title.value, description.value, date.value, prio.value, false, `default_library_${default_library.length}`);
    document.querySelector('.tasksContainer').innerHTML = "";
    loadDefaultTasks();

    
});
