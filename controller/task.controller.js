const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const createdTask = await Task.create(body);
    console.log(createdTask)
    res.status(201).send({
      data: createdTask,
    });
  } catch (err) {
    next(err);
  }
};
