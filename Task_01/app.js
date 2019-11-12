const head = document.head;
console.log(head);
const body = document.body;
console.log(body);
const childBody = body.children;
console.log(childBody);
const firstDiv = body.firstElementChild;
const childDiv = firstDiv.children;
console.log(firstDiv);
for (let i = 1; i < childDiv.length - 1; i++) {
    console.log(childDiv[i]);
}