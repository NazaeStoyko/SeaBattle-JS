var playerShips = [], computerShips = [];

const LENGTH = 10;
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dictionary = {
  0: 'empty',
  1: 'ship',
  2: 'border',
  3: 'hit'
};

const renderShip = (value) => dictionary[value];
const renderDeck = (value) => deck[value];

// Створення двовимірного масиву для представлення поля
const board = [];
for (let i = 0; i < LENGTH; i++) {
  const row = new Array(LENGTH).fill(0);
  board.push(row);
}

function placeShip(board, length) {
  // const x = Math.floor(Math.random() * LENGTH);
  // const y = Math.floor(Math.random() * LENGTH);
  const isVertical = Math.random() < 0.5;
  const x = 3;
 const y = 4;
  if (isVertical) {
    for (let i = 0; i < length; i++) {
      if (y + i >= LENGTH || board[x][y + i] !== 0 || (x > 0 && board[x - 1][y + i] !== 0) || (x < LENGTH - 1 && board[x + 1][y + i] !== 0)) {
        // Корабель перекривається або виходить за межі поля
        return placeShip(board, length);
      }
    }
    for (let i = 0; i < length; i++) {
      board[x][y + i] = 1; // Позначаємо корабель на полі
      console.log([board])
    }
    // Позначаємо числа 2 навколо корабля
    if (x > 0) {
      for (let i = 0; i < length; i++) {
        if (y + i > 0) { board[x - 1][y + i - 1] = 2; } // Ліва верхня межа корабля
        if (y + i < LENGTH - 1) {
          board[x - 1][y + i + 1] = 2;
        } // Ліва нижня межа корабля
      }
      board[x - 1][y] = 2; // Ліва межа корабля
    }
    if (x < LENGTH - 1) {
      for (let i = 0; i < length; i++) {
        if (y + i > 0){
         board[x + 1][y + i - 1] = 2;
        } // Права верхня межа корабля

        if (y + i < LENGTH - 1) {
          board[x + 1][y + i + 1] = 2;
        } // Права нижня межа корабля
      }
      board[x + 1][y] = 2; // Права межа корабля
    }
  } else {
    for (let i = 0; i < length; i++) {
      if (x + i >= LENGTH || board[x + i][y] !== 0 || (y > 0 && board[x + i][y - 1] !== 0) || (y < LENGTH - 1 && board[x + i][y + 1] !== 0)) {
        // Корабель перекривається або виходить за межі поля
        return placeShip(board, length);
      }
    }
    for (let i = 0; i < length; i++) {
      board[x + i][y] = 1; // Позначаємо корабель на полі
      console.log([board])
    }
 
    if (y > 0) {
      for (let i = 0; i < length; i++) {
        if (x + i > 0) { board[x + i - 1][y - 1] = 2; } // Верхня ліва межа корабля
        if (x + i < LENGTH - 1){
          board[x + i + 1][y - 1] = 2;
        } // Верхня права межа корабля
      }
      board[x][y - 1] = 2; // Верхня межа корабля
    }
    if (y < LENGTH - 1) {
      for (let i = 0; i < length; i++) {
        if (x + i > 0) {
          board[x + i - 1][y + 1] = 2
        }; // Нижня ліва межа корабля

        if (x + i < LENGTH - 1) {
          board[x + i + 1][y + 1] = 2;
        } // Нижня права межа корабля
      }
      board[x][y + length] = 2; // Нижня межа корабля
    }
  }
}


placeShip(board, 1);


const root = document.getElementById('root')
const table = document.createElement('table')

board.forEach((row, rowIndex) => {
  const tr = document.createElement('tr')
  table.appendChild(tr)

  row.forEach((column, columnIndex) => {

    const td = document.createElement('td')

    if (board[rowIndex][columnIndex] === 1) {
      td.setAttribute('status', renderShip(1))
    } else if (board[rowIndex][columnIndex] === 2) {
      td.setAttribute('status', renderShip(2))
    } else {
      td.setAttribute('status', renderShip(0))
    }
    tr.appendChild(td)
  })
})

root.appendChild(table)
