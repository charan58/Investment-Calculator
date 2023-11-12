import React from 'react'
import './UserInput.css'
function UserInput(props) {
  return (
    <div className='user-input'>
        <ul className='input-group'>
            <li>
                <label>Initial Investment</label>
                <br/>
                <input type='number'
                 required 
                 value={props.userInput.initialInvestment}
                 onChange={(event)=>props.handleChange('initialInvestment',event.target.value)}
                 />
            </li>
            <li>
                <label>Annual Investment</label>
                <br/>
                <input type='number'
                 required
                 value={props.userInput.annualInvestment}
                 onChange={(event)=>props.handleChange('annualInvestment',event.target.value)}
                 />
            </li>
            <br/>
            <li>
                <label>Exepcted Return</label>
                <br/>
                <input type='number' 
                required
                value={props.userInput.expectedReturn}
                onChange={(event)=>props.handleChange('expectedReturn',event.target.value)}
                />
            </li>
            <li>
                <label>Duration</label>
                <br/>
                <input type='number' required
                value={props.userInput.duration}
                onChange={(event)=>props.handleChange('duration',event.target.value)}
                />
            </li>
        </ul>
    </div>
  )
}

export default UserInput