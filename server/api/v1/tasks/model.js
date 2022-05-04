const mongoose = require("mongoose");

const { Schema } = mongoose;

const tasks = {
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  },
};

const task = new Schema(tasks, {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model("task", task),
  task,
};
