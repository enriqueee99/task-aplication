import {TaskRow} from './TaskRow'
export const TaskTable = (({tasks, toggleTask}) =>{

  const TaskTableRows = (doneValue) =>{
    console.log(doneValue)
    return(
      tasks.
      filter(task => task.done === false).
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
          TaskTableRows(false)
          }
        </tbody>
       </table>
    )
})