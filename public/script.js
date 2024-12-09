const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const fetchTasks = async () => {
    const response = await fetch('/tasks');
    return response.json();
};

const renderTasks = async () => {
    const tasks = await fetchTasks();
    taskList.innerHTML = '';

    tasks.sort((a, b) => a.completed - b.completed || a.id - b.id);

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleTask(${task.id}, ${!task.completed})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
};

const addTask = async (text) => {
    await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    renderTasks();
};

const toggleTask = async (id, completed) => {
    await fetch(`/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
    });
    renderTasks();
};

const deleteTask = async (id) => {
    await fetch(`/tasks/${id}`, { method: 'DELETE' });
    renderTasks();
};

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
});

renderTasks();
