var playerShips = [], computerShips = [];

const LENGTH = 10
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dictionary = {
  0: 'empty',
  1: 'ship',
  2: 'border',
  3: 'hit'
}


const renderShip = (value) => dictionary[value]
const renderDeck = (value) => deck[value]

// Створення двовимірного масиву для представлення поля
const board = [];
for (let i = 0; i < LENGTH; i++) {
  const row = new Array(LENGTH).fill(0);
  board.push(row);
}




function placeShip(board, length) {
  const x = Math.floor(Math.random() * LENGTH);
  const y = Math.floor(Math.random() * LENGTH);
  const isVertical = Math.random() < 0.5;

  if (isVertical) {
    for (let i = 0; i < length; i++) {

      if (y + i >= LENGTH || board[x][y + i] !== 0) {
        // Корабель перекривається або виходить за межі поля
        return placeShip(board, length);
      }

    }
    for (let i = 0; i < length; i++) {
      board[x][y + i] = 1; // Позначаємо корабель на полі
      console.log([board])
    }
  }
  else {
    for (let i = 0; i < length; i++) {
      if (x + i >= LENGTH || board[x + i][y] !== 0) {
        // Корабель перекривається або виходить за межі поля
        return placeShip(board, length);
      }

    }
    for (let i = 0; i < length; i++) {
      board[x + i][y] = 1; // Позначаємо корабель на полі

    }
  }
}



placeShip(board, 1);
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
    } else {
      td.setAttribute('status', renderShip(0))
    }
    tr.appendChild(td)
  })
})

root.appendChild(table)

