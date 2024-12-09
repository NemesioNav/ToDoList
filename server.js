const express = require('express');
const app = express();
const PORT = 3000;

// In-memory data storage
let tasks = [];

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static('public'));

// API Endpoints
app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
    const newTask = { id: Date.now(), text: req.body.text, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) {
        task.completed = req.body.completed;
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
