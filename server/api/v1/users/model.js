const mongoose = require('mongoose');
const validator = require('validator');
const { body } = require('express-validator');
const { hash, compare} =require ('bcryptjs');
const { Schema } = mongoose;

const fields = {
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 32,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 32,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 16,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    maxlength: 255,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message(props) {
        return `'${props.value}' is not a valid email.`;
      },
    },
  },
  
};

const protected = {
  enabled: {
    type: Boolean,
    default: true,
    required: true,
  },
};

const sanitizers = [
  body('firstName').escape(),
  body('lastName').escape(),
  body('password').escape(),
  body('enabled').toBoolean(),
];

const user = new Schema(Object.assign({}, fields, protected), {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true
  }
});

user.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});

user.pre('save', async function (next) {
  if (this.isnew || this.isModified('password')){
    this.password = await hash(this.password, 10)
  }
  next ();
})

user.methods.verifyPassword = function (password) {
   return compare (password , this.password);
};

user.methods.toJSON = function () {
  const doc = this.toObject ();
  delete doc.password;
  return doc;
};

module.exports = {
  Model: mongoose.model('user', user),
  fields,
  sanitizers,
};
