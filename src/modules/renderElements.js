
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
        // adds type attribute to actualElement
        if (domElements[i].parent) {
            const parent = document.querySelector(domElements[i].parent);
            parent.appendChild(domElements[i].actualElement);
        } else page.appendChild(domElements[i].actualElement);
        // attaches actualElements to dom
    };
};