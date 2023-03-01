import React, { useRef } from 'react';
import './style.scss';

interface Props {
    todo: string;
    setTodoInput: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputFeild = ({ todo, setTodoInput, handleSubmit}: Props) => {
const inputRef = useRef<HTMLInputElement>(null);
  
    return (
   <form 
   className='input' 
   onSubmit={(e) => {handleSubmit(e); inputRef.current?.blur();}}>
    <input
    ref={inputRef}
    type='input' 
    value={todo}
    onChange={(e) => setTodoInput(e.target.value)}
    placeholder='Enter a task' 
    className='input__box'
    />
    <button className='input__submit' type='submit'>Go</button>
   </form>
  )
}

export default InputFeild
