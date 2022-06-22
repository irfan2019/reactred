import React,{Component} from "react";

const posts=[{
  id:"0",
  description:"first image",
  imageLink:"./public/images/bike.jpg"
}

]

function Tit(props)
{
  return <h1>{props.title}</h1>
}

export default Tit