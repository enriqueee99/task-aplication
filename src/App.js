import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable} from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
//elimine los objetos de ejemplo
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false)

function createNewTask(taskName) {
  if(!tasksItems.find(task => task.name === taskName)){
    setTaskItems([...tasksItems, {name: taskName, done: false}]);
  } else {
    alert('esta tarea ya esta creada')
  }
}

  const toggleTask = task =>{
    setTaskItems(
      tasksItems.map((t) => (t.name === task.name) ? {...t, done: !t.done} : t
    )
  )}

  useEffect(() =>{
      let data = localStorage.getItem('tasks') // leera los datos y si hay algo en LS, conviertelo a js
      if(data){
        setTaskItems(JSON.parse(data));
      }  
  }, [])

  const cleanTask = () =>{
    setTaskItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() =>{  //useefet se ejecuta cada que cambia una variable TaskItems
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
      <TaskCreator createNewTask = {createNewTask} />
    
    <TaskTable tasks = {tasksItems} toggleTask = {toggleTask}/>
    <VisibilityControl 
      isChecked = {showCompleted} 
      setShowCompleted={(checked) => setShowCompleted(checked)}
      cleanTask = {cleanTask}  
    />
      
    {
      showCompleted === true &&(
        <TaskTable tasks = {tasksItems} toggleTask = {toggleTask} showCompleted={showCompleted}/>
      )
    }
    
      </Container>
    </main>
  );
}

export default App;
