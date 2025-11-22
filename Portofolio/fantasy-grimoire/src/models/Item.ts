export class Item {
    name: string;
    type: string;
    effect: string;

    constructor(name: string, type: string, effect: string) {
        this.name = name;
        this.type = type;
        this.effect = effect;
    }

    use(): string {
        return `${this.name} is used. Effect: ${this.effect}`;
    }
}