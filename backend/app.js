const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
mongoose.connect(`mongodb+srv://${process.env.CODY_CREAM}:${process.env.DB_PASSWORD}@forumcluster.hczd5bw.mongodb.net/?retryWrites=true&w=majority`)

const port = 3001

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

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

app.listen(port, () => {
    console.log(`Server has started on Port ${port}`)
})