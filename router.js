const { Router } = require('express');
const TaskController = require('./controller/task.controller');

const router = Router();

router.post('/task', TaskController.createTask);

module.exports = router;
