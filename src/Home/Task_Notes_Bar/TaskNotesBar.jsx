import './TaskNotesBar.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext/TaskContext';

export default function TaskNotesBar() {
    const { tasks , notes } = useContext(TaskContext);

    // حساب عدد المهام غير المكتملة فقط
    const incompleteCount = tasks.filter(task => task.completed).length;

    return (
        <div className='TaskNotesBar'>
            <h4>
                <CheckCircleIcon className='CheckCircleIcon' /> 
                {incompleteCount} Tasks
            </h4>
            <h4>
                <SpeakerNotesIcon className='SpeakerNotesIcon' /> 
                {notes.length} Notes
            </h4>
        </div>
    );
}
