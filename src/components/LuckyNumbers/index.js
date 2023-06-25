import React, { useState, useEffect } from "react";

function LuckyNumbers() {
  const [luckyNumbers, setLuckyNumbers] = useState([1,2,3,4,5,6,7]);

  const resetNumbers = () => {
    setLuckyNumbers([]);
  };

  const generateLuckyNumbers = () => {
    const numbersSet = new Set();
  
    while(numbersSet.size < 6) {
      numbersSet.add(Math.floor(Math.random() * 49) + 1);
    }

    const numbers = Array.from(numbersSet);
    const extraNumber = Math.floor(Math.random() * 10) + 1;
    
    setLuckyNumbers([...numbers, extraNumber]);
  };

  useEffect(() => {
    generateLuckyNumbers();
  }, []);

  return (
    <>
      <div>
        <h1>LOTTO 6 / 49</h1>
        <h2>Generating Lucky Numbers</h2>
      </div>

      <div className="container">
        {luckyNumbers.map((number, index) => (
          <div key={index} className={index < 6 ? "circle" : "circle extraCircle"}>
            {number}
          </div>
        ))}
      </div>
      <br></br>
      <button className="reset-btn" onClick={resetNumbers}>Reset</button>
      <br></br>
      
      <button className="reset-btn" onClick={generateLuckyNumbers}>Show Me Lucky Numbers</button>
    </>
  );
}

export default LuckyNumbers;
