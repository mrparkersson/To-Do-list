const listOfTodo = document.querySelector('.listoftodo');

const todoList = [
  {
    description: 'wash the dishes',
    completed: false,
    index: Math.random(),
  },
  {
    description: 'Complete To Do',
    completed: false,
    index: Math.random(),
  },
];

for (let i = 0; i < todoList.length; i += 1) {
  if (todoList[i].completed === true) {
    listOfTodo.style.display = 'none';
  } else {
    listOfTodo.innerHTML += `
    
          <ul>
          <li><input type="checkbox">${todoList[i].description}</li>
          </ul>
          
          `;
  }
}

// ADD AND REMOVE TODO

document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert('Please Enter a Task');
  } else {
    document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <span>X</span>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll('.delete');
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
