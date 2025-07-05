import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const otpLength = 6;
  const [otp, setOtp] = useState<string[]>(Array(otpLength).fill(""));
  const [isError,setIsError]=useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only digits or empty

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    setIsError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, otpLength).split("");

    const newOtp = [...otp];
    pasted.forEach((char, i) => {
      newOtp[i] = char;
      if (inputRefs.current[i]) {
        inputRefs.current[i]!.value = char;
      }
    });

    setOtp(newOtp);
    const nextFocusIndex = pasted.length < otpLength ? pasted.length : otpLength - 1;
    inputRefs.current[nextFocusIndex]?.focus();
  };

  const handleVerify = () => {
    const finalOtp = otp.join("");
    if(finalOtp.length != otpLength)
    {
      console.log("Incorrect OTP ")
      setIsError(true)
    }
    else{
      setIsError(false)
console.log("OTP entered:", finalOtp);
    }
    
  };

  return (
    <>
      <h1>OTP Input Box</h1>
      <div className="otp-input-container">
        {Array.from({ length: otpLength }).map((_, i) => (
          <div className="otp-input-box" >
            <input
            key={i}
            ref={(el) => void (inputRefs.current[i] = el)}

            type="text"
            className="input-box"
            maxLength={1}
            value={otp[i]}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
            style={isError ? { border: "1px solid red", outline: "red" } : {}}
          />
          </div>
        ))}
      </div>
      <div className="buttons-align">
        <button onClick={handleVerify}>Verify</button>
        <button onClick={() => [setOtp(Array(otpLength).fill("")),setIsError(false)]}>Resend OTP</button>
      </div>
      <div className="spinner"></div>
    </>
  );
};

export default App;
