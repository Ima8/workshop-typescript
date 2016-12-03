"use strict";
const mongodb_1 = require('mongodb');
const connection = mongodb_1.MongoClient.connect('mongodb://localhost:27017/todos');
const todoItems = [
    { title: "Learn Nodejs", complete: true },
    { title: "Develop express app", complete: false }
];
function list() {
    return connection.then((db) => {
        return db.collection("todo").find({}).toArray(); // find is callback , toArray be promise
    });
}
exports.list = list;
function create(todoItem) {
    return connection.then((db) => {
        return db.collection('todo').insert(todoItem);
    });
}
exports.create = create;
