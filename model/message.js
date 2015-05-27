var mongoose = require('mongoose');


var messageSchema = mongoose.Schema({
    content: String,
    author: String,
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;