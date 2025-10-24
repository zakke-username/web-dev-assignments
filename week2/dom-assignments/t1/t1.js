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

let list = document.querySelector('#todo-list');

for (let item of todoList) {
  let htmlString = `
    <li>
      <input type="checkbox" id="todo-${item.id}" ${item.completed ? 'checked' : ''}></input>
      <label for="todo-${item.id}">${item.task}</label>
    </li>
  `;
  list.insertAdjacentHTML('beforeend', htmlString);
}
