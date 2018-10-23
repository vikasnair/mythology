const size = 650;
const characterSize = 48;
const objectSize = 32;
const viewSize = 250;

const hephaestus = {
    sprite: undefined,
    name: 'Hephaestus',
    inventory: [],
    quests: {
        respect: false,
        love: false,
        marriage: false,
    }

};

const hera = {
    sprite: undefined,
    name: 'Hera',
    dialogue:"Sigh...I knew this day would come. My son Hephaestus has returned to Mount Olympus. I feel so violated saying those words. My son...As if a hideous parasite like you has any business leeching off the name of the radiant goddess Hera. It infuriates me so. On top of that you've trapped me on this throne as revenge. Just the nerve of it all....how petty can you be? we chucked you into the sea twenty years ago Hephaestus! Move on! All of us here have. And there was no griveing process whatsoever. We got over it like, instantaneously. In fact we celebrated with ice cream. I'm just digging myself a deeper hole aren't I? Ok I'll make you a deal. Three wishes. I'll grant you the three things you desire most in this world. All you have to do is name it, and consider it done. In return I request my freedom. Do we have a deal? "
};

const zeus = {
    sprite: undefined,
    name: 'Zeus',
    dialogue: "Geh? Do I know you Mr. ugly fellow? I do not believe we've met. My son? Dude, I'm basically a walking baby-making factory. You're going to have to be more specific. You're mother is Goddess Hera you say? Wait a minute...DUDE NO WAY! HEPHAESTUS! You're the child we threw into the ocean! I knew I recognized your unique brand of offensivley hideous! Dude the way I threw you off Mount Olympus is one of my crowning achievements. I bet Hades 50 bucks that I could skip you across the water like a stone! He totally didn't think I could pull it off. But I wound up chucking you 100,000 yards across the sea! It was so rad you should have seen it! Zues has still got it baby!"
};

const aphrodite = {
    sprite: undefined,
    name: 'Aphrodite',
    dialogue: "Aw SICK. What are you??!! Some kinda...homely, mutant, monstrosity slightly resembling that of a human man is standing in front of me! I can hardly believe my...oh wait. It's Hephaestus. Were you always this hideous or did it happen after you got hucked off Mount Olympus like a rag doll? Look greasy, if you came trying to spitg game you're wasting your time and mine. Do you know who I am? Aphrodite? Goddess of love and beauty? I'm kind of a big deal. I'm out of your league. In fact, we aren't even playing the same game! Now get away from me and go take a shower or something..your musk is over powering my sweet feminine scent! Pretty things aren't suppose to smell. But you wouldn't know anything about that now would you?"
};

const rando = {
    sprite: undefined,
    name: 'Rando',
    dialogue: "Hm? Oh dont mind me. I'm just an ordinary man. I'm not all that important to the story or anything. I don't really have anything interesting to say.... Thank you for taking the time to talk to me though!"
}
const respect = {
    sprite: undefined,
    name: 'respect',
    x: size / 10,
    y: size / 10
}

const love = {
    sprite: undefined,
    name: 'love',
    x: 200,
    y: 350
}

const marriage = {
    sprite: undefined,
    name: 'marriage',
    x: 50,
    y: 200
}

const npcs = [hera, zeus, aphrodite];
let objects = [respect, love, marriage];

let song, bg;

function preload() {
    song = loadSound('assets/sounds/revenge.mp3');
    bg = loadImage('assets/spritesnframes/bg.png');
};

function setup() {
    createCanvas(size, size);
    scale(60000.5);
    initializeSprites();
    song.play();
};


function draw() {
    background(bg);
    drawSprites();
    drawviewPoint();
    detectCollisionWithNPCs();
    detectCollisionWithObjects();
    handleMovement();
};

function drawTextBubble(dialogue) {
    textAlign(CENTER);
    // text(`Hi, I'm ${this.name}`, width / 2, height / 2);
    // text(this.dialogue, (width / 2) + 10, (height / 2) + 15);
    stroke("white");
    strokeWeight(5);
    fill("black");
    rect(width / 2, height / 2, width - 100, height - 100);
    fill("white");
    noStroke();
    noFill();
    textSize(20);
    fill("white");
    textAlign(CENTER);
    text(dialogue, width / 2, (height / 2) + 50, width - 150, height - 150);
};

function didCollideWithNPC() {
    drawTextBubble(this.dialogue);
}

function detectCollisionWithNPCs() {
    for (const npc of npcs) {
        hephaestus.sprite.collide(npc.sprite, didCollideWithNPC.bind(npc));
    }
};

function didCollideWithObject() {
    if (this.name === 'respect') {
        hephaestus.quests.respect = true;
        hera.dialogue = 'So you want everyone to respect you and stop calling you names? Aw man! But your pathetically worthless existence makes for my best material! Fiiiiiinnnnneeee..looks my stand up career is over...'
    }

    if (this.name === 'power') {
        hephaestus.quests.power = true;
        hera.dialogue = 'So its power you seek now eh? I think that can be arranged. I hereby dub you blacksmith of the gods. You are now responsible for crafting all of our weapons, buildings, and artifacts. You will be famous! Well youll still be hideous, but famous nonetheless. Afterall if you can build elaborate death trap throne prisons, Im sure you can manage a few swords.';
    }

    if (this.name === 'marriage') {
        hephaestus.quests.marriage = true;
            hera.dialogue = 'You want to marry Aphrodite? Ehhh I dont know about that one. Seems kinda sleazy... if anything it should be Aphrodites choice who she loves! its not really my place to sell her like a trophy for my own benefit..HA! Did I fool you? Look at me talking as if I have silly ol "empathy" and "morals". What do I care about that blonde bimbo Aphrodite? I threw you off a mountain into the ocean when you were an infant for christ sake! You want to use your own mother as leverage as a part of your scheme to forcibly marry someone who doesnt want you in order to quench your pervy unrequited love? Youre a chip off the old block son! Consider it done! I can already hear the wedding bells a-ringin...'
        
        if (this.name === 'marriage') {
            hephaestus.quests.marriage = true;
            aphrodite.dialogue ="Hephaestus! Just the handsome devil I wanted to see! I heard you were appointed blacksmith of the Gods! And you want to be married. Normally I'd puke my guts out at the idea of touching you, but this newfound position of power you've gained is insanely attractive to say the least. Your bushy eyebrows don't remind me of disease riddled sewer rats as much as they used to...Hephaestus my love.....as long as I can manipulate your existence to benefit my own...I will cherish you."}

        if (this.name === 'marriage') {
            hephaestus.quests.marriage = true;
            zeus.dialogue = "Yo Hephaestus! I heard about how you manipulated your mother in order to achieve you selfish, hate-filled desires! That's dope! I always hated that woman. She's such a nag! So I sleep with other women every other night! What's the big dealio huh!? She acts like these dumb wedding rings are like a symbol of our love and loyalty to one another or something ridiculous like that...I wish I was smart and talented enough to have come up with a revenge scheme like that."
        }

        if (this.name === 'marriage') {
            hephaestus.quests.marriage = true;
            rando.dialogue ="I don't think you're ugly. You're a very nice man."
        }

        if (this.name === 'marriage') {
            hephaestus.quests.marriage = true;
            song = loadSound('assets/sounds/love.mp3');
            song.play();
        }
        
     };

    
    console.log(`Hephaestus found a ${this.name}!`);
    // drawTextBubble(this.name);
    this.sprite.remove();
    objects = objects.filter(object => object.name !== this.name);


function detectCollisionWithObjects() {
    for (const object of objects) {
        hephaestus.sprite.collide(object.sprite, didCollideWithObject.bind(object));
    }
}


function handleMovement() {
    if(keyIsDown(LEFT_ARROW)) {
        hephaestus.sprite.setSpeed(3, 180);
        hephaestus.sprite.changeAnimation('right');
        hephaestus.sprite.mirrorX(-1);
    } else if(keyIsDown(RIGHT_ARROW)) {
        hephaestus.sprite.setSpeed(3, 0);
        hephaestus.sprite.changeAnimation('right');
        hephaestus.sprite.mirrorX(1);
    } else if(keyIsDown(UP_ARROW)) {
        hephaestus.sprite.setSpeed(3, 270);
        hephaestus.sprite.changeAnimation('up');
    } else if(keyIsDown(DOWN_ARROW)) {
        hephaestus.sprite.setSpeed(3,90);
        hephaestus.sprite.changeAnimation('down');
    } else {
        hephaestus.sprite.setSpeed(0);
        hephaestus.sprite.changeAnimation('still');
    }
}

function initializeSprites() {
    hephaestus.sprite = createSprite(width / 2, height / 2, characterSize, characterSize);
    hephaestus.sprite.addAnimation('still', 'assets/spritesnframes/Hephaestusstill.png');
    hephaestus.sprite.addAnimation('up', 'assets/spritesnframes/Hephaestuswalkup001.png', 'assets/spritesnframes/Hephaestsuswalkup002.png');
    hephaestus.sprite.addAnimation('right', 'assets/spritesnframes/Hephaestuswalkleft001.png', 'assets/spritesnframes/Hephaestuswalkleft002.png');
    hephaestus.sprite.addAnimation('down', 'assets/spritesnframes/Hephaestuswalkdown001.png', 'assets/spritesnframes/Hephaestuswalkdown002.png');
    hera.sprite = createSprite(100, 50, characterSize, characterSize);
    zeus.sprite = createSprite(size - 100, 100, characterSize, characterSize);
    aphrodite.sprite = createSprite(100, size - 100, characterSize, characterSize);
    rando.sprite = createSprite(size - 100, size - 100, characterSize, characterSize);

    for (let i = 0; i < npcs.length; i++) {
        npcs[i].sprite.addAnimation('still', 'assets/spritesnframes/' + npcs[i].name.toLowerCase() + '.png');
        npcs[i].sprite.changeAnimation('still');
    }

    for (let i = 0; i < objects.length; i++) {
        objects[i].sprite = createSprite(objects[i].x, objects[i].y, objectSize, objectSize);
        // objects[i].sprite = createSprite(random(objectSize + 10, width - objectSize - 10), random(objectSize + 10, height - objectSize - 10), objectSize, objectSize);
        //add animations just like previous for loop for objects

        if (objects[i].name === 'respect') {
            objects[i].sprite.addAnimation('treasurebox', 'assets/spritesnframes/treasurebox.png');
        } else if (objects[i].name === 'power') {
            objects[i].sprite.addAnimation('treasurebox', 'assets/spritesnframes/treasurebox.png');
        } else {
            objects[i].sprite.addAnimation('treasurebox', 'assets/spritesnframes/treasurebox.png');
        }
        
    }

       
       
    }
}