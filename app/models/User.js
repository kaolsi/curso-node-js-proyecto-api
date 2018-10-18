
const mongoose = require('mongoose')
// const validator = require('validator')
const Schema = mongoose.Schema

const jwt = require('jsonwebtoken')
var UserSchema = new Schema({})
UserSchema.methods.generateAuthToken = function () {
  var user = this
  var access = 'auth'
  var token = jwt.sign({ _id: user._id.toHexString(), access }, 'abc123').toString()
  user.tokens.push({ access, token })
  return user.save().then(() => {
    return token
  })
}
/* var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
}) */

var User = mongoose.model('User', UserSchema)
module.exports = User
/*
module.exports = {
  User: User
}

//OTRO MODULO

const User = require('./User').User
const {User} = require('./User') */
