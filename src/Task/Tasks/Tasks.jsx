import './Tasks.css';
import ShowTasks from '../ShowTasks/ShowTasks';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Navbar from '../../Home/Navbar/Navbar';
import { useState, useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext/TaskContext';
import SearchBarTask from '../SearchBarTask/SearchBarTask';

export default function Tasks() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  function handleAddTask(e) {
    setInputValue(e.target.value);
  }

  function addTaskFunction() {
    if (inputValue.trim() === '') return; 
    setTasks([...tasks, { text: inputValue, completed: false }]); 
    setInputValue('');
  }

  // فلترة المهام حسب البحث
  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='container'>
      <Navbar />
      <hr />

      {/* شريط البحث */}
      <SearchBarTask setSearchValue={setSearchValue} />

      <div className='addTask'>
        <input 
          type="text" 
          placeholder="Add Task" 
          value={inputValue} 
          onChange={handleAddTask} 
        />
        <button onClick={addTaskFunction}>
          <AddCircleIcon />
        </button>
      </div>

      <ShowTasks tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}
