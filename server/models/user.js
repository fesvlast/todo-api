var mongoose = require('mongoose')

 var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  name: {
    type: String,
    trim: true
  }
});

module.exports = {
  User
};
