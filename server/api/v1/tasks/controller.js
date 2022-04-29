const express = require("express");

const app = express();

const dayjs = require("dayjs");

const tasks = [];

exports.create = (req, res, next) => {
  const { body = {} } = req;
  if (
    typeof body.description == "undefined" ||
    typeof body.author == "undefined" ||
    body.description == "" ||
    body.author == ""
  ) {
    next({
      message: "Validate the structure of the submitted file",
      status: 400,
    });
  } else {
    const today = dayjs();
    const date = today.format("YYYY-MM-DD h:mm:ss");
    body.creadeAt = date;
    body.updateAt = "";
    tasks.push(body);

    res.json({
      status: 200,
      data: {
        description: body.description,
        author: body.author,
        creadeAt: date,
        updateAt: "",
      },
    });
  }
};

exports.all = (req, res, next) => {
  res.json({
    status: 200,
    data: tasks,
  });
};

exports.read = (req, res, next) => {
  const { params = {} } = req;

  if (isNaN(params.id)) {
    next({
      message: "Task identifier must be numeric",
      status: 400,
    });
  } else if (params.id > tasks.length) {
    next({
      message: "The required information does not exist",
      status: 400,
    });
  } else {
    const id = params.id == 0 ? params.id : params.id - 1;
    const data = tasks[id];
    res.json({
      status: 200,
      data,
    });
  }
};

exports.update = (req, res, next) => {
  const { params = {} } = req;
  if (isNaN(params.id)) {
    next({
      message: "Task identifier must be numeric",
      status: 400,
    });
  } else if (params.id > tasks.length) {
    next({
      message: "The required information does not exist",
      status: 400,
    });
  } else {
    const today = dayjs();
    const date = today.format("YYYY-MM-DD h:mm:ss");
    const { body = {} } = req;

    body.updateAt = date;
    const id = params.id == 0 ? params.id : params.id - 1;
    tasks[id] = body;
    const data = tasks;
    res.json({
      status: 200,
      data,
    });
  }
};

exports.delete = (req, res, next) => {
  const { params = {} } = req;

  if (isNaN(params.id)) {
    next({
      message: "Task identifier must be numeric",
      status: 400,
    });
  } else if (params.id > tasks.length) {
    next({
      message: "The required information does not exist",
      status: 400,
    });
  } else {
    const id = params.id == 0 ? params.id : params.id - 1;
    tasks.splice(id, 1);
    const data = tasks;
    res.json({
      status: 200,
      data,
    });
  }
};

app.use((err, req, res, next) => {
  const { message = "", status = 500 } = err;

  res.status(status);
  res.json({
    statusCode: 400,
    message,
  });
});
