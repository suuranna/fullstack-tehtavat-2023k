import { useState } from 'react'

const MostVoted = ({votes, setNew, setBiggerVote, mostVoted, biggestVote, anecdotes}) => {
  return (
    <div>
      <p>{mostVoted}</p>
      <p>has {biggestVote} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const list = new Uint8Array(anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(list)
  const [mostVoted, setNew] = useState(anecdotes[0])
  const [biggestVote, setBiggerVote] = useState(0)
  const [currentVote, setCurrent] = useState(votes[0])

  const vote = () => {
    var newVotes = votes
    votes[selected] = votes[selected] + 1
    setVote(newVotes)
    setCurrent(votes[selected])
    if (votes[selected] > biggestVote) {
      setBiggerVote(votes[selected])
      setNew(anecdotes[selected])
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br></br>
      <button onClick={vote}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <MostVoted votes={votes} setNew={setNew} setBiggerVote={setBiggerVote} mostVoted={mostVoted} biggestVote={biggestVote} anecdotes={anecdotes} />
    </div>
  )
}

export default App