import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [toggleTab, setToggleTab] = useState(0);
  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  return (
    <>
      <h1>Clock Timer</h1>
      <div className="clock-wrapper">
        <div className="tab-toggle">
          <div onClick={() => handleToggleTab(0)} className="tab">Stopwatch</div>
          <div onClick={() => handleToggleTab(1)} className="tab">Timer</div>
        </div>
        <div className="clock-container">
          {toggleTab ? <TimerComponent /> : <StopwatchComponent />}
        </div>
      </div>
    </>
  );
}
function StopwatchComponent() {
  const [watchTimer,setWatchTimer]=useState(0);
  const [isRunning,setIsRunning]=useState(false);
  const [lapData,setLapData]=useState([]);
  useEffect(() => {
    if(isRunning){
const intervalId = setInterval(() => {
      setWatchTimer(watchTimer => watchTimer + 1);  // ✅ always latest value
      console.log("Timer incremented");
    }, 1000);

    return () => clearInterval(intervalId);  
    }
    
  }, [isRunning,watchTimer]); 
  const handleReset=()=>{
    setIsRunning(false);
    setWatchTimer(0);
    setLapData([]);
  }
  const handleLapData=()=>{
    const isPresent=lapData.find(data=>data===watchTimer)
    if(!isPresent)
    {
      setLapData(lapData=>[...lapData,watchTimer]);
    }
  }
  return (<>
  <div>Stop watch component is rendered   </div>
  <div className="stopwatch-clock">
{watchTimer} seconds
  </div>
  <div className="lap-details">
{lapData.map((data)=>{
  return <div>{data}</div>
})}
  </div>
  <div className="stopwatch-button">
    <p onClick={()=>setIsRunning(isRunning=>!isRunning)}>{isRunning?'Pause':'Start'}</p>
    
    <p onClick={handleLapData}>lap</p>
    <p onClick={handleReset}>reset</p>
  </div>

    
  </>);
  
}
function TimerComponent() {
  return <div>Timer component is rendered</div>;
}

export default App;
