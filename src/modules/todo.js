
import { render } from "./renderElements.js";
import dltIcon from "../imgs/delete.svg";
import edtIcon from "../imgs/pencil.svg";

export class todo {
    constructor(name, description, dueDate, priority, checked, id) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
        this.id = id;
    }

    renderTodo(){
        const domElements = [
            {element: 'div', class: 'task', id: `${this.id}`, parent: '.tasksContainer'},
            {element: 'div', class: 'taskLeft', parent: `#${this.id}`},
            {element: 'input', type: 'checkbox', parent: `#${this.id} .taskLeft`},
            {element: 'div', class: 'taskMiddle', parent: `#${this.id}`},
            {element: 'div', class: 'taskTitle', textContent: `${this.name}`, parent: `#${this.id} .taskMiddle`},
            {element: 'div', class: 'taskDescription', textContent: `${this.description}`, parent: `#${this.id} .taskMiddle`},
            {element: 'div', class: 'taskRight', parent: `#${this.id}`},
            {element: 'div', class: 'taskDate', textContent: `${this.dueDate}`, parent: `#${this.id} .taskRight`},
            {element: 'div', class: 'DltEdt', parent: `#${this.id}`},
            {element: 'button', class: 'taskEdit', parent: `#${this.id} .DltEdt`},
            {element: 'img', id: 'editIcon', src: edtIcon, width: '20px', parent: `#${this.id} .taskEdit`},
            {element: 'button', class: 'taskDelete', parent: `#${this.id} .DltEdt`},
            {element: 'img', id: 'deleteIcon', src: dltIcon, width: '20px', parent: `#${this.id} .taskDelete`},
            {element: 'div', class: 'priority', bgColor: `${this.priority}`, parent: `#${this.id}`}
        ];

        render(domElements);
    }
}