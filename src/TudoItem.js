import React from 'react'

const TudoItem = ( { task, toggleComplete, deleteTask} ) =>{

  console.log("TASK",task);
  return (
    <div className='grid-container'>
        <input className='grid-item grid-checkbox' type='checkbox'
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}/> 
        <span className='grid-item grid-task'>{task.text}</span>
        <button className='grid-item grid-delete' onClick={() => {deleteTask(task.id)}}><span>🗑</span>Delete</button>
    </div>
  )
}
export default TudoItem;
