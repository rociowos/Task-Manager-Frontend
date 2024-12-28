import React, { useEffect, useState } from "react";
import TaskList from "../components/taskList";
import TaskForm from "../components/TaskForm";
import { getTasks, createTask, updateTask, deleteTask } from "../Services/taskService";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const tasksData = await getTasks();
    setTasks(tasksData);
  };

  const handleAddOrEdit = async (taskData) => {
    if (editingTask) {
      await updateTask(editingTask._id, taskData);
    } else {
      await createTask(taskData);
    }
    setEditingTask(null);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleToggle = async (id) => {
    const task = tasks.find((task) => task._id === id);
    await updateTask(id, { completed: !task.completed });
    loadTasks();
  };

  return (
    <div>
      <TaskForm onSubmit={handleAddOrEdit} initialData={editingTask} />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
};

export default Home;
