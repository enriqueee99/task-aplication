import {TaskRow} from './TaskRow'
export const TaskTable = (({tasks, toggleTask, showCompleted = false}) =>{

  const TaskTableRows = (doneValue) =>{
    console.log(doneValue)
    return(
      tasks.
      filter(task => task.done === doneValue).
      map(task  =>(
        <TaskRow task={task} key={task.name}
        toggleTask = {toggleTask}
        />     
      ))
    )
  }
    return(
        <table>
        <thead>
          <tr>
            <th>tasks</th>
          </tr>
        </thead>
        <tbody>
          {
          TaskTableRows(showCompleted) //showcompleted es un booleano para saber si la tarea esta hecha o no
          }
        </tbody>
       </table>
    )
})