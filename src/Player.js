class Player {
    constructor(player) {
        this.name = player.name;
        this.id = player.id;
        this.wins = player.wins || 0;
        this.logo = player.logo;
        this.tiles = []
    }

    increaseWins() {
        this.wins++
    }
}

export default Player