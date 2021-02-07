import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor',
      day: 'Feb 5th at 2:32',
      reminder: true
    },
    {
      id: 2,
      text: 'Dentist',
      day: 'Feb 6th at 8:32',
      reminder: true
    },
    {
      id: 3,
      text: 'School',
      day: 'Feb 8th at 2:52',
      reminder: false
    }
  ])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Togle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
     
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ("No Tasks")}
    </div>
  );
}


export default App;
