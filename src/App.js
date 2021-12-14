import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks from "./components/Tasks"
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddTask from "./components/AddTask"
import About from "./components/About"

function App() {
  // const name = "Brad"
  // const x = false
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask()
      setTask(tasksFromServer)
    }
    
    getTasks()
  },[])

  // Fetch tasks:
  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    console.log(data)
    return data
  }

    // Fetch one task:
    const fetchOneTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
  
      console.log(data)
      return data
    }
    // Add task:
    const addTask = async (task) => {
      const res = await fetch(`http://localhost:5000/tasks`, 
      {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      setTask([...tasks, data])
      // const id = Math.floor(Math.random() * 10000 + 1)
      // console.log(id)

      // const newTask = {id, ...task}
      // setTask([...tasks, newTask])
    }

    // Delete task:
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })
      
      setTask(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder:
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchOneTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
      
      const res = await fetch(`http://localhost:5000/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updTask)
        }
      )

      const data = await res.json()

      setTask(tasks.map((task) => 
            task.id === id ? { ...task, reminder: data.reminder} : task))
    }

  return (
    <div className="container">
      <Header 
          title="Task tracker" 
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          ></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
      <Footer></Footer>
    </div>
  
);
}

export default App;
