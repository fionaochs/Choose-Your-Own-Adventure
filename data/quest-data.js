const killerRabbit = {
    id: 'killerRabbit',
    title: 'The den of Caerbannog',
    map: {
        top: '42%',
        left: '40%',
    },
    image: 'killer-rabbit-den.jpeg',
    description: 'You come upon the rabbit of Caerbannog. It appears to be a cute fluffy white rabbit, what do you do?',
    choices: [{
        id: 'foolish',
        description: 'Grab the rabbit',
        result: `You fool! That's no ordinary rabbit! That's the most foul, cruel, and bad-tempered rodent you ever set eyes on!`,
        hp: -40,
        gold: 0
    }, {
        id: 'fight',
        description: 'Attack the bunny',
        image: 'killer-rabbit.jpeg',
        result: `You fool! That's no ordinary rabbit! That's the most foul, cruel, and bad-tempered rodent you ever set eyes on!`,
        hp: -40,
        gold: 0
    }, {
        id: 'run',
        description: 'Run away like brave Sir Robin',
        result: 'Very wise indeed, you escape with your life',
        hp: 0,
        gold: 0
    }]
};

const blackKnight = {
    id: 'blackKnight',
    title: 'The Forest',
    map: {
        top: '55.5%',
        left: '60%'
    },
    image: 'black-knight.jpeg',
    description: `You enter the forest and come upon a clearing. There standing before you is the Black Knight. 'None shall pass' he states. Do you listen? `,
    choices: [{
        id: 'teatime',
        description: 'Invite him to tea',
        result: 'The black knight was not in the mood for tea and challenged you to a dual which you lost',
        hp: -40,
        gold: 0
    }, {
        id: 'fight',
        description: 'Attack!',
        result: `You battle the knight, chopping him down limb by limb till he is left with no limbs. 'Just a flesh wound' he exclaims as you walk past, 'Come back here and take what's coming to you! I'll bite your legs off!!' screams the knight as you venture on `,
        hp: 0,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like brave Sir Robyn',
        result: 'Very wise indeed, you escape with your life',
        hp: 0,
        gold: 0
    }]
};
const theFrench = {
    id: 'theFrench',
    title: 'The Castle',
    map: {
        top: '69%',
        left: '62%'
    },
    image: 'castle.jpeg',
    description: `You come upon a castle, where you see a guard atop the turret. What do you do? `,
    choices: [{
        id: 'inquire',
        description: 'Try to inquire about the castles master and if he wishes to join your quest',
        result: `The guard responds 'Well, I'll ask him, but I don't think he'll be very keen. Uh, he's already got one, you see?'. You leave to continue your quest.
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'insult',
        description: 'Talk to the guard and pester them to let you in',
        result: `'I don't want to talk to you no more, you empty headed animal food trough wiper!...... I fart in your general direction! . Your mother was a hamster and your father smelt of elderberries!'. You leave insulted, and sadly words hurt and you lose 30 health points`,
        hp: -30,
        gold: 0
    }, {
        id: 'leave',
        description: 'The castle seems empty and you leave to continue your quest',
        result: 'Very wise indeed, they were not worth your time, and you steal some of their gold on the way out',
        hp: 0,
        gold: 50
    }]
};
const knightsNi = {
    id: 'knightsNi',
    title: 'The Shrubbery',
    map: {
        top: '69%',
        left: '23%'
    },
    image: 'knights.jpeg',
    description: `You enter the forest only to ambushed by the Knights who say Ni! They are devious indeed.The Knights Who Say 'Ni' demand a sacrifice. What shall you do? `,
    choices: [{
        id: 'shrubbery',
        description: 'Appease the knights with a Shrubbery',
        result: `You wander the village and happen upon, Roger the Shrubber, who arranges, designs, and sells shrubberies. You appease the Knights and go on your way`,
        hp: 0,
        gold: 20
    }, {
        id: 'herring',
        description: 'Take the Knights test',
        result: `They proclaim, 'You must cut down the mightiest tree in the forest... with... a herring!' This is an absurd task and you escape the forest and the Knights. `,
        hp: 0,
        gold: 0
    }, {
        id: 'fight',
        description: 'Discover the one weakness of the Knights',
        result: `You realize that the Knights cannot hear the word 'it'. Suffice to say is one of the words the Knights of Ni cannot hear. You escape and recieve gold`,
        hp: 0,
        gold: 50
    }]
};
const quests = [
    blackKnight,
    knightsNi,
    theFrench,
    killerRabbit
];
export default quests;