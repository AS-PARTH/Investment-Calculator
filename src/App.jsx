import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});


function handleChange(inputIdentifier, newValue) {
  setUserInput((prevUserInput) => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
      }
  });
}

const inputIsValid = userInput.duration >=1;

  return (
    <>
    <Header/>
    {/** HERE WE ARE SHARING A SINGLE STATE USING THE PROPS & PROPS DESTRUCTURING  */}
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && 
    <p className="center">Please enter a duration greater than zero</p>}
    {inputIsValid &&<Results   input={userInput}/>} 
    </>
  )
}

export default App
