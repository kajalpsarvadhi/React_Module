import React, {useState, type ChangeEvent, type FormEvent} from 'react';
import type { Task } from '../utils/types';
import { TaskItem } from './TaskItem';

export const TaskMain = ()=>{
    const [tasks,setTasks] = useState<Task[]>([]);
    const [inputValue,setInputValue] = useState<string>("");

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) =>{
            setInputValue(event.target.value);
    }

    const addTask = (event:FormEvent)=>{
        event.preventDefault();
        if(!inputValue.trim())  return;

        const newTask: Task ={
            id:Date.now(),
            text: inputValue,
            status:"todo"
        };

        setTasks([...tasks,newTask]);
        setInputValue("");
    
        
    }

    const toggleTask = (id:number) =>{
        setTasks(tasks.map(t=>
            t.id === id ?{...t,status:t.status === "todo"?"done":"todo"}:t
        ))
    }

    return(
        <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1>Task Master</h1>
      
      <form onSubmit={addTask}>
        <input 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="What needs to be done?" 
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={toggleTask}
            onDelete={(id) => setTasks(tasks.filter(t => t.id !== id))}
          />
        ))}
      </div>
    </div>
    )



}
