import Player from './Player.js'
class Game {
    constructor(player1, player2) {
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
        this.currentTurn = this.player1;
        this.occupiedTiles = [null];
        this.winningConditions = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['3', '6', '9'],
            ['1', '5', '9'],
            ['3', '5', '7']
        ]
    }

    togglePlayer = () => {
    if (this.currentTurn.id === this.player1.id) {
      this.currentTurn = this.player2
    } else if (this.currentTurn.id === this.player2.id) {
      this.currentTurn = this.player1
    }
    }

    verifyTile = (selection) => {
        if (!this.occupiedTiles.includes(selection)) {
            this.occupiedTiles.push(selection)
            this.currentTurn.tiles.push(selection)
            return true
        }
    }

    checkWinConditions() {
        const conditions = this.winningConditions;
        const currentTiles = this.currentTurn.tiles;

        conditions.forEach(condition => {
            let index = 0
            let index1 = conditions[index][0]
            let index2 = conditions[index][1]
            let index3 = conditions[index][2]

            if (currentTiles.includes(index1) && currentTiles.includes(index2) && currentTiles.includes(index3)) {
                this.currentTurn.increaseWins();
                this.declareWinner();
            } else if (this.occupiedTiles.length === 10 && !(currentTiles.includes(index1) && currentTiles.includes(index2) && currentTiles.includes(index3))) {
                this.declareDraw()
            }

            index++
        })
    }

    resetWinCount() {
        this.player1.wins = 0;
        this.player2.wins = 0;
    }

    declareDraw = () => {

    }
  
    declareWinner = () => {
  
    }
}

export default Game