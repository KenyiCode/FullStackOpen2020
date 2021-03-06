import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
)

const Statistic = (props) => {
  return (
    <>
      <td>{props.text}: </td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  let avg = (good+bad)/all
  let pos = (good/all)*100

  avg = Math.floor(avg*10)/10
  pos = Math.floor(pos*10)/10

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Statistic text="Good" value={good}/>
          </tr>
          <tr>
            <Statistic text="Neutral" value={neutral}/>
          </tr>
          <tr>
            <Statistic text="Bad" value={bad*-1}/>
          </tr>
          <tr>
            <Statistic text="All" value={all}/>
          </tr>
          <tr>
            <Statistic text="Average" value={avg}/>
          </tr>
          <tr>
            <Statistic text="Positive" value={pos + "%"}/>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad - 1)
  }
  
  return (
    <div>
    <h1>Give Feedback</h1>
    <Button onClick={handleGoodClick} text="Good"/>
    <Button onClick={handleNeutralClick} text="Neutral"/>
    <Button onClick={handleBadClick} text="Bad"/>
    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
