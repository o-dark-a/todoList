window.onload = function() {

  const addBtn = document.querySelector('#addBtn')
  const input = document.querySelector('#input')
  const outSpace = document.querySelector('#out')
  const cacheTodo = localStorage.getItem('todo')
  let assignedTasks = []

  addBtn.addEventListener('click', addingTask)

  if (cacheTodo != undefined) {
    assignedTasks = JSON.parse(cacheTodo)
    outputTasks()
  }

  function addingTask() {
    
    const taskText = input.value
    const task = { todo: taskText, check: false }
    const lng = assignedTasks.length
    assignedTasks[lng] = task

    outputTasks()

    localStorage.setItem('todo', JSON.stringify(assignedTasks))

    input.value = '';

  }

  function outputTasks() {

    let outStr = '';

    for (let key in assignedTasks) {

      if (assignedTasks[key].check === true) {
        outStr += '<input type="checkbox" checked> '
      } else {
        outStr += '<input type="checkbox"> '
      }

      outStr += assignedTasks[key].todo + '<br>';

    }

    outSpace.innerHTML = outStr;

  }

}