import { render } from './renderElements.js';

export function loadAllTasks () {   


    const domElements = [
        {element: 'h1', class: 'title', textContent: "All tasks"},
        {element: 'div', class: 'tasksContainter'},
    ];

    render(domElements);

};