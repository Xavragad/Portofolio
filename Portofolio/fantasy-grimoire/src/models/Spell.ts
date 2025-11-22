class Spell {
    name: string;
    description: string;
    power: number;

    constructor(name: string, description: string, power: number) {
        this.name = name;
        this.description = description;
        this.power = power;
    }

    cast(): string {
        return `${this.name} has been cast! ${this.description} (Power: ${this.power})`;
    }
}

export default Spell;