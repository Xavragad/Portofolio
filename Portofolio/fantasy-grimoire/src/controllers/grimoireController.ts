export class GrimoireController {
    private spells: any[];
    private creatures: any[];

    constructor(spells: any[], creatures: any[]) {
        this.spells = spells;
        this.creatures = creatures;
    }

    getSpells() {
        return this.spells;
    }

    getCreatures() {
        return this.creatures;
    }
}