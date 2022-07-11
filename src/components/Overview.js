import React from "react"

function Overview(props) {
  const deleteTask = (id) => {

  }
  
  const editTask = () => {
  }

  const tasks = props.tasks.map( task => {
    return (
      <div key={task.id} style={{marginBottom:"10px 0 10px"}}>
        <li style={{display:"inline-block"}}>{task.value}</li>
        <button onClick={deleteTask(task.id)} style={{margin:"0 10px 0 10px"}}>delete</button>
        <button onClick={editTask}>edit</button>
      </div>
    );
  })

  return (
    <div>
      <ul>{tasks}</ul>
    </div>
  )
}

export default Overview