import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const App = (props) => {
    const [random, setRandom] = useState(0)
    const [votes, setVotes] = useState([0, 0, 0, 0, 0])
    
    let selected = 0
    const handleRandClick = () => {
        let tmp = 0
        do {
            tmp = Math.floor(Math.random()*5)
        } while (random === tmp)

        setRandom(tmp)
    }

    selected = random

    const handleVoteClick = () => {
        const copy = {...votes}
        copy[selected] += 1
        setVotes(copy)
    }

    return (
        <div>
            <h1>{props.anecdotes[selected]}</h1> 
            <p>Has {votes[selected]} votes</p>
            <button onClick={handleRandClick}>Randomize</button>
            <button onClick={handleVoteClick}>Vote</button>
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
