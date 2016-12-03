import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors'; // cross origin
import {registerTodoRouter} from './todo-router'

const app = express();
const port =process.env.PORT || 9090


app.use(bodyParser.json())
app.use(cors())

registerTodoRouter(app) // pass app to Router



app.listen(port,()=>console.log('Server listen on '+ port))
