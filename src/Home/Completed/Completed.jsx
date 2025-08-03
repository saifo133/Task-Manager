import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import './Completed.css';

export default function Completed({ tasks, setTasks , completedTasks }) {
  function toggleTaskCompletion(taskToToggle) {
    const updatedTasks = tasks.map(task =>
      task === taskToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  function deleteTask(taskToDelete) {
    const updatedTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(updatedTasks);
  }


  return (
    <div className="completed">
      <h4>Completed :</h4>
      {completedTasks.length === 0 ? (
        <p>No Completed Tasks</p>
      ) : (
        completedTasks.map((task) => (
          <div key={tasks.indexOf(task)} className="ShowTasks">
            <h3 className="completed">
              <button onClick={() => toggleTaskCompletion(task)}>
                <CheckCircleIcon />
              </button>
              {task.text}
            </h3>
            <div>
              <button onClick={() => deleteTask(task)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
