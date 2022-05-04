const { Model, references } = require('./model');
const { paginationParseParams } = require('./../../../utils');

exports.create = async (req, res, next) => {
  const { body = {} } = req;

  const document = new Model({
    ...body,
  });

  try {
    const populateFields = Object.getOwnPropertyNames(references).join(' ');
    const data = await document.save();
    await data.populate(populateFields);

    res.status(201);
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.all = async (req, res, next) => {
  const { query = {} } = req;
  const { limit, skip } = paginationParseParams(query);

  try {
    const populateFields = Object.getOwnPropertyNames(references).join(' ');

    const [data = [], total = 0] = await Promise.all([
      Model.find({}).limit(limit).skip(skip).populate(populateFields).exec(),
      Model.countDocuments,
    ]);

    res.json({
      status: 200,
      data,
      meta: {
        total,
        limit,
        skip,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.id = async (req, res, next) => {
  const { params = {} } = req;
  const { id = '' } = params;

  try {
    const populateFields = Object.getOwnPropertyNames(references).join(' ');

    const data = await Model.findById(id).populate(populateFields).exec();

    if (data) {
      req.doc = data;
      next();
    } else {
      next({
        statusCode: 404,
        message: 'Document not found',
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
    }).populate(populateFields);
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
    const populateFields = Object.getOwnPropertyNames(references).join(' ');
    const data = await Model.findByIdAndDelete(id).populate(populateFields);

    res.status(204);
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};
