
export function render (domElements) {
    const page = document.querySelector('.page');

    for (let i = 0; i < domElements.length; i++) {
        domElements[i].actualElement = document.createElement(domElements[i].element);
        // ^creates "actualElement" property in object and makes its create dom element.
        if (domElements[i].class) domElements[i].actualElement.classList.add(domElements[i].class);
        // adds class to actualElement
        if (domElements[i].id) domElements[i].actualElement.id = domElements[i].id;
        // adds id to actualElement
        if (domElements[i].textContent) domElements[i].actualElement.textContent = domElements[i].textContent;
        // adds textContnet to actualElement
        if (domElements[i].type) domElements[i].actualElement.setAttribute("type", domElements[i].type);
        if (domElements[i].isChecked === true) {
            domElements[i].actualElement.checked = domElements[i].isChecked;
            domElements[0].actualElement.style = 'opacity: 30%';
        } else if (domElements[i].isChecked === false) {
            domElements[i].actualElement.checked = domElements[i].isChecked;
        }
        // adds type attribute to actualElement
        if (domElements[i].parent) {
            const parent = document.querySelector(domElements[i].parent);
            parent.appendChild(domElements[i].actualElement);
        } else page.appendChild(domElements[i].actualElement);
        // attaches actualElements to dom
        if (domElements[i].src) {
            domElements[i].actualElement.setAttribute("src", domElements[i].src)
            domElements[i].actualElement.setAttribute("width", domElements[i].width)
        };
        if (domElements[i].bgColor) {
            const prioEl = document.querySelector(`${domElements[i].parent} .priority`)
            prioEl.style = `background-color: ${domElements[i].bgColor}`;
        }
    };
};