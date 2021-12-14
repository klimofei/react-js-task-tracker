import React from 'react'
import Task from './Task'

export const Tasks = ({tasks, onDelete, onToggle}) => {
  
  return (
    <>
      {/* {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))} */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>
        ))}
    </>
  )
}

export default Tasks



