import React,{Component} from 'react';
import  ReactDOM  from 'react-dom';
//import Main from './components/Main';
const tasks=['okok','koko','kookook'];



class Lio extends Component
{
  render()
  {
    return(
      <ol>
  {tasks.map((task,index) => <li key = {index}> {task} </li>)}
</ol>
    )
  }
}

class Tit extends Component
{
  render()
  {
    return <h1>task</h1>

  }
}

class Wain extends Component
{
  render()
  {
    return <div>
      <Tit/>
      <Lio/>
    </div>

  }
}
ReactDOM.render(<Wain/>,document.getElementById('root'));

/*class List extends Component
{
  render()
  {
    return
    (<ol>
      {this.props.tasks.map((task,index) => <li key = {index} > {task} </li>)}
    </ol>)
  }

}

class Title extends Component
{
  render()
  {
    return
    <h1> 
      irfan
      </h1> 
  }
}

class Wain extends Component
{
  render()
  {
    return
        <div>
         <List  tasks={['okok','koko']}/>
         <Title/>
        </div>
  }
}*/


//ReactDOM.render(<Wain/>,document.getElementById('root'));
