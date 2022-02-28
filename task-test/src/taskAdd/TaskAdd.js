import {createRef,useState,useEffect} from 'react';
import uniqid from 'uniqid';
import '../taskAdd.css';
import '../completeDelete.css';


/*const DisplayTask = ({tid,name,done}) =>{
    const Deleted=(e)=>{
        const task = e.target.getAttribute("task")
        setTask(done.filter(t=> t.task !== task));
    
    
}
    return(
        
        done.id !=='' &&
        <div className="complete-form">
            <ul className ="task-list">{name}</ul>
                <button onClick = {()=>Completed(done,tid)}className ="complete-btn" >Complete</button>
                <button onClick = {()=>Deleted(done,tid)}className ="delete-btn">Delete</button>                   
        </div>
        
    
    )
    //console.log(tid)
}

    const Completed = (done,tid)=>{
    
    const newDone = done.id === tid ? { ...done, isCompleted: !done.isCompleted } : done;
    console.log(newDone.task)
        
        
    }
    */
    


const TaskAdd = ()=>{
    const [tasks,setTasks] = useState([
        
    ]);
    const inputRef = createRef();
    
    const addTask = (event)=>{
        event.preventDefault();
        const id = uniqid();
        const task = inputRef.current.value;
        const isCompleted = false
        //console.log(task);
        //console.log(id);
        setTasks([
            ...tasks,{id,task,isCompleted}
        ]);
    }
    const Deleted=(id)=>{
        const newDelete = tasks.filter((task)=>{
            return task.id !== id ;
            
            
            
    })
    setTasks(newDelete)
    
    //console.log(newDelete);

    
}
    const Completed=(id)=>{
        
        const newComplete = (tasks.filter((t)=>{
           return  t.id === id ;

    } ))
    console.log(newComplete);
    
    
    }
    
 //return <li style={{textDecoration: clicked ? "line-through": "none" }}  
 
    return(
        
        <div className="input">
            
            <input ref = {inputRef} placeholder = "Task Title"/>
            <button onClick ={addTask} type = "button">Add</button>
            
            {tasks.length >0 && tasks.map(t=>(
                t.id !=='' && t.isCompleted=== "true" ?
                    <div className="complete-form" key = {t.id}>
                        <ul className ="complete">{t.task}</ul>
                        <button onClick = {()=>Completed(t.id)}className ="complete-btn" >Complete</button>
                        <button onClick = {()=>Deleted(t.id)}className ="delete-btn">Delete</button>                   
                    </div> :
     
                    <div className="complete-form" key = {t.id}>
                        <ul className ="task-list">{t.task}</ul>
                        <button onClick = {()=>Completed(t.id)}className ="complete-btn" >Complete</button>
                        <button onClick = {()=>Deleted(t.id)}className ="delete-btn">Delete</button>                   
                    </div> 
                    
            ))}
            
            
        </div>
    )
}
export default TaskAdd;