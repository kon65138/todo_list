import { render } from './renderElements.js';
import { todo } from './todo.js';
import addTodoIcon from '../imgs/pencil-plus.svg';


const domElements = [
    {element: 'h1', class: 'title', textContent: "default"},
    {element: 'div', class: 'tasksContainer'},
    {element: 'button', id: 'addTodo_button'},
    {element: 'img', src: addTodoIcon, id: 'addTodoIcon', parent: '#addTodo_button'}
];

render(domElements);

const createTodoButton = document.querySelector("#addTodo_button");
createTodoButton.addEventListener("click", () => createTodoButton.style = "background: blue");

const default_library = [
    new todo ("miles", "library test", "11/04/2023", "blue", true),
    new todo ("luke", "test description to see how it copes with long stuff lmao lets gooo vaveiavhaeovaovahvoivhoaivheovihvghagoig", "11/09/2001", "yellow", true),
];

export function loadDefaultTasks () {   


    for (let task of default_library) {
        task.renderTodo()
    }

};