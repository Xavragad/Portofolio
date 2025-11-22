# Fantasy Grimoire

## Overview
The Fantasy Grimoire is a magical application designed to manage and explore spells, creatures, and items in a fantasy setting. This project provides a structured way to interact with various magical elements through a user-friendly interface.

## Features
- **Spells**: Discover and cast a variety of spells with unique properties.
- **Creatures**: Encounter and interact with different creatures, each with their own abilities.
- **Items**: Utilize magical items that can enhance your abilities or provide special effects.

## Project Structure
```
fantasy-grimoire
├── src
│   ├── index.ts                # Entry point of the application
│   ├── models                   # Contains model definitions
│   │   ├── Spell.ts            # Spell model
│   │   ├── Creature.ts         # Creature model
│   │   └── Item.ts             # Item model
│   ├── controllers              # Contains controllers for handling requests
│   │   └── grimoireController.ts # Controller for managing spells and creatures
│   ├── services                 # Contains business logic
│   │   └── searchService.ts     # Service for searching spells and creatures
│   └── types                    # Type definitions
│       └── index.ts            # TypeScript interfaces
├── data
│   ├── spells.json             # JSON data for spells
│   └── creatures.json          # JSON data for creatures
├── scripts
│   └── import.ts               # Script for importing data
├── package.json                 # NPM package configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                   # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd fantasy-grimoire
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.