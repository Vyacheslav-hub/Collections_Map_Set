export class Team {
    constructor() {
        this.members = new Set();
    };

    add (playerCharacter) {
        if (this.members.has(playerCharacter)) throw new Error('Игрок уже был добавлен');
        this.members.add(playerCharacter);
    };

    addAll (...playersCharacter) {
        playersCharacter.forEach(player => {
            this.members.add(player);
        });
    };

    toArray () {
         return Array.from(this.members);
    };
}
