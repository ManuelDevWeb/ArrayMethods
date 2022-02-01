const characters = [{
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map(character => (character.name));
// console.log(allNames);

//2. Get array of all heights
const allHeights = characters.map(character => (character.height));
// console.log(allHeights);

//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map(character => ({
    name: character.name,
    height: character.height
}));
// console.log(nameAndHeight);

//4. Get array of all first names
const allFirstNames = characters.map(character => (
    character.name.split(' ')[0]
));
// console.log(allFirstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => (
    acc + cur.mass
), 0);
// console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => (
    acc + cur.height
), 0);
// console.log(totalHeight);

//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;

    if (acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {});
// console.log(charactersByEyeColor);

//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, cur) => (
    acc + cur.name.length
), 0);
// console.log(totalNameCharacters);

//***FILTER***
//1. Get characters with mass greater than 100
const greater100Characters = characters.filter(character => (character.mass > 100));
// console.log(greater100Characters);

//2. Get characters with height less than 200
const shorterCharacters = characters.filter(character => (character.height < 200));
// console.log(shorterCharacters);

//3. Get all male characters
const maleCharacters = characters.filter(character => (character.gender === 'male'));
// console.log(maleCharacters);

//4. Get all female characters
const femaleCharacters = characters.filter(character => (character.gender === 'female'));
// console.log(femaleCharacters);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => (
    a.mass - b.mass
));
// console.log(byMass);

//2. Sort by height
const byHeight = characters.sort((a, b) => (
    a.height - b.height
));
// console.log(byHeight);

//3. Sort by name
const byName = characters.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else {
        return 1;
    }
});
// console.log(byName);

//4. Sort by gender
const byGender = characters.sort((a, b) => {
    if (a.gender === 'female') {
        return -1;
    } else {
        return 1
    }
});
// console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
const oneMaleCharacter = characters.some(character => (
    character.gender === 'male'
));
// console.log(oneMaleCharacter);

//2. Is there at least one character with blue eyes?
const oneCharacterBlueEyes = characters.some(character => (
    character.eye_color === 'blue'
));
// console.log(oneCharacterBlueEyes);

//3. Is there at least one character taller than 210?
const oneCharacterTallerThan210 = characters.some(character => (
    character.height > 210
));
// console.log(oneCharacterTallerThan210);

//4. Is there at least one character that has mass less than 50?
const oneCharacterMassLessThan50 = characters.some(character => (
    character.mass < 50
));
// console.log(oneCharacterMassLessThan50);