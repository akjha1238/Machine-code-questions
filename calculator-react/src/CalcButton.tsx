function CalculatorButton({ buttonDetails, onClick }) {
  return (
    <div className="calc-button" onClick={() => onClick(buttonDetails)}>
      <p>{buttonDetails.label}</p>
    </div>
  );
}

export default CalculatorButton;
