const { Todo } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const createdTask = await Todo.create(body);
    console.log(createdTask);
    res.status(201).send({
      data: createdTask,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Todo.findAll();

    res.send({ data: tasks });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsCount, [updatedTask]] = await Todo.update(body, {
      where: { id: id },
      returning: true,
    });

    res.send(updatedTask);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await Todo.destroy({ where: { id: id } });

    res.send({ data: 'Deleted' });
  } catch (err) {
    next(err);
  }
};
