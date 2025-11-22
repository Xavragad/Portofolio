export class Creature {
    name: string;
    type: string;
    health: number;

    constructor(name: string, type: string, health: number) {
        this.name = name;
        this.type = type;
        this.health = health;
    }

    attack(target: Creature): void {
        console.log(`${this.name} attacks ${target.name}!`);
        // Implement attack logic here
    }

    defend(): void {
        console.log(`${this.name} defends!`);
        // Implement defend logic here
    }
}