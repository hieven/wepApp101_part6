var config = require('../config/local');
var mongoose = require('mongoose');

var User = require('./user');
var Message = require('./message');


var mongoURL = 'mongodb://' + config.mongo.host + '/' + config.mongo.database;
mongoose.connect(mongoURL);


exports.User = User;
exports.Message = Message;