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
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
      <input 
        placeholder="enter to task"
        value={newTaskName} // para limpiar el input,
        onChange={(e) => setNewTaskName(e.target.value)}
        className='fdorm-control'
      ></input>
      </div>

    <div className="col-3">
    <button className="btn btn-primary btn-sm">save task</button>
    </div>
      
    </form>
  );
};