'use strict';

import { getIncompleteTasks } from './Model.js';

function renderSingleTask(taskObj, markCompleteCallback) {
  let li = document.createElement('li');
  li.classList.add('list-group-item');
  li.textContent = ' ' + taskObj.description;

  let button = document.createElement('button');
  button.classList.add('btn', 'btn-sm', 'btn-warning');
  button.innerHTML = '<span class="material-icons-outlined">done</span>';
  button.addEventListener('click', () => {
    markCompleteCallback(taskObj);
  });

  li.prepend(button);
  return li;
}

export function renderTaskList(markCompleteCallback) {
  let tasks = getIncompleteTasks();
  let ul = document.createElement('ul');
  ul.classList.add('list-group', 'list-group-flush');
  tasks.forEach((task) => {
    let li = renderSingleTask(task, markCompleteCallback);
    ul.appendChild(li);
  });
  return ul;
}
