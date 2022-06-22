import React from "react";

function Lio(props)
{
  return(
    <ol>
{this.props.arr.map((task,index) => <li key = {index}> {task} </li>)}
</ol>
  )
}


export default Lio