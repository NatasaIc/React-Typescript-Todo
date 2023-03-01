import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../models/ITodo';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './style.scss';


interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

const [edit, setEdit] = useState<boolean>(false);
const [editText, setEditText] = useState<string>(todo.todo);


const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone} :todo))
};

const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
};

const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((todos) => (
        todo.id === id? {...todo, todo: editText} :todo))
        );
        setEdit(false)
};


const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
    inputRef.current?.focus();
}, [edit])


  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
        {
            edit ? (
                <input 
                ref={inputRef}
                value={editText} 
                onChange={(e) => setEditText(e.target.value)} 
                className='todos__single--text' />

            ): (
                todo.isDone ? (
                    // the s tag is a strike tag 
                    <s className='todos__single--text'>{todo.todo}</s>
    
                ): (
                    <span className='todos__single--text'>{todo.todo}</span>
                )
                )}
        <div>
            <span className='icon' onClick={() => {
                if(!edit && !todo.isDone){
                    setEdit(!edit);
                }
            }}>
                <AiFillEdit />
            </span>
            <span className='icon' onClick={() =>handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
            <span className='icon' onClick={() =>handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
      
    </form>
  )
}

export default SingleTodo
