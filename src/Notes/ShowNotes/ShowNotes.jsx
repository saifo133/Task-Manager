import './ShowNotes.css';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ShowNotes({ notes, setNotes }) {
  function deleteNote(index) {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  }

  return (
    <>
      {notes.length === 0 ? (
        <p className='empty'>No Notes Right Now!</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className="ShowNotes">
            <h3>{index+1}. {note.text}</h3>
            <button onClick={() => deleteNote(index)}>
              <DeleteIcon />
            </button>
          </div>
        ))
      )}
    </>
  );
}
