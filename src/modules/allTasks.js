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

    const test1 = new todo ("luke", "test description to see how it copes with long stuff lmao lets gooo vaveiavhaeovaovahvoivhoaivheovihvghagoig", "11/09/2001", "medium", true);
    test1.renderTodo();

    const test2 = new todo ("test3", "test description is noraml length ig", "date", "low", false);
    test2.renderTodo()



};