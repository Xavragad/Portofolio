export function search(query: string) {
    const spells = require('../../data/spells.json');
    const creatures = require('../../data/creatures.json');

    const spellResults = spells.filter((spell: { name: string; description: string; }) =>
        spell.name.toLowerCase().includes(query.toLowerCase()) ||
        spell.description.toLowerCase().includes(query.toLowerCase())
    );

    const creatureResults = creatures.filter((creature: { name: string; type: string; }) =>
        creature.name.toLowerCase().includes(query.toLowerCase()) ||
        creature.type.toLowerCase().includes(query.toLowerCase())
    );

    return {
        spells: spellResults,
        creatures: creatureResults
    };
}