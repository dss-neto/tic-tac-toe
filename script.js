const gridContainer = document.querySelector("#outer-container");
const domXScoreCounter = document.querySelector("#x-score");
const domCircleScoreCounter = document.querySelector("#circle-score");
const namesDialog = document.querySelector("#names-dialog");
const playerNameForm = document.querySelector("#player-name-form");
const domXPlayerName = document.querySelector("#x-player-name");
const domCirclePlayerName = document.querySelector("#circle-player-name");
const playAnonymouslyButton = document.querySelector("#play-anonymously");
const gameResultDialog = document.querySelector("#result-dialog");
const nextRoundButton = document.querySelector("#next-round");
const winnerIconList = document.getElementsByClassName("winner-icon");
const winnerResultText = document.querySelector("#winner-result-text");

const TicTacToeLogic = (function () {
  const DomManipulation = (function () {
    const writeSvg = (target, mark) => {
      if (mark === "X") {
        target.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775"><path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path></svg>';
      } else {
        target.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>';
      }
    };
    const changeClass = (target, mark) => {
      if (mark === "X") {
        target.setAttribute("class", "mark-spots marked x");
      } else {
        target.setAttribute("class", "mark-spots marked circle");
      }
    };

    const writeNames = (xName, circleName) => {
      domXPlayerName.textContent = xName;
      domCirclePlayerName.textContent = circleName;
    };

    const writeWinner = (winner) => {
      if (winner === "X") {
        for (element of winnerIconList) {
          element.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775" height="16px"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path></svg>';
        }
        winnerResultText.textContent = `The winner is... ${TicTacToeLogic.PlayerObject.PlayerX.name}!`;
      } else if (winner === "O") {
        for (element of winnerIconList) {
          element.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px"> <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>';
        }
        winnerResultText.textContent = `The winner is... ${TicTacToeLogic.PlayerObject.PlayerCircle.name}!`;
      } else {
        for (element of winnerIconList) {
          element.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px"> <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>';
        }
        winnerResultText.textContent = `Well, that's a draw.`;
      }
    };
    return { changeClass, writeSvg, writeNames, writeWinner };
  })();

  const Gameboard = (function () {
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const clearBoard = () => {
      Gameboard.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
      for (i of gridContainer.children) {
        i.innerHTML = "";
        i.setAttribute("class", "mark-spots unmarked");
      }
    };
    return { board, clearBoard };
  })();

  const PlayerObject = (function () {
    const PlayerX = {
      name: "X",
      score: 0,
    };
    const PlayerCircle = {
      name: "Circle",
      score: 0,
    };
    return { PlayerX, PlayerCircle };
  })();

  const GameRules = (function () {
    let turnCounter = 1;

    const markBoard = (row, column, target) => {
      const isPlayerXTurn = () => turnCounter % 2 != 0;
      const board = Gameboard.board;
      let mark;
      if (board[row][column] === null) {
        if (isPlayerXTurn()) {
          mark = "X";
          board[row][column] = mark;

          DomManipulation.writeSvg(target, mark);
          DomManipulation.changeClass(target, mark);
          console.log(`Next turn: ${PlayerObject.PlayerCircle.name}'s.`);
          // Player one round
        } else {
          mark = "O";
          board[row][column] = mark;
          DomManipulation.writeSvg(target, mark);
          DomManipulation.changeClass(target, mark);
          console.log(`Next turn: ${PlayerObject.PlayerX.name}'s.`);
        }
        turnCounter++;

        console.log(board);

        GameRules.getWinner(board);
      } else {
        console.log("Try a different spot");
      }
      return mark;
    };

    const selectPlayerNames = () => {
      const PlayerXName = prompt("What is the name of the player one?");
      const PlayerCircleName = prompt("What is the name of the player two?");
      PlayerObject.PlayerX.name = PlayerXName;
      PlayerObject.PlayerCircle.name = PlayerCircleName;
    };

    const getWinner = (board) => {
      const threeInARow = (board) => {
        for (row of board) {
          if (row[0] === row[1] && row[0] === row[2] && row[0] != null) {
            const winnerMarker = row[0];
            const victory = true;
            return { victory, winnerMarker };
          }
        }
        const victory = false;
        return { victory };
      };

      const threeInAColumn = (board) => {
        for (let i = 0; i < 3; i++) {
          if (
            board[0][i] === board[1][i] &&
            board[0][i] === board[2][i] &&
            board[0][i] != null
          ) {
            const winnerMarker = board[0][i];
            const victory = true;
            return { victory, winnerMarker };
          }
        }
        const victory = false;
        return { victory };
      };

      const threeInDiagonal = (board) => {
        if (
          ((board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
            (board[0][2] === board[1][1] && board[0][2] === board[2][0])) &&
          board[1][1] != null
        ) {
          const winnerMarker = board[1][1];
          const victory = true;
          return { victory, winnerMarker };
        }
        const victory = false;
        return { victory };
      };

      const winConditionsArray = [
        threeInARow(board),
        threeInAColumn(board),
        threeInDiagonal(board),
      ];
      for (i of winConditionsArray) {
        if (i.victory) {
          if (i.winnerMarker === "X") {
            console.log(`The winner is ${PlayerObject.PlayerX.name}!`);
            domXScoreCounter.innerHTML = ++PlayerObject.PlayerX.score;
          } else {
            console.log(`The winner is ${PlayerObject.PlayerCircle.name}!`);
            domCircleScoreCounter.innerHTML = ++PlayerObject.PlayerCircle.score;
          }

          console.log(
            `${PlayerObject.PlayerX.name}'s score: ${PlayerObject.PlayerX.score}`
          );
          console.log(
            `${PlayerObject.PlayerCircle.name}'s score: ${PlayerObject.PlayerCircle.score}`
          );
          DomManipulation.writeWinner(i.winnerMarker);
          gameResultDialog.showModal();

          nextRoundButton.addEventListener("click", (e) => {
            gameResultDialog.close();
            Gameboard.clearBoard();
            turnCounter = 1;
          });
        } else {
          const isDraw = (board) => {
            if (
              !(
                board[0].includes(null) ||
                board[1].includes(null) ||
                board[2].includes(null)
              )
            ) {
              return true;
            }
          };
          if (isDraw(board)) {
            DomManipulation.writeWinner();
            console.log("It's a draw!");
            gameResultDialog.showModal();
            nextRoundButton.addEventListener("click", (e) => {
              gameResultDialog.close();
              Gameboard.clearBoard();
              turnCounter = 1;
            });
          }
        }
      }
    };

    return { markBoard, selectPlayerNames, getWinner };
  })();
  return { GameRules, PlayerObject, DomManipulation };
})();

window.addEventListener("load", (e) => {
  namesDialog.showModal();
});

playAnonymouslyButton.addEventListener("click", (e) => {
  namesDialog.close();
});

gridContainer.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target.id);
  if (target.classList.contains("unmarked")) {
    if (target.id === "a") {
      TicTacToeLogic.GameRules.markBoard(0, 0, target);
    }
    if (target.id === "b") {
      TicTacToeLogic.GameRules.markBoard(0, 1, target);
    }
    if (target.id === "c") {
      TicTacToeLogic.GameRules.markBoard(0, 2, target);
    }
    if (target.id === "d") {
      TicTacToeLogic.GameRules.markBoard(1, 0, target);
    }
    if (target.id === "e") {
      TicTacToeLogic.GameRules.markBoard(1, 1, target);
    }
    if (target.id === "f") {
      TicTacToeLogic.GameRules.markBoard(1, 2, target);
    }
    if (target.id === "g") {
      TicTacToeLogic.GameRules.markBoard(2, 0, target);
    }
    if (target.id === "h") {
      TicTacToeLogic.GameRules.markBoard(2, 1, target);
    }
    if (target.id === "i") {
      TicTacToeLogic.GameRules.markBoard(2, 2, target);
    }
  }
});

playerNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  namesDialog.close();
  const formData = new FormData(playerNameForm);
  const PlayerNameObject = Object.fromEntries(formData);
  const xName = PlayerNameObject.PlayerXName;
  const circleName = PlayerNameObject.PlayerCircleName;
  TicTacToeLogic.PlayerObject.PlayerX.name = xName;
  TicTacToeLogic.PlayerObject.PlayerCircle.name = circleName;
  console.log(TicTacToeLogic.PlayerObject);

  TicTacToeLogic.DomManipulation.writeNames(xName, circleName);
});

// document.addEventListener("keypress", () => {
//   namesDialog.close();
// });

// function writeSvg(target, mark) {
//   if (mark === "X") {
//     target.innerHTML =
//       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775"><path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path></svg>';
//   } else {
//     target.innerHTML =
//       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>';
//   }
// }

// function changeClass(target, mark) {
//   if (mark === "X") {
//     target.setAttribute("class", "mark-spots marked x");
//   } else {
//     target.setAttribute("class", "mark-spots marked circle");
//   }
// }

// TicTacToeLogic.GameRules.selectPlayerNames();
