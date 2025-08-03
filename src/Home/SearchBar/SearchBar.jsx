import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBar({ completedTasks, setFilteredTasks }) {
  const [searchValue, setSearchValue] = useState('');

  function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    const filtered = completedTasks.filter(task =>
      task.text.toLowerCase().includes(value)
    );

    setFilteredTasks(filtered);
  }

  return (
    <div className='SearchBar'>
      <div>
        <input
          type='text'
          placeholder='Search Completed Task'
          value={searchValue}
          onChange={handleSearch}
        />
        <button><SearchIcon /></button>
      </div>
    </div>
  );
}
