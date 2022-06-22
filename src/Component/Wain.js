import React,{Component} from "react";
import Lio from "./Lio";
import Tit from "./Tit";


class Wain extends Component
{
  render()
  {
    return <div>
      <Tit/>
      <Lio arr={['okok','koko','kookookkkk']}  />
    </div>

  }
}

export default Wain