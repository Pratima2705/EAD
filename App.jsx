import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [strength,setStrength] = useState("");
  const [pwd,setPwd] = useState("");
  const checkStrength=(pwd)=>{
    let score=0;
    const expressions=[
      {regex:/[\d{8,}]/},
      {regex:/[A-Z]/},
      {regex:/[a-z]/},
      {regex:/[0-9]/},
      {regex:/[^A-Za-z0-9]/},
    ]
    expressions.map((e)=>{
      if(e.regex.test(pwd)){
        score++;
      }
    });
    const values=["very weak","weak","medium","strong","very strong"]
    setStrength(values[score-1]);
  }
  const updatedPassword=(e)=>{
    const newPwd=e.target.values;
    setPwd(newPwd)
    checkStrength(pwd)
  }

  return (
    <>
    <h1>password strength</h1>
      <div>
        <input
         type="password"
         id="password"
         name="password"
         val={pwd}
         onChange={updatedPassword}
        ></input>
      </div>
      <p >
        Strength:{strength}
      </p>
    </>
  )
}

export default App
