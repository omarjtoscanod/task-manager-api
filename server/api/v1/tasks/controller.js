const { Model } = require("./model");

exports.create = async (req, res, next) => {
  const { body = {} } = req;

  const document = new Model({
    ...body,
  });

  try {
    const data = await document.save();
    res.status(201);
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.all = async (req, res, next) => {
  try {
    const [data = [], total = 0] = await Promise.all([
      Model.find({}).exec(),
      Model.countDocuments,
    ]);

    res.json({
      status: 200,
      data,
      meta: {
        total,
      },
    });
  } catch (error) {
    next(error);
  }
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

exports.update = async (req, res, next) => {
  const { body = {}, params = {} } = req;
  const { id } = params;

  try {
    const data = await Model.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200);
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { params = {} } = req;
  const { id } = params;

  try {
    const data = await Model.findByIdAndDelete(id);
    res.status(204);
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};
