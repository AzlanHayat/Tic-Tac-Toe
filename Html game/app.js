const boxes = Array.from(document.getElementsByClassName("box"));
const playtext = document.getElementById('playtext');
const restartbut = document.getElementById('restartbut');
const spaces = [];
const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer;

const draeBoard = () => {
    boxes.forEach((box, index)=>{
        let styleString = "";
        if (index < 3) {
            styleString += 'border-bottom: 3px solid var(--purple);';
        }
        if(index % 3 === 0) {
            styleString += 'border-right: 3px solid var(--purple);';
        }
        if(index % 3 == 2) {
            styleString += 'border-left: 3px solid var(--purple);';
        }
        if (index > 5) {
            styleString += 'border-top: 3px solid var(--purple);';
        }
            box.style = styleString;
            box.addEventListener('click', boxclicked)
    })
};

const boxclicked = (e) => {
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(PlayerHasWon()){
            playtext.innerText = `${currentPlayer} wins!!`;
            return;
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    } 

};

const PlayerHasWon = () =>{
    if(spaces[0] === currentPlayer){
        if(spaces [1] === currentPlayer && spaces [2] === currentPlayer) {
        console.log(`${currentPlayer} wins up top.`);
        return true;
      }

      if(spaces [3] === currentPlayer && spaces [6] === currentPlayer) {
        console.log(`${currentPlayer} wins up left.`);
        return true;
      }
      if(spaces [4] === currentPlayer && spaces [8] === currentPlayer) {
       console.log(`${currentPlayer} wins up diagolan.`);
       return true;
      }
    }
     if(spaces[8] === currentPlayer){
        if(spaces [2] === currentPlayer && spaces [5] === currentPlayer) {
        console.log(`${currentPlayer} wins on the right.`);
        return true;
      }

      if(spaces [6] === currentPlayer && spaces [7] === currentPlayer) {
        console.log(`${currentPlayer} wins the bottom.`);
        return true;
      }
    }
    if(spaces [4] === currentPlayer) {
            if(spaces [1] === currentPlayer && spaces [7] === currentPlayer) {
            console.log(`${currentPlayer} wins vertically in the middle .`);
            return true;
        }
            if(spaces [3] === currentPlayer && spaces [5] === currentPlayer) {
            console.log(`${currentPlayer} wins horizontally in the middle.`);
            return true;
          }
    }
};

const restart = () => {
        spaces.forEach((space, index) => {
            spaces[index] = null;
        })
        boxes.forEach((box) => {
            box.innerText = '';
        })
        playtext.innerText = `Let's Play`;
        
        currentPlayer = O_TEXT;
};

restartbut.addEventListener('click', restart); 

restart();
draeBoard();