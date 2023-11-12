import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
})
const validInput=userInput.duration>=1;
function handleChange(inputIndentifier,newval)
    {
        setUserInput(prevUserInput=>{
            return{
                ...prevUserInput,
                [inputIndentifier]:+newval
            }
        });
    }
  return (
    <>
      <Header/>
      <p className='heading'>Below values are default. Please change the values as your requirement</p>
      <UserInput handleChange={handleChange} userInput={userInput}/>
      {
        validInput?<Results userInput={userInput}/>:<p className='alret'>Inavlid Duration. It should be more than 1 year</p>
      }
    </>
  );
}

export default App;
