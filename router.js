const { Router } = require('express');
const TaskController = require('./controller/task.controller');

const router = Router();

router.post('/task', TaskController.createTask);
router.get('/tasks', TaskController.getAllTasks);
router.patch('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;
