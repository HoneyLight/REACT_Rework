import Navigation from "../components/Navigation";
import { useState } from "react";
import Btn from "../components/Btn";

function Counter() {
    const [count, setCount] = useState(0)

    const increaseCounter = () =>{
        setCount(count + 1)
    }

    const reset =() =>{
        setCount(0)
    }

    const decrease =() =>{
        if(count>0){
            setCount(count-1)
        }
    }
  return (
    <div>
      <Navigation />
      <div className="header">
        <h2>Counter Page</h2>
      </div>
      <div className="counter">
        <h2>{count}</h2>
        <div className="counterbtn">
        <Btn title= "Increase" bgColor="brown" click={increaseCounter}/>
        <Btn title= "reset" bgColor="brown" click={reset}/>
        <Btn title= "Decrease" bgColor="brown" click={decrease}/>
        {/* <button onClick={decrease}>Decrease</button> */}
        </div>
      </div>
    </div>
  );
}
export default Counter;
