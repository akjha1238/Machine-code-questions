import "./App.css";
import CalculatorButton from "./CalcButton";
import DisplayScreen from "./Display";
import { useState } from "react";



function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const buttonData = [
  { label: "AC", action: "clear" },
  { label: "( )", action: "bracket" },
  { label: "%", action: "percent" },
  { label: "÷", action: "divide" },

  { label: "7", action: "seven" },
  { label: "8", action: "eight" },
  { label: "9", action: "nine" },
  { label: "×", action: "multiply" },

  { label: "4", action: "four" },
  { label: "5", action: "five" },
  { label: "6", action: "six" },
  { label: "−", action: "subtract" },

  { label: "1", action: "one" },
  { label: "2", action: "two" },
  { label: "3", action: "three" },
  { label: "+", action: "add" },

  { label: "0", action: "digit",},
  { label: "⌫", action: "backspace",},
  { label: ".", action: "decimal" },
  { label: "=", action: "equals" },
];
const handleButtonClick = (buttonDetails) => {
    if (buttonDetails.action === "equals") {
      try {
        const exp = expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
        setResult(eval(exp)); // ⚠️ Still use with caution
      } catch (err) {
        setResult("Error");
      }
    } else if (buttonDetails.action === "clear") {
      setExpression("");
      setResult("");
    } else if (buttonDetails.action === "backspace") {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(prev => prev + buttonDetails.label);
    }
  };
    


  return (
    <>
      <h3>Calculator</h3>
      <div className="calc-wrapper">
        <DisplayScreen expression={expression} result={result} />
        <div className="calc-button-wrapper">
          {
            buttonData.map((button,index)=>{
              return(
              <CalculatorButton key={index} buttonDetails={button} onClick={handleButtonClick}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;


