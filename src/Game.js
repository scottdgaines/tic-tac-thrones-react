class Game {
    constuctor(player1, player2) {
        this.player1 = new Player(player1),
        this.player2 = new Player(player2),
        this.currentTurn = this.player1,
        this.occupiedTiles = [null],
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

    logSelectedTile(selection) {
        this.currentTurn.tiles.push(selection);
        this.occupiedTiles.push(selection)
    }

    checkWinConditions() {
        const conditions = this.winningConditions;
        const currentTiles = this.currentTurn.tiles;

        conditions.forEach(condition => {
            let index1 = conditions[indexOf(condition)][0]
            let index2 = conditions[indexOf(condition)][1]
            let index3 = conditions[indexOf(condition)][2]

            if (currentTiles.includes(index1) && currentTiles.includes(index2) && currentTiles.includes(index3)) {
                this.currentTurn.increaseWins();
                declareWinner();
                updateWinDisplay();
            } else if (this.occupiedTiles.length === 10 && !(currentTiles.includes(index1) && currentTiles.includes(index2) && currentTiles.includes(index3))) {
                declareDraw()
            }
        })
    }

    resetWinCount() {
        this.player1.wins = 0;
        this.player2.wins = 0;
        updateWinDisplay();
    }
}