import React,{Component} from "react";

class Lio extends Component
{
  render()
  {
    return(
      <ol>
  {this.props.arr.map((task,index) => <li key = {index}> {task} </li>)}
</ol>
    )
  }
}

export default Lio