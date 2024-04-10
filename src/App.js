import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable} from "./components/TaskTable";

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
      let data = localStorage.getItem('tasks') // leera los datos y si hay algo en LS, conviertelo a js
      if(data){
        setTaskItems(JSON.parse(data));
      }  
  }, [])

  useEffect(() =>{  //useefet se ejecuta cada que cambia una variable TaskItems
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems])

  return (
    <div className="App">
    <TaskCreator createNewTask = {createNewTask} />
    <TaskTable tasks = {tasksItems}/>

    </div>
  );
}

export default App;
