import {TodoItem} from './todo';
import {MongoClient} from 'mongodb';

const connection = MongoClient.connect('mongodb://localhost:27017/todos')

const todoItems = [
  {title:	"Learn Nodejs",complete:true},
  {title:"Develop express app",complete:false}
];

export function list():Promise<Array<TodoItem>>{
  return connection.then((db)=>{
    return db.collection("todo").find({}).toArray() // find is callback , toArray be promise
  })

}

export function create(todoItem:TodoItem):Promise<any>{
  return connection.then((db)=>{
    return db.collection('todo').insert(todoItem);
  })
}
