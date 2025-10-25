const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const todoListElement = document.querySelector('#todo-list');
const addButton = document.querySelector('.add-btn');
const dialog = document.querySelector('#new-item-dialog');
const form = document.querySelector('form');
const newItemInput = document.querySelector('input[type="text"]');
let nextId = todoList.length + 1;

function createListItem(item) {
  let li = document.createElement('li');

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = item.completed;
  checkbox.id = item.id;
  checkbox.addEventListener('change', () => {
    item.completed = checkbox.checked;
    console.log(todoList);
  });
  li.appendChild(checkbox);

  let label = document.createElement('label');
  label.innerText = item.task;
  label.htmlFor = checkbox.id;
  li.appendChild(label);

  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'DEL';
  deleteButton.addEventListener('click', () => {
    todoListElement.removeChild(li);
    todoList.splice(todoList.indexOf(item), 1);
    console.log(todoList);
  });
  li.appendChild(deleteButton);

  return li;
}

function renderList() {
  todoListElement.innerHTML = '';
  todoList.forEach((item) => todoListElement.appendChild(createListItem(item)));
}

addButton.addEventListener('click', () => dialog.showModal());

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let item = {
    id: nextId++,
    task: newItemInput.value,
    completed: false,
  };
  todoList.push(item);
  todoListElement.appendChild(createListItem(item));
  form.reset();
  dialog.close();
  console.log(todoList);
});

renderList();
