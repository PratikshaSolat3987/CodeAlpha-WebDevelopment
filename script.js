function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskInput.value;
        taskList.appendChild(taskItem);

        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });

        taskItem.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            taskItem.remove();
        });

        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}