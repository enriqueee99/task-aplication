export const TaskTable = (({tasks}) =>{
    return(
        <table>
        <thead>
          <tr>
            <th>tasks</th>
          </tr>
        </thead>
        <tbody>
          {
          tasks.map(task  =>(
            <tr key={task.name}>
              <td>
              {task.name}
              </td>
            </tr>
          ))
          }
        </tbody>
       </table>
    )
})