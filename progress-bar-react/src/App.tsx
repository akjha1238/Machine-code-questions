import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [progress,setProgress]=useState(0);
  useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prev) => (prev < 100 ? prev + 1 : 100));
  }, 200);

  return () => clearInterval(timer);
}, []);

  return (
    <>
      <h2>Progress bar </h2>
      <div className='progress-bar-wrapper'>
      <div className='progress-bar' style={{width:`${progress}%`}}>{progress}%</div>
     

      </div>
    </>
  )
}

export default App
