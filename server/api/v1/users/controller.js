const { fields, Model } = require('./model');
const { paginationParseParams } = require('./../../../utils');

exports.create = async (req, res, next) => {
  const { body } = req;
  const { firstName = '', lastName = '', email = '' } = body;

  const user = {
    firstName,
    lastName,
    email,
  };

  const document = new Model(user);

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
  const { query = {} } = req;
  const { limit, skip } = paginationParseParams(query);

  try {
    const [data = [], total = 0] = await Promise.all([
      Model.find({}).limit(limit).skip(skip).exec(),
      Model.countDocuments,
    ]);

    res.json({
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
    const data = await Model.findById(id).exec();

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
  const { body = {} } = req;
  const { doc } = req;

  const safeFields = Object.getOwnPropertyNames(fields).reduce((obj, key) => {
    if (key in fields) {
      obj[key] = body[key];
    }
    return obj;
  }, {});

  if (doc) {
    const userUpdated = {
      ...safeFields,
    };

    try {
      const data = await Model.findByIdAndUpdate(doc.id, userUpdated, {
        new: true,
        runValidators: true,
      });

      res.json({
        data,
      });
    } catch (error) {
      next(error);
    }
  } else {
    next({});
  }
};

exports.activation = async (req, res, next) => {
  const { body = {} } = req;
  const { doc } = req;

  if (doc) {
    const { enabled = doc.enabled } = body;
    if (enabled === doc.enabled) {
      return res.json({
        doc,
      });
    }
    const userUpdated = {
      enabled,
    };

    try {
      const data = await Model.findByIdAndUpdate(doc.id, userUpdated, {
        new: true,
      });
      res.json({
        data,
      });
    } catch (error) {
      next(error);
    }
  }
};
