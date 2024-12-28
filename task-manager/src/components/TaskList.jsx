import React from "react";

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id} className={`task ${task.completed ? "completed" : ""}`}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => onToggle(task._id)}>
            {task.completed ? "Marcar como Pendiente" : "Marcar como Completada"}
          </button>
          <button onClick={() => onEdit(task)}>Editar</button>
          <button onClick={() => onDelete(task._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
