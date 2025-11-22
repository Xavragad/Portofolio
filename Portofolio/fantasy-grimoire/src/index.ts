import { GrimoireController } from './controllers/grimoireController';

const grimoireController = new GrimoireController();

function init() {
    // Initialize the application
    console.log("Initializing Fantasy Grimoire...");
    
    // Example usage of the controller
    const spells = grimoireController.getSpells();
    const creatures = grimoireController.getCreatures();

    console.log("Loaded Spells:", spells);
    console.log("Loaded Creatures:", creatures);
}

init();