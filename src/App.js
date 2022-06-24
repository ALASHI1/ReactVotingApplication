import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [scoredis, setScoredisplay] = useState(0);
  const [dscscoredis, setDscscoredisplay] = useState(100);
  const [votes, setVotes] = useState(-1);

  useEffect(() => {
    document.documentElement.style.setProperty('--spacing', `${count}px`);
    setVotes(votes + 1);
  }, [count]);

  const handleIncrement = () => {
    if (count < window.innerWidth) {
    let nc = count + 16; 
    setCount(nc)
    console.log(window.innerWidth, window.innerHeight, count)
    handleDisplay()
    }else{
      alert('maximum votes reached')
    }
  }

  const handleDisplay = () => {
    let scor = (1600/window.innerWidth) + score;
    let scor2 =  scor.toFixed(2);
    setScore(scor)
    setScoredisplay(scor2)
    setDscscoredisplay((100-scor2).toFixed(2)) 
  }

  const handleDecsDisplay = () => {
    let scor = score - (1600/window.innerWidth);
    let scor2 =  100 - scor.toFixed(2);
    setScore(scor)
    setScoredisplay(scor.toFixed(2))
    setDscscoredisplay(scor2.toFixed(2))
  }

  const handleDecrement = () => {
    if (count > 0) {
    let nc = count - 16; 
    setCount(nc)
    handleDecsDisplay()
  }else{
    alert('maximum votes reached')
  }
  }

  return (
    <>
    <div className="App">
      <div className='other'>
      <div className='btndiv' style={{margin: 100}}>
      <button className='btn' style={{color: "#4EA1ED"}} onClick={()=>{handleIncrement()}}> CATS {scoredis}% </button>
      <button className='btn' style={{color: "#66CECF"}} onClick={()=>{handleDecrement()}}> DOGS  {dscscoredis}%</button>
      </div>
      </div>
      <div className='vote'>{votes}Votes </div>
    </div>
    </>
  );
}

export default App;
