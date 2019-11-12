function isParent(parent, child) {
    let curentParent = child.parentElement;
    let isParent = false;

    while (curentParent) {
        isParent = parent === curentParent;
        if (isParent) {
            curentParent = null;
        } else {
            curentParent = curentParent.parentElement;
        }
    }
    return isParent;
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));


function linksFinder() {
    let linksArr = [...document.links];
    let newLinksArr = [];
    for (let i = 0; i < linksArr.length; i++) {
        if (linksArr[i].closest('ul') === null) {
            newLinksArr.push(linksArr[i]);
        }
    }
    return newLinksArr;
}
console.log(linksFinder());

function preventAndNextEl() {
    let ulEl = document.querySelector('ul');
    let prevEl;
    let nextEl;
    prevEl = ulEl.previousElementSibling;
    nextEl = ulEl.nextElementSibling;
    let el = {
        prevEl,
        nextEl,
    };
    return console.log(el);
}
preventAndNextEl();

function getTextfFromP() {
    let text = document.querySelector('p').textContent;
    return console.log(text);
}
getTextfFromP();

function infoDOM(nodeDOM) {
    let typeNode = '';
    console.log(nodeDOM.nodeType);
    switch (nodeDOM.nodeType) {
        case 1:
            typeNode = 'The node is a Element.';
            break;
        case 2:
            typeNode = 'The node is an Attr.';
            break;
        case 3:
            typeNode = 'The node is a Text node.';
            break;
        case 4:
            typeNode = 'The node is a CDATASection';
            break;
        case 5:
            typeNode = 'The node is an EntityReference.';
            break;
        case 6:
            typeNode = 'The node is an Entity.';
            break;
        case 7:
            typeNode = 'The node is a ProcessingInstruction.';
            break;
        case 8:
            typeNode = 'The node is a Comment.';
            break;
    }

    let infoNode = {
        type: typeNode,
        name: nodeDOM.nodeName,
        numberChildren: nodeDOM.childElementCount,
    };
    return infoNode;
}
console.log(infoDOM(document.querySelector('a')));

function getTextFromUl(ul) {
    let newArr = [];
    for (let i = 0; i < ul.children.length; i++) {
        newArr.push(ul.children[i].textContent);
    }
    return newArr;
}
console.log(getTextFromUl(document.querySelector('ul')));

function replaceTextNodes() {
    let paragraph = document.querySelector('p');
    for (let i = 0; i < paragraph.children.length; i++) {
        paragraph.children[i].outerHTML = `-text-${paragraph.children[i].outerHTML}-text-`;
    }
    return paragraph;
}
console.log(replaceTextNodes());

function addClassForUi() {
    let ui = document.querySelector('ul');
    ui.classList.add('list');
    return ui;
}
console.log(addClassForUi());

function addIdForLink() {
    let link = document.links[document.links.length - 1];
    link.setAttribute('id', 'link');
    return (link);
}
console.log(addIdForLink());

function addClassForEvenLi() {
    let li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        if (i % 2 === 0) {
            li[i].classList.add('item');
        }
    }
    return li;
}
console.log(addClassForEvenLi());

function addClassForAllLinks() {
    let allLinks = document.links;
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].classList.add('custom-link');
    }
    return allLinks;
}
console.log(addClassForAllLinks());

function addSeveralLinks() {
    let ul = document.querySelector('ul');
    let fragment = document.createDocumentFragment();
    let rnd = Math.ceil(Math.random() * 10);
    console.log(rnd);
    for (let i = 0; i < rnd; i++) {
        let newLi = document.createElement('li');
        newLi.classList.add('new-item');
        newLi.textContent = `item ${ul.children.length+1+i}`;
        fragment.appendChild(newLi);
    }
    ul.appendChild(fragment);
    return ul;
}
console.log(addSeveralLinks());

function addTagInLinks() {
    let ul = document.querySelectorAll('ul a');
    for (let i = 0; i < ul.length; i++) {
        let strong = document.createElement('strong');
        ul[i].insertAdjacentHTML("afterbegin", '<strong></strong>');
    }
    return ul;
}
console.log(addTagInLinks());

function addImgInBegin(getURL) {
    let createImg = document.createElement('img');
    createImg.setAttribute('src', getURL);
    createImg.setAttribute('alt', 'Alternative Text');
    console.log(createImg);
    return document.body.insertAdjacentElement("afterbegin", createImg);
}
let imgURL = 'https://citydog.by/content/_posts/442X361/5ca8a10d93bf0.jpg?34';
console.log(addImgInBegin(imgURL));

function setGreenMark() {
    let mark = document.querySelector('mark');
    mark.insertAdjacentHTML("beforeend", 'green');
    mark.classList.add('green');
    return mark;
}
console.log(setGreenMark());

function reverseSortLi() {
    let li = document.querySelectorAll('li');
    let newLi = [...li];

    newLi.sort((prev, next) => {
        return getNumbersFromString(prev.textContent) - getNumbersFromString(next.textContent);
    });
    let ul = document.querySelector('ul');
    for (let i = newLi.length - 1; i >= 0; i--) {
        ul.appendChild(newLi[i]);
    }
    return newLi;
}
console.log(reverseSortLi());

function getNumbersFromString(string) {
    let txt = string;
    let num = txt.match(/\d/g);
    num = num.join('');
    return num;
}

let isBoolean = true;
console.log(isBoolean == 5 - 4);