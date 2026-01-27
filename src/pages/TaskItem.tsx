import type { Task } from "../utils/types";
interface TaskItemProps{
    task:Task;
    onToggle:(id:number)=>void;
    onDelete:(id:number)=>void;
}

export const TaskItem = ({task,onToggle,onDelete}: TaskItemProps)=>{
    return(
        <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px',
      borderBottom: '1px solid #eee',
      textDecoration: task.status === 'done' ? 'line-through' : 'none' 
    }}>
        <span onClick={()=>onToggle(task.id)} style={{cursor:'pointer'}}>{task.text}</span>

        <button onClick={()=>onDelete(task.id)}>Delete</button>
    </div>
    )
}