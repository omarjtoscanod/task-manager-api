const mongoose = require('mongoose');
const { body } = require('express-validator');

const { Schema } = mongoose;

const tasks = {
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  },
};

const references = {
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
};

const sanitizers = [body('description').escape()];

const task = new Schema(Object.assign({}, tasks, references), {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('task', task),
  task,
  references,
  sanitizers,
};
