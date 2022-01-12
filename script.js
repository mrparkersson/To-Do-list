const listOfTodo = document.querySelector('.listoftodo');

const todoList = [
  {
    description: 'wash the dishes',
    completed: false,
    index: '1',
  },
  {
    description: 'Complete To Do',
    completed: false,
    index: '2',
  },
];

for (let i = 0; i < todoList.length; i += 1) {
  if (todoList[i].completed === true) {
    listOfTodo.style.display = 'none';
  } else {
    listOfTodo.innerHTML += `
    
          <ul>
          <li><input type="checkbox">${todoList[i].description}</li>
          <span id="line"></span>
          </ul>
          
          `;
  }
}

// ADD AND REMOVE TODO

document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length === 0) {
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

    const currentTask = document.querySelectorAll('.delete');
    for (let i = 0; i < currentTask.length; i += 1) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
