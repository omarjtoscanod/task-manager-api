const mongoose = require('mongoose');

const { Schema } = mongoose;

const tasks = {
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  },
  completed: {
    type: Boolean,
    default: false,
  },
};

const references = {
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
};

const task = new Schema(Object.assign({}, tasks, references), {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('task', task),
  task,
  references,
  tasks,
};
