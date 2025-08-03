import React, { useContext , useState , useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import TaskNotesBar from '../Task_Notes_Bar/TaskNotesBar';
import Completed from '../Completed/Completed';
import { TaskContext } from '../../Context/TaskContext/TaskContext';
import './Home.css';

export default function Home() {
  const { tasks, setTasks } = useContext(TaskContext);

  // فقط المهام المكتملة
  const completedTasks = tasks.filter(task => task.completed);

  const [filteredTasks, setFilteredTasks] = useState(completedTasks);

  // تحديث الفلترة عند أي تغيير في المهام
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]); // كل ما تتغير tasks يتحدث filteredTasks

  return (
    <div className='container'>
      <Navbar />
      <hr />

      {/* البحث */}
      <SearchBar
        completedTasks={completedTasks}
        setFilteredTasks={setFilteredTasks}
      />

      <TaskNotesBar />

      {/* عرض المهام المكتملة المفلترة */}
      <Completed
        completedTasks={filteredTasks}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}
