import React,{Component} from "react";

const posts=[{
  id:"0",
  description:"first image",
  imageLink:""
}

]


class Tit extends Component
{
  render()
  {
    return <h1>{this.props.title}</h1>

  }
}

export default Tit