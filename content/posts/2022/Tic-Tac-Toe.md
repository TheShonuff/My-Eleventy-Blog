---
title: Tic-Tac-Toe
date: 2022-06-22
image: /assets/images/2022/tic-tac-toe.png
---

It's been a few weeks since I've written a new blog post. Between school, work, family and learning to write code it's hard to find time to document my journey. This post will talk about the recent front-end mentor challenge I completed and how I came about the solution.

## Tic Tac Toe

After having completed several novice challenges I decided to up the ante this round and dive into an intermediate level challenge. Looking through the list of options the [Tic-Tac-Toe challenge](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v) looked interesting. I mean every up and coming developer has made a pokemon app and a Tic-Tac-Toe game, how hard could this be? Well, designing and getting the game to function is not that hard. It was all the subtleties in the challenge that made this very interesting. If the project stats were any indication... I was in for a ride. 527 people started the project but only 29 finsihed it.

### The Challenge

Users should be able to...

1. See a hover state for all interactive elements on the page. Including empty board squares.
2. Play against a computer or human opponent.
3. Winning squares are highlighted.
4. Include a modal that reflects the outcome of the game.
5. Player one has the ability to choose their shape.

You can play the [final result here](https://silly-biscochitos-d897d1.netlify.app/)

![Video](https://imgur.com/sC9aSHP.gif)

### The Game Logic

There are a couple of tutorials online that went into the basics of designing a Tic-Tac-Toe game in React. I used this one from [Blog Rocket](https://blog.logrocket.com/build-tic-tac-toe-game-react-hooks/) to get the initial logic down. Using a multi-dimensional array I was able to navigate with x and y coordinates. I could select squares, set the board state and detect win conditions.

```JS
function updateSquare(x, y) {
    const boardCopy = [...board];
    if (boardCopy[x][y] === "") {
      currentPlayer === playerOne
        ? setCurrentPlayer(playerTwo)
        : setCurrentPlayer(playerOne);
      boardCopy[x][y] = currentPlayer.symbol;
    }
    setBoard(boardCopy);
    gameWon();
  }
```

The gameWon function runs at the end of every updateSquare that's activated on a click event. This function checks rows, columns and diagonals to see if they all contain the same symbol. Here is an example of the row check that is performed.

```JS
 for (let index = 0; index < board.length; index++) {
      const row = board[index];
      if (row.every((cell) => cell === playerOne.symbol)) {
        setWinner(playerOne);
        setRowWon({ p1: true, index: index });
        return;
      } else if (row.every((cell) => cell === playerTwo.symbol)) {
        setWinner(playerTwo);
        setRowWon({ p2: true, index: index });
        return;
      }
    }
```

This is the basic game structure. Update an index in the multi-dimensional array and constantly check if there is a win condition. The next step is to render the board and pass around data. In my board component I render out each individual square component from the board state using [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

```JS
 <div className="Squares">
          {board.map((row, x) =>
            row.map((col, y) => (
              <Square
                selected={board[x][y]}
                updateSquare={updateSquare}
                currentPlayer={currentPlayer}
                board={board}
                winner={winner}
              />
            ))
          )}
        </div>
```

### The Square Component

This is a relatively basic component that determines how each square is rendered and how the player interacts with the game. The first challenge was to update the square with the correct input based on player. The second challenge was then to display a outline of the current players shape in all empty squares when choosing they're next move. I decided to use the mouseEnter and mouseLeave to set a state and display the appropriate symbol for the current player.

```JS
 const [icon, setIcon] = useState("");

  function mouseEnter() {
    if (currentPlayer.symbol === "X") {
      setIcon(XiconOutline);
    } else {
      setIcon(OiconOutline);
    }
  }
  function mouseLeave() {
    setIcon("");
  }
```

The problem I immediately encountered was that playing the game on mobile was broken. The mobile browser wanted to render two empty images and then display two images when the square was clicked. This was solved with a ternary operator, albeit a rather excessive one, that checked if the user was on mobile and only displayed a selected state and omitted the mouse events.

```JS
return (
    <div
      className={winnerClass()}
      onClick={() => {
        updateSquare(value.x, value.y);
      }}
      onPointerEnter={mouseEnter}
      onPointerLeave={mouseLeave}
    >
      <div className="icon">
        {isMobile && selected === "X" ? (
          <img src={Xicon} alt="X icon"></img>
        ) : isMobile && selected === "O" ? (
          <img src={Oicon} alt="O icon"></img>
        ) : !isMobile && icon !== "" && selected === "" ? (
          <img src={icon} alt="outline selection icon"></img>
        ) : !isMobile && selected === "X" ? (
          <img src={Xicon} alt="X icon"></img>
        ) : !isMobile && selected === "O" ? (
          <img src={Oicon} alt="O icon"></img>
        ) : null }
      </div>
    </div>
  );
```

### The Computer Opponent

Setting the computer opponent was pretty straightforward process. I would like to revisit this project in a month or two after I learned more about useContext and useEffect to refactor the project and add some additional intelligence to how the computer picks a move. Currently the computer picks a random spot from the board state that is empty. It's really not that interesting.

```JS
  function getCPUTurn() {
    const emptyIndexs = [];
    board.forEach((row, arrayIndex) => {
      row.forEach((cell, index) => {
        if (cell === "") {
          emptyIndexs.push({ arrayIndex, index });
        }
      });
    });
    const randomIndex = Math.floor(Math.random() * emptyIndexs.length);
    return emptyIndexs[randomIndex];
  }

  function cpuPlay() {
    if (winner) return;
    if (currentPlayer.name === "CPU") {
      const CPUMove = getCPUTurn();
      const boardCopy = [...board];
      boardCopy[CPUMove.arrayIndex][CPUMove.index] = currentPlayer.symbol;
      setBoard(boardCopy);
      setCurrentPlayer(playerOne);
      gameWon();
    }
  }
```

### Highlighting Winning Squares

This is part of the game that really had me scratching my head. I'm even a bit surprised it really works. I'm sure I over complicated the problem and added a lot of unneeded code. I learned I do that from a lot of practicing on [Code Wars](https://www.codewars.com/users/TheShonuff). The solution usually ends being 2 or 3 lines of code to my 10 lines.

My approach was to set the class on the square div conditionally. Inside the square component I created a function that checks the row, column, and diagonals upon a win condition. If the a win condition is found it renders the symbol won style otherwise it leaves it as the generic square style.

Within the gameWon function I set the state within player object with how they won and passed the current index to the square component so I could compare that in my winnerClass. Here is an example of a row won condition:

```JS
  function winnerClass() {
    if (rowwon.p1) {
      if (rowwon.index === value.x) {
        return winner.symbol === "X" ? "Xwon" : "Owon";
      }
    } ...
```

The setting of the class on a column win was a little trickier to do. I passed the index to check for the y coordinate and looped the x coordinate checking for the appropriate values.

```JS
if (colwon.p1) {
      for (let i = 0; i < 3; i++) {
        if (board[i][colwon.col] !== "" && value.y === colwon.col) {
          return winner.symbol === "X" ? "Xwon" : "Owon";
        } else {
          return "Square";
        }
      }
    }
```

Setting the diagonal win class had my brain almost melt. I was trying to embed my for loops when I realized I only need one loop and have an additional counter that runs with the loop. Diagonal one sets a win if board[0][0], board[1][1] and board[2][2] is same symbol. I passed this to my winnerClass as diagonal type 1.

```JS
   if (diagwon.p1) {
      if (diagwon.type === 1) {
        if (board[0][0] !== "" && board[1][1] !== "" && board[2][2] !== "") {
          for (let i = 0; i < 3; i++) {
            if (value.x === i && value.y === i) {
              return winner.symbol === "X" ? "Xwon" : "Owon";
            }
          }
        } else {
          return "Square";
        }
      }
```

Diagonal type two is a little bit different. It sets a win condition if board[2][0], board[1][1] and board[0][2] are all the same symbol. I set a for loop for x that counted down and had another counter that incremented for y within the loop.

```JS
if (diagwon.type === 2) {
        if (board[2][0] !== "" && board[1][1] !== "" && board[0][2] !== "") {
          let y = 0;
          for (let x = 2; x >= 0; x--) {
            if (value.x === x && value.y === y) {
              return winner.symbol === "X" ? "Xwon" : "Owon";
            }
            y++;
          }
        }
      }
    }
```

## Reflection

This challenge was a very good learning experience about passing state and functions around within react. There is much that I can do to refactor this code using useContext and useEffect, which I plan on doing as soon as I grok these concepts better. I also learned a lot about correctly setting up with these projects with a better folder structure thanks to some very helpful input from [Yazdun](https://twitter.com/Yazdun). His modifications to the project showed me a better way to stay organized and enabled an efficient way to import and export components. I very grateful for the time he took to look at the project and offer some insight on how to be a better developer going forward.

I would also like to give [Anurag Ghara](https://twitter.com/messages/15484391-843092825491279872) a big thanks! He was able to show me the error I was making when setting up my modal view. The design wanted a slight transparency while the modal was active on top of the board. I thought I had everything setup correctly in my CSS but I forgot to set my wrapper to have an absolute position as well as the modal. I appreciate the time he took to look at the code.

Next up, trying out some React Remix!
