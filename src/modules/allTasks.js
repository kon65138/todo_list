import { render } from './renderElements.js';
import { todo } from './todo.js';
import addTodoIcon from '../imgs/pencil-plus.svg';

export function loadAllTasks () {   


    const domElements = [
        {element: 'h1', class: 'title', textContent: "All tasks"},
        {element: 'div', class: 'tasksContainer'},
        {element: 'button', id: 'addTodo_button'},
        {element: 'img', src: addTodoIcon, id: 'addTodoIcon', parent: '#addTodo_button'}
    ];

    render(domElements);

    const test = new todo ("Mils", "is not cool", "11/12/2005", "red", false);
    test.renderTodo();

    const test1 = new todo ("luke", "test description to see how it copes with long stuff lmao lets gooo vaveiavhaeovaovahvoivhoaivheovihvghagoig", "11/09/2001", "yellow", true);
    test1.renderTodo();

    const test2 = new todo ("test3", "test description is noraml length ig", "date", "green", false);
    test2.renderTodo();




};