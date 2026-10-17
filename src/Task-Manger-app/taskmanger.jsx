import "./Taskmanger.css";
import { useState } from "react";

function TaskManager() {
  const [newTasks, setNewTasks] = useState("");

  const [tasks, setTasks] = useState([
    "Learning React",
    "Practicing React",
    "Building Projects",
  ]);

  // Add a task
  function addTask() {
    if (newTasks.trim() === "") return;

    setTasks([...tasks, newTasks.trim()]);
    setNewTasks("");
  }

  // Delete a task
  function deleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  }

  // Edit a task
  function editTask(oldTask, newTask) {
    if (newTask.trim() === "") return;

    const updatedTasks = tasks.map((task) =>
      task === oldTask ? newTask.trim() : task,
    );

    setTasks(updatedTasks);
  }

  return (
    <div className="Task-continer">
      <h1 id="head">My Tasks Manager</h1>
      <div className="Tasks-continer">
        <input
          className="type"
          type="text"
          placeholder="Enter new task"
          value={newTasks}
          onChange={(e) => setNewTasks(e.target.value)}
        />

        <button onClick={addTask} className="btnadd">
          Add Task
        </button>

        {tasks.map((task, index) => (
          <p key={`${task}-${index}`} className="p1">
            {task}

            <button onClick={() => deleteTask(task)} className="btndel">
              Delete
            </button>

            <button
              onClick={() => {
                const updatedTask = prompt("Enter the new task:", task);

                if (updatedTask !== null) {
                  editTask(task, updatedTask);
                }
              }}
              className="btnedit"
            >
              Edit
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default TaskManager;
