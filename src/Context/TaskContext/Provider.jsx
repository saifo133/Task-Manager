import { useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";

export default function Provider({ children }) {
  // المهام
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // الملاحظات
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  // حفظ المهام في localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // حفظ الملاحظات في localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, notes, setNotes }}>
      {children}
    </TaskContext.Provider>
  );
}
