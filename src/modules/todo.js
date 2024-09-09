
import { render } from "./renderElements.js";

export class todo {
    constructor(name, description, dueDate, priority, checked) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }

    renderTodo(){
        const domElements = [
            {element: 'div', class: 'task', id: `${this.name}`, parent: '.tasksContainer'},
            {element: 'div', class: 'taskLeft', parent: '.task'},
            {element: 'input', type: 'checkbox', parent: '.taskLeft'},
            {element: 'div', class: 'taskMiddle', parent: '.task'},
            {element: 'div', class: 'taskTitle', textContent: `${this.name}`, parent: '.taskMiddle'},
            {element: 'div', class: 'taskDescription', textContent: `${this.description}`, parent: '.taskMiddle'},
            {element: 'div', class: 'taskRight', parent: '.task'},
            {element: 'div', class: 'taskPriority', textContent: `${this.priority}`, parent: '.taskRight'},
            {element: 'div', class: 'taskDate', textContent: `${this.dueDate}`, parent: '.taskRight'},
            {element: 'div', class: 'DltEdt', parent: '.task'},
            {element: 'button', class: 'taskEdit', parent: '.DltEdt'},
            {element: 'img', id: 'editIcon', parent: '.taskEdit'},
            {element: 'button', class: 'taskDelete', parent: '.DltEdt'},
            {element: 'img', id: 'deleteIcon', parent: '.taskDelete'},
        ];

        render(domElements);
    }
}