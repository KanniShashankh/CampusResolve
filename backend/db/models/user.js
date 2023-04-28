/*
  @companies_placed_in : company user is placed on or working
*/
const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate');

var userSchema = new mongoose.Schema({
	username: String,
    name: String,
	email: { type: String, trim: true, unique : true },
    phoneNumber: { type: String, trim: true, maxlength: 10, minlength: 10},
},{timestamps:true});

// userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('user', userSchema);

