import './SearchBarNotes.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchNotesBar({ setSearchValue }) {
    const [searchInput, setSearchInput] = useState('');

  function handleSearch(e) {
    setSearchInput(e.target.value);
    setSearchValue(e.target.value);
  }

  return (
    <div className='SearchBar'>
      <div>
        <input
          type='text'
          placeholder='Search Notes'
          value={searchInput}
          onChange={handleSearch}
        />
        <button><SearchIcon /></button>
      </div>
    </div>
  );
}