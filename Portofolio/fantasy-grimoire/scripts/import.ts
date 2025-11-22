import { readFileSync } from 'fs';
import { join } from 'path';
import { Spell } from '../src/models/Spell';
import { Creature } from '../src/models/Creature';

const spellsData = JSON.parse(readFileSync(join(__dirname, '../data/spells.json'), 'utf-8'));
const creaturesData = JSON.parse(readFileSync(join(__dirname, '../data/creatures.json'), 'utf-8'));

const spells: Spell[] = spellsData.map((spell: any) => new Spell(spell.name, spell.description, spell.power));
const creatures: Creature[] = creaturesData.map((creature: any) => new Creature(creature.name, creature.type, creature.health));

// Here you can implement logic to save spells and creatures to your application's state or database
console.log('Imported Spells:', spells);
console.log('Imported Creatures:', creatures);