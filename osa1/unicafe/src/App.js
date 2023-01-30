import { useState } from 'react'

const Statistics = ({good, bad, neutral, setBad, setGood, setNeutral}) => {
  const all = good + bad + neutral
  const average = (good * 1 + bad * -1) / all

  if (all === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>

        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>bad {bad}</p>
      <p>neutral {neutral}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {good / all * 100}%</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Statistics setGood={setGood} setNeutral={setNeutral} setBad={setBad} bad={bad} good={good} neutral={neutral}></Statistics>
    </div>
  )
}

export default App