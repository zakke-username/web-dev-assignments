// array for todo list
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

let list = document.querySelector('#list');

for (let item of todoList) {
  let li = document.createElement('li');

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = item.id;
  checkbox.checked = item.completed;
  li.appendChild(checkbox);

  let label = document.createElement('label');
  label.innerText = item.task;
  label.htmlFor = checkbox;
  li.appendChild(label);

  list.appendChild(li);
}
