import { BackgroundColor } from "jest-matcher-utils/node_modules/chalk";
import React , {useState} from "react";

function Toggle(){


const [isOn,setIsOn] = useState(true)

function handleClick(){
  setIsOn((isOn) =>!isOn)
}

 

const color = (isOn?"blue":"grey")

return <button style={{background : color}} onClick={handleClick}>{isOn?"ON":"OFF"}</button>

};

export default Toggle;
