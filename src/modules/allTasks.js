import { render } from './renderElements.js';
import { todo } from './todo.js';

export function loadAllTasks () {   


    const domElements = [
        {element: 'h1', class: 'title', textContent: "All tasks"},
        {element: 'div', class: 'tasksContainer'},
    ];

    render(domElements);

    const test = new todo ("Miles", "is not cool", "11/12/2005", "high", false);
    test.renderTodo();

};