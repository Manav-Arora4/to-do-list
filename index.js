document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', deleteTask);

        listItem.appendChild(deleteBtn);
        listItem.addEventListener('click', toggleComplete);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    function deleteTask(event) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }

    function toggleComplete(event) {
        if (event.target.tagName === 'BUTTON') return;
        const listItem = event.target;
        listItem.classList.toggle('completed');
    }
});