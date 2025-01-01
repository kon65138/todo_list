
import { render } from "./renderElements.js";
import dltIcon from "../imgs/delete.svg";
import edtIcon from "../imgs/pencil.svg";

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
            {element: 'div', class: 'taskDate', textContent: `${this.dueDate}`, parent: `#${this.name} .taskRight`},
            {element: 'div', class: 'DltEdt', parent: `#${this.name}`},
            {element: 'button', class: 'taskEdit', parent: `#${this.name} .DltEdt`},
            {element: 'img', id: 'editIcon', src: edtIcon, width: '20px', parent: `#${this.name} .taskEdit`},
            {element: 'button', class: 'taskDelete', parent: `#${this.name} .DltEdt`},
            {element: 'img', id: 'deleteIcon', src: dltIcon, width: '20px', parent: `#${this.name} .taskDelete`},
            {element: 'div', class: 'priority', bgColor: `${this.priority}`, parent: `#${this.name}`}
        ];

        render(domElements);
    }
}