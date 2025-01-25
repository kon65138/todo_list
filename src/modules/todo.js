
import { render } from "./renderElements.js";
import dltIcon from "../imgs/delete.svg";
import edtIcon from "../imgs/pencil.svg";
import { projects } from "./mainContent.js";
import { renderProj } from "./mainContent.js";

export class todo {
    constructor(name, description, dueDate, priority, checked, id) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
        this.id = id;
    }


    renderTodo(i){
        let todoId = `_${this.id}_${i}`;


        const domElements = [
            {element: 'div', class: 'task', id: `${todoId}`, parent: '.tasksContainer'},
            {element: 'div', class: 'taskLeft', parent: `#${todoId}`},
            {element: 'input', type: 'checkbox', parent: `#${todoId} .taskLeft`, isChecked: this.checked},
            {element: 'div', class: 'taskMiddle', parent: `#${todoId}`},
            {element: 'div', class: 'taskTitle', textContent: `${this.name}`, parent: `#${todoId} .taskMiddle`},
            {element: 'div', class: 'taskDescription', textContent: `${this.description}`, parent: `#${todoId} .taskMiddle`},
            {element: 'div', class: 'taskRight', parent: `#${todoId}`},
            {element: 'div', class: 'taskDate', textContent: `${this.dueDate}`, parent: `#${todoId} .taskRight`},
            {element: 'div', class: 'DltEdt', parent: `#${todoId}`},
            {element: 'button', class: 'taskEdit', parent: `#${todoId} .DltEdt`},
            {element: 'img', id: 'editIcon', src: edtIcon, width: '20px', parent: `#${todoId} .taskEdit`},
            {element: 'button', class: 'taskDelete', parent: `#${todoId} .DltEdt`},
            {element: 'img', id: 'deleteIcon', src: dltIcon, width: '20px', parent: `#${todoId} .taskDelete`},
            {element: 'div', class: 'priority', bgColor: `${this.priority}`, parent: `#${todoId}`}
        ];
        render(domElements);
    };

    delete(i) {
        let todoId = `_${this.id}_${i}`;
        let arr = todoId.split('');
        let projId = arr.slice(1, 2).join();
        let todoNo = arr.slice(3).join();
        projects[projId].todo_library.splice(todoNo,1);
        renderProj(projects[projId]);
        
    }
}

