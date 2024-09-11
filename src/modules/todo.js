
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
            {element: 'div', class: 'taskLeft', parent: `#${this.name}`},
            {element: 'input', type: 'checkbox', parent: `#${this.name} .taskLeft`},
            {element: 'div', class: 'taskMiddle', parent: `#${this.name}`},
            {element: 'div', class: 'taskTitle', textContent: `${this.name}`, parent: `#${this.name} .taskMiddle`},
            {element: 'div', class: 'taskDescription', textContent: `${this.description}`, parent: `#${this.name} .taskMiddle`},
            {element: 'div', class: 'taskRight', parent: `#${this.name}`},
            {element: 'div', class: 'taskPriority', textContent: `${this.priority}`, parent: `#${this.name} .taskRight`},
            {element: 'div', class: 'taskDate', textContent: `${this.dueDate}`, parent: `#${this.name} .taskRight`},
            {element: 'div', class: 'DltEdt', parent: `#${this.name}`},
            {element: 'button', class: 'taskEdit', parent: `#${this.name} .DltEdt`},
            {element: 'img', id: 'editIcon', parent: `#${this.name} .taskEdit`},
            {element: 'button', class: 'taskDelete', parent: `#${this.name} .DltEdt`},
            {element: 'img', id: 'deleteIcon', parent: `#${this.name} .taskDelete`},
        ];

        render(domElements);
    }
}