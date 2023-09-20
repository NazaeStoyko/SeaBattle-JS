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

const board = new Array(LENGTH).fill(new Array(LENGTH).fill(0))

const root = document.getElementById('root')
const table = document.createElement('table')

board.forEach((row, rowIndex) => {
  const tr = document.createElement('tr')
  table.appendChild(tr)
  row.forEach((column, columnIndex) => {
    const td = document.createElement('td')

    if (rowIndex === 3 && columnIndex === 2) {
      td.setAttribute('status', renderShip(1))

    } else {
      td.setAttribute('status', renderShip(0))

    }

    tr.appendChild(td)
  })
})

root.appendChild(table)





