import { render } from './renderElements.js';

export function loadAllTasks () {   


    const domElements = [
        {element: 'h1', class: 'title', textContent: "no parent"},
        {element: 'div', class: 'underTitleContent', textContent: 'underTitleContent div'},
        {element: 'div', class: 't1', textContent: 'kid of underTitleContent div', parent: '.underTitleContent'},
        {element: 'div', class: 't2', textContent: 'kid of the kid of underTitleContent div', parent: '.t1'},
        {element: 'div', class: 't3', textContent: 'another kid of underTitleContent div', parent: '.underTitleContent'},
        {element: 'div', class: 't4', textContent: 'another no parent'},
        {element: 'div', class: 't5', textContent: "kid of 'another no parent'", parent: '.t4'},
    ];

    render(domElements);

};