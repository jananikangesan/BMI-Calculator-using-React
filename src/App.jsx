import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <div className='bmi-calculator'>
        <div className='box'></div>
          <div className='data'>
            <h1>BMI Calculator</h1>

            <div className='input-container'>
              <label htmlFor='height'>Height (cm) :</label>
              <input type='text' id='height'/>
            </div>

            <div className='input-container'>
              <label htmlFor='weight'>Weight (kg) :</label>
              <input type='text' id='weight'/>
            </div>
            <button>Calculate BMI</button>
            <div className='result'>
              <p>Your BMI is: 28.3</p>
              <p>Status: Over Weight</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
