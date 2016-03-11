var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({ 
	name: String,
	description: String  
});

eventSchema.methods.desc = function () {
  var greeting = this.name
    ? "Event name is " + this.name
    : "Event doesn't have a name";
  console.log(greeting);
}


module.exports = mongoose.model('Event', eventSchema);