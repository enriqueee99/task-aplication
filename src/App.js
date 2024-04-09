import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
//elimine los objetos de ejemplo
  const [tasksItems, setTaskItems] = useState([]);


function createNewTask(taskName) {
  if(!tasksItems.find(task => task.name === taskName)){
    setTaskItems([...tasksItems, {name: taskName, done: false}]);
  } else {
    alert('esta tarea ya esta creada')
  }
}
  useEffect(() =>{
      let data = localStorage.getItem('task') //si hay algo en LS, conviertelo a js
      if(data){
        console.log(JSON.parse(data));
      }  
  }, [])

  useEffect(() =>{
    localStorage.setItem('task', JSON.stringify(tasksItems));
  }, [tasksItems])

  return (
    <div className="App">
     <TaskCreator createNewTask = {createNewTask} />
     <table>
      <thead>
        <tr>
          <th>tasks</th>
        </tr>
      </thead>
      <tbody>
        {
        tasksItems.map(task  =>(
          <tr key={task.name}>
            <td>
            {task.name}
            </td>
          </tr>
        ))
        }
      </tbody>
     </table>
    </div>
  );
}

export default App;
