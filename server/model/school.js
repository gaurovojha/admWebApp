// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schoolSchema = new Schema({
        "_id" : String,
        "name" : String,
        "description" : String,
        "location" : String,
        "likes" : String,
        "comments" : [
                String,
                String,
                String
        ]
});

// the schema is useless so far
// we need to create a model using it
var School = mongoose.model('School', schoolSchema);

// make this available to our users in our Node applications
module.exports = School;