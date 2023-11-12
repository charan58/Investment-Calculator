import React from 'react'
import {calculateInvestmentResults,formatter} from '../utils/investment.js'
import './Results.css'
function Results(props) {
const resutsData=calculateInvestmentResults(props.userInput);
// console.log(resutsData)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investement value</th>
                    <th>Interest (Per year)</th>
                    <th>Total Interest</th>
                    <th>Invested Captital</th>
                </tr>
            </thead>
            <tbody>
                {
                    resutsData.map((yearlyData)=>{
                        const totalInterest=yearlyData.valueEndOfYear-yearlyData.annualInvestment*yearlyData.year;
                        const totalAmmountInvested=yearlyData.valueEndOfYear-totalInterest;
                        return <tr key={yearlyData.year}>
                            <td>{yearlyData.year}</td>
                            <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearlyData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmmountInvested)}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Results