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

exports.id = async (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  try {
    const data = await Model.findById(id).exec();

    if (data) {
      req.doc = data;
    } else {
      next({
        statusCode: 404,
        message: "Document not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.read = (req, res, next) => {
  const { doc = {} } = req;

  res.json({
    data: doc,
  });
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
