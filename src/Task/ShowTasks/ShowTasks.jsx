import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './ShowTasks.css';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShowTasks({ tasks, setTasks, hideEmptyMessage }) {
  // فلترة المهام الغير مكتملة
  const incompleteTasks = tasks.filter(task => !task.completed);

  const [open, setOpen] = React.useState(false);
  const [editingIndex, setEditingIndex] = React.useState(null);
  const [editedText, setEditedText] = React.useState('');

  // تبديل حالة الإكمال
  function toggleTaskCompletion(indexInFiltered) {
    const taskToToggle = incompleteTasks[indexInFiltered];
    const updatedTasks = tasks.map(task =>
      task === taskToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  // حذف مهمة
  function deleteTask(indexInFiltered) {
    const taskToDelete = incompleteTasks[indexInFiltered];
    const updatedTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(updatedTasks);
  }

  // فتح نافذة التعديل
  function openEditDialog(indexInFiltered) {
    const taskToEdit = incompleteTasks[indexInFiltered];
    setEditingIndex(tasks.indexOf(taskToEdit));
    setEditedText(taskToEdit.text);
    setOpen(true);
  }

  // إغلاق نافذة التعديل
  function handleClose() {
    setOpen(false);
    setEditingIndex(null);
    setEditedText('');
  }

  // حفظ التعديل
  function saveEdit() {
    if (editedText.trim() === '') return;
    const updatedTasks = tasks.map((task, i) =>
      i === editingIndex ? { ...task, text: editedText } : task
    );
    setTasks(updatedTasks);
    handleClose();
  }

  // إذا القائمة فاضية ومو حابب الرسالة تظهر
  if (incompleteTasks.length === 0 && !hideEmptyMessage) {
    return <p className='empty'>No Tasks Right Now!</p>;
  }

  return (
    <>
      {incompleteTasks.map((task, index) => (
        <div key={tasks.indexOf(task)} className="ShowTasks">
          <h3 className={task.completed ? "completed" : ""}>
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? <CheckCircleIcon /> : <CircleOutlinedIcon />}
            </button>
            {task.text}
          </h3>
          <div>
            <button onClick={() => openEditDialog(index)}><EditIcon /></button>
            <button onClick={() => deleteTask(index)}><DeleteIcon /></button>
          </div>
        </div>
      ))}

      {/* نافذة تعديل المهمة */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>UPDATE TASK</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Your Task</DialogContentText>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '1rem',
              marginTop: '10px',
              boxSizing: 'border-box',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveEdit} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
