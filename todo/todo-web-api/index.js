"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // cross origin
const todo_router_1 = require('./todo-router');
const app = express();
const port = process.env.PORT || 9090;
app.use(bodyParser.json());
app.use(cors());
todo_router_1.registerTodoRouter(app); // pass app to Router
app.listen(port, () => console.log('Server listen on ' + port));
