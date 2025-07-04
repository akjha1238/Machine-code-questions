import { forwardRef, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
const [otpLength, setOtpLength] = useState(6);
  return (
    <>
      <h1>Hello otp input Box</h1>
      <div className="otp-input-container">
        {Array.from({ length: otpLength }).map((_, i) => {
          return <OtpInputBox key={i} index={i} length={otpLength} />;
        })}
      </div>
      <div className="buttons-align">
        <div>Verify</div>
        <div>Resend OTP</div>
      </div>
    </>
  );
}
function OtpInputBox({ index ,length}) {
  // const otpRef=useRef();
  const [otp, setOtp] = useState([]);
  const [otpString,setOtpString] =useState("")
  

  const inputsRef = useRef<HTMLInputElement>(null);
  

  useEffect(() => {}, []);
  const handleKeyDown = (e) => {
    console.log("event called", e);
    if (e.code === "Backspace" && index > 0) {
      console.log("Backspace clicked");
      if(inputsRef.current)
      {
        focusPrev(index)
      }
    }
    else if (e.key >= '0' && e.key <= '9') {
      console.log(e.key)
setOtpString(prev =>
  prev.substring(0, index) + e.key + prev.substring(index + 1),
);
console.log(otpString)
  } else {
    console.log("Non-digit key:", e.key);
  }
  };
  const focusPrev = (index: number) => {
  if (index > 0) {
    console.log(index)
    inputsRef.current[index - 1]?.focus();
  }
};
  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text").split("");
    setOtp(pastedText);
    // const letters = word.split("");
  };

  const handleChange = (e) => {
    console.log("handleChange", e);
  };
  return (
    <div
      className="otp-input-box"
      ref={inputsRef}
      onKeyDown={handleKeyDown}
      tabIndex={index === 2 ? 0 : -1}
      onPaste={handlePaste}
    >
      {otpString[index]}
    </div>
  );
}

export default App;
