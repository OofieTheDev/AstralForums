const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dbConnection = require("./auth-config/db").dbConnection;
const validate = require("./utils/pwUtils").validate;
const genPass = require("./utils/pwUtils").genPass;
const User = dbConnection.models.User;
const cors = require("cors");

require("dotenv").config();

const app = express();
const sessionStore = MongoStore.create({ mongoUrl: `mongodb+srv://${process.env.CODY_CREAM}:${process.env.DB_PASSWORD}@forumcluster.hczd5bw.mongodb.net/AstralForums?retryWrites=true&w=majority`, collection: 'sessions'});
const port = 3001

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 *24
    }
}));

mongoose.connect(`mongodb+srv://${process.env.CODY_CREAM}:${process.env.DB_PASSWORD}@forumcluster.hczd5bw.mongodb.net/?retryWrites=true&w=majority`)

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

require("./auth-config/passport");
app.use(passport.initialize());
app.use(passport.session());

const threadSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    latest_author: {
        type: String,
        required: true
    },
    latest_time: {
        type: Date,
        required: true
    },
    time_posted: {
        type: Date,
        required: true
    },
    reply_count: {
        type: Number,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    topic: {
        type: String,
        required: true
    }
})

const replySchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time_posted: {
        type: Date,
        required: true
    },
    edited: {
        type: Boolean,
        required: true
    }
})

const Thread = mongoose.model("Thread", threadSchema);
const Reply = mongoose.model("Reply", replySchema);

async function createThread(title, author, des, timePosted, tags, topic) {
    await Thread.create({
        title,
        author,
        des,
        time_posted: timePosted,
        tags,
        topic,
        reply_count: 0,
        latest_time: timePosted,
        latest_author: author
    })
}

app.post("/createthread", (req, res) => {
    const title =  req.body.title;
    const author = req.body.author;
    const des = req.body.des;
    const timePosted = req.body.timePosted;
    const tags = req.body.tags;
    const topic = req.body.topic;
    createThread(title, author, des, timePosted, tags, topic);
});

app.post("/signup", (req, res) => {
    genPass(req.body.password).then((hash) => {
        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            hash: hash,
            rep: 0,
            postNum: 0,
            threadList: []
        })
        
        newUser.save();
    }).catch(err => {
        console.log(err);
    })
})

app.get("/login", passport.authenticate("local"), (req, res) => {
    console.log(req.body.username, req.body.password);
    console.log('Auth successful.')
})

app.get("/logout", (req, res, next) => {
    req.logout(err => {
        // console.log(err);
        if (!req.isAuthenticated()) {
            console.log("Successfully logged out.");
        } else {
            console.log("User was never logged out.");
        }
    })
})

app.listen(port, () => {
    console.log(`Server has started on Port ${port}`)
})