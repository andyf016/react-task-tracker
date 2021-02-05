import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
     
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}


export default App;
