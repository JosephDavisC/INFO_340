'use strict';

import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(taskObj) {
  model.markComplete(taskObj.id);
  renderTaskView();
}

export function renderTaskView() {
  let tasksRoot = document.querySelector('#tasks-root');
  tasksRoot.innerHTML = '';
  let ul = renderTaskList(markCompleteCallback);
  tasksRoot.appendChild(ul);
}

document.querySelector('#add-task-button').addEventListener('click', () => {
  let input = document.querySelector('#task-input');
  let value = input.value;
  if (value === '') {
    return;
  }
  model.addTask(value);
  input.value = '';
  renderTaskView();
});
