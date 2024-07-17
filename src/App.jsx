import { useState } from 'react';
import Square from './Square';
import './Row.css';

function App() {
  const winConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  const [sqVal,Updater] = useState(Array(9).fill(null))
  const [gameStatus,gameStatusUpdate]=useState(false);
  const [player,setPlayer]=useState("X");
  
  function sqValUpd(index) {
    
    let newval=sqVal.slice();
    
    if(newval[index]==null && !gameStatus )
     {
      newval[index]=player;
      Updater(newval);
      setPlayer((prevPlayer) => prevPlayer === "X" ? "O" : "X");
     }
     checkWinner(newval);
  }

  function checkWinner(newSquares) {
    for (let i = 0; i < winConditions.length; i++) {
      if(!gameStatus){
      const [a, b, c] = winConditions[i];
      if (newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c] && newSquares[a] !== null) {
        gameStatusUpdate(true); 
        setPlayer((prevPlayer) => prevPlayer === "X" ? "O" : "X");
      }``
    }
    }
  }



  function resetgame(){
      let newval=sqVal.map((e)=>null);
      Updater(newval);
gameStatusUpdate(false);
  }
  return (
    <>
   <div className='title'>
        {gameStatus
          ? `${player} Winner!`
          : `Next player: ${player}`}
      </div>
      <div className="Row">
        <Square value={sqVal[0]} updater={()=>sqValUpd(0)}   />
        <Square value={sqVal[1]} updater={()=>sqValUpd(1)}  />
        <Square value={sqVal[2]} updater={()=>sqValUpd(2)} />
      </div>

      <div className="Row">
        <Square value={sqVal[3]} updater={()=>sqValUpd(3)}  />
        <Square value={sqVal[4]} updater={()=>sqValUpd(4)}  />
        <Square value={sqVal[5]} updater={()=>sqValUpd(5)}  />
      </div>

      <div className="Row">
        <Square value={sqVal[6]} updater={()=>sqValUpd(6)}  />
        <Square value={sqVal[7]} updater={()=>sqValUpd(7)}  />
        <Square value={sqVal[8]} updater={()=>sqValUpd(8)}  />
      </div>
      <button onClick={resetgame}> Reset</button>
    </>
  );
}

export default App;
