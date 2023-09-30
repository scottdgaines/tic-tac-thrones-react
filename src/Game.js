import Player from './Player.js'
class Game {
    constructor(player1, player2) {
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
        this.currentTurn = this.player1;
        this.tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

    resetTiles = () => {
        this.occupiedTiles = [null]
        this.player1.tiles = []
        this.player2.tiles = []
        this.player1.wins = 0
        this.player2.wins = 0
    }

    togglePlayer = () => {
        if (this.currentTurn.id === this.player1.id) {
        this.currentTurn = this.player2
        } else if (this.currentTurn.id === this.player2.id) {
        this.currentTurn = this.player1
        }
    }

    verifyTile = (selection) => {
        console.log(this.occupiedTiles)
        if (!this.occupiedTiles.includes(selection)) {
            this.occupiedTiles.push(selection)
            this.currentTurn.tiles.push(selection)
            console.log(this.occupiedTiles)
            return true
        }
    }

    checkWinConditions = () => {
        for (var i = 0; i< this.winningConditions.length; i++) {
            let index1 = this.winningConditions[i][0]
            let index2 = this.winningConditions[i][1]
            let index3 = this.winningConditions[i][2]

            if (this.currentTurn.tiles.includes(index1) && this.currentTurn.tiles.includes(index2)
            && this.currentTurn.tiles.includes(index3)) {
                this.currentTurn.wins++;
                return true
          } else if (this.occupiedTiles.length === 10 &&
              !(this.currentTurn.tiles.includes(index1) && this.currentTurn.tiles.includes(index2)
              && this.currentTurn.tiles.includes(index3))) {
            //   declareDraw()
            console.log('draw')
          }
        }
    }

    resetWinCount() {
        this.player1.wins = 0;
        this.player2.wins = 0;
    }

}

export default Game