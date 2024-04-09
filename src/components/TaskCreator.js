import { useState } from "react";

export const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);

    localStorage.setItem("task", newTaskName); //clave(nombre variable), valor
    setNewTaskName(""); //para limpiar input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="enter to task"
        value={newTaskName} // para limpiar el input,
        onChange={(e) => setNewTaskName(e.target.value)}
      ></input>

      <button>save task</button>
    </form>
  );
};