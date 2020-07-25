import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const App = (props) => {
    const [random, setRandom] = useState(0)
    const [votes, setVotes] = useState([0, 0, 0, 0, 0])
    const [mostVotes, setMostVotes] = useState(0)
    
    let selected = 0
    let voted = 0

    const handleRandClick = () => {
        let tmp = 0
        do {
            tmp = Math.floor(Math.random()*5)
        } while (random === tmp)

        setRandom(tmp)
    }

    selected = random

    const handleVoteClick = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)

        let most = 0
        for (let i = 0; i < copy.length; i++){
            if (copy[i] > most)
            {
                most = copy[i]
                setMostVotes(i)
            }
        }
    }

    voted = mostVotes

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}</p> 
            <p>Has {votes[selected]} votes</p>
            <button onClick={handleVoteClick}>Vote</button>
            <button onClick={handleRandClick}>Next Anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[voted]}</p>
            <p>Has {votes[voted]} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Debugging is twice as hard as writing code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
