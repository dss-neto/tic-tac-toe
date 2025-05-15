# tic-tac-toe

old ver:
const Gameboard = {
board: [
[null, null, null],
[null, null, null],
[null, null, null],
],
markBoard: (row, column) => {
if (Gameboard.board[row][column] === null) {
GameRules.selectPlayerTurn(
PlayerObject.PlayerOne,
PlayerObject.PlayerTwo
);

      const mark = GameRules.nextMark;
      Gameboard.board[row][column] = mark;

      console.log(Gameboard.board);

      GameRules.getWinner(Gameboard.board);
    } else {
      console.log("Try a different spot");
    }

},
clearBoard: () => {
Gameboard.board = [
[null, null, null],
[null, null, null],
[null, null, null],
];
},
};

const PlayerObject = {
PlayerOne: {
name: null,
mark: "X",
score: 0,
},
PlayerTwo: {
name: null,
mark: "O",
score: 0,
},
};

const GameRules = {
nextMark: null,

turnCounter: 1,
selectPlayerTurn: (PlayerOne, PlayerTwo) => {
if (GameRules.turnCounter % 2 != 0) {
GameRules.nextMark = PlayerOne.mark;
console.log(`Next turn: ${PlayerTwo.name}'s.`);
// Player one round
} else {
// Player two round
GameRules.nextMark = PlayerTwo.mark;
console.log(`Next turn: ${PlayerOne.name}'s.`);
}
GameRules.turnCounter++;
},

selectPlayerNames: () => {
const PlayerOneName = prompt("What is the name of the player one?");
const PlayerTwoName = prompt("What is the name of the player two?");
PlayerObject.PlayerOne.name = PlayerOneName;
PlayerObject.PlayerTwo.name = PlayerTwoName;
},

getWinner: (board) => {
const GameRulesArray = [
GameRules.threeInARow(board),
GameRules.threeInAColumn(board),
GameRules.threeInDiagonal(board),
];
for (i of GameRulesArray) {
if (i.victory) {
Gameboard.clearBoard();
GameRules.turnCounter = 1;
if (i.winnerMarker === "X") {
console.log(`The winner is ${PlayerObject.PlayerOne.name}!`);
PlayerObject.PlayerOne.score++;
} else {
console.log(`The winner is ${PlayerObject.PlayerOne.name}!`);
PlayerObject.PlayerTwo.score++;
}

        console.log(
          `${PlayerObject.PlayerOne.name}'s score: ${PlayerObject.PlayerOne.score}`
        );
        console.log(
          `${PlayerObject.PlayerTwo.name}'s score: ${PlayerObject.PlayerTwo.score}`
        );
        return i.winnerMarker;
      }
    }

},

threeInARow: (board) => {
for (row of board) {
if (row[0] === row[1] && row[0] === row[2] && row[0] != null) {
const winnerMarker = row[0];
const victory = true;
return { victory, winnerMarker };
}
}
const victory = false;
return { victory };
},

threeInAColumn: (board) => {
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
},

threeInDiagonal: (board) => {
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
},
};

GameRules.selectPlayerNames();

function a() {
Gameboard.markBoard(0, 0);
}
function b() {
Gameboard.markBoard(0, 1);
}
function c() {
Gameboard.markBoard(0, 2);
}
function d() {
Gameboard.markBoard(1, 0);
}
function e() {
Gameboard.markBoard(1, 1);
}
function f() {
Gameboard.markBoard(1, 2);
}
function g() {
Gameboard.markBoard(2, 0);
}
function h() {
Gameboard.markBoard(2, 1);
}
function i() {
Gameboard.markBoard(2, 2);
}
