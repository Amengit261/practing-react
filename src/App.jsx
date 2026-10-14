import { useState } from 'react';
import './App.css';
function App(){
  function addTask() {
    if (newTasks.trim() === "") return;
  setTasks ([...tasks, newTasks]);
  setNewTasks("");
}
  const [newTasks,setNewTasks] = useState("");
  const [tasks, setTasks] = useState([
"Learning React",
"Practicing React",
"Building Projects"
  ]);
  return(
    <div>
    <h1>My Tasks Manger</h1>
    <input type="text"
    placeholder="Enter new task"
    value={newTasks}
    onChange={(e) => setNewTasks(e.target.value)}

    />
    <button onClick={addTask}>
  Add Task
</button>
    {tasks.map(task => <p key={task}>{task}</p>)}

</div>

  );
}
export default App;