import { useState } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
const [tasksItems, setTaskItems] = useState([
  {name: 'mi primer tarea', done: false},
  {name: 'mi segunda tarea', done: false},
  {name: 'mi tercera tarea', done: false}
])

function createNewTask(taskName) {
  if(!tasksItems.find(task => task.name === taskName)){
    setTaskItems([...tasksItems, {name: taskName, done: false}]);
  } else {
    alert('esta tarea ya esta creada')
  }
}

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
