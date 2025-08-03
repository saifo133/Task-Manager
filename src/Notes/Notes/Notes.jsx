import './Notes.css';
import ShowNotes from '../ShowNotes/ShowNotes';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Navbar from '../../Home/Navbar/Navbar';
import { useState, useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext/TaskContext';
import SearchNotesBar from './SearchBarNotes/SearchBarNotes';

export default function Notes() {

 const { notes, setNotes } = useContext(TaskContext);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  function handleAddNote(e) {
    setInputValue(e.target.value);
  }

  function addNoteFunction() {
    if (inputValue.trim() === '') return;
    setNotes([...notes, { text: inputValue }]);
    setInputValue('');
  }

  // فلترة الملاحظات مباشرة من notes
  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='container'>
      <Navbar />
      <hr />

      {/* شريط البحث للملاحظات */}
      <SearchNotesBar setSearchValue={setSearchValue} />

      <div className='addNote'>
        <input 
          type="text" 
          placeholder="Add Note" 
          value={inputValue} 
          onChange={handleAddNote} 
        />
        <button onClick={addNoteFunction}>
          <AddCircleIcon />
        </button>
      </div>

      <ShowNotes notes={filteredNotes} setNotes={setNotes} />
    </div>
  );
}
