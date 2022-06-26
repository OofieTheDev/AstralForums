const mongoose = require("mongoose");

require("dotenv").config()

const dbConnection = mongoose.createConnection(`mongodb+srv://${process.env.CODY_CREAM}:${process.env.DB_PASSWORD}@forumcluster.hczd5bw.mongodb.net/AstralForums?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String, 
        required: true
    },
    postNum: {
        type: Number,
        required: true
    },
    threadList: {
        type: Array,
        required: true
    },
    rep: {
        type: Number,
        required: true
    }
});

const User = dbConnection.model("User", userSchema);

module.exports.dbConnection = dbConnection;