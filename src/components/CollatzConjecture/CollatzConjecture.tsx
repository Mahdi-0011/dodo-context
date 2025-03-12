import { useState } from "react"
import "./CollatzConjecture.scss"

export default function CollatzConjecture() {
  const [inputData, setInputData] = useState("");
  const [reslut, setResult] = useState (null);

  const addNumber = () => {
    setInputData();
    setInputData("");
  }
  return<>
    <h3>Collatz Conjecture </h3>
    <input type="text"    
    placeholder="Write your number ..."
    onChange={(e) => setInputData(e.target.value)}
    value={inputData}
    />
    <button onClick={addNumber}>Add +1</button>
    <div>
      <h5>jämn = dela med 2: {inputData}</h5>
      <h5>udda = gånger 3 och plus 1: {inputData*3 +1}</h5>
    </div>
    </>
}
