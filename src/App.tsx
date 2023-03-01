import React from 'react';
import './App.scss';
import InputFeild from './components/InputFeild';
import { useState } from 'react';
import { Todo } from './models/ITodo';
import TodoList from './components/TodoList';


const App: React.FC = () => {

const [todo, setTodoInput] = useState<string>('');
const [todos, setTodos] = useState<Todo[]>([]);


const handleSubmit = (e: React.FormEvent) =>{
  e.preventDefault();

 if(todo) {
  setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
  setTodoInput('');
 }
};

console.log(todos)

  return (
   <div className="App">
      <h1 className='heading'>Todo List</h1>
      <InputFeild 
      todo={todo} 
      setTodoInput={setTodoInput} 
      handleSubmit={(e)=>handleSubmit(e)}/>
      <TodoList 
      todos={todos} 
      setTodos={setTodos}/>
    </div>
  );
}

export default App;
