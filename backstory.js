const size = 650;
const characterSize = 48;
const objectSize = 32;
const viewSize = 250;

const hephaestus = {
    sprite: undefined,
    name: 'Hephaestus',
    inventory: [],
    quests: {
       hammer: false,
    }
};

const fishman = {
    sprite: undefined,
    name: 'Fishman',
    dialogue:"Oh hey kiddo. You're finally awake. I found you sinking towards the bottom of the ocean like a child-shaped brick while I was out on my morning swim. I rescued you of course and brought you back to this island. Despite the fact that you were unconsious when I found you, you seem to be okay now. Well except for that limp. I'm sure that's just temporary though. What's up? You're looking at me funny....Oh I get it! Yo're all perplexed that a hideous fish man came to your rescue. What were you expecting junior, the little mermaid? So sorry I don't meet your unrealistic societal expectations for what true fishman beauty is supposed to look like! Disrespectful imp! Get whacked with a hammer!"
};

const hammer = {
    sprite: undefined,
    name: 'hammer',
    x: size / 10,
    y: size / 10
}

const npcs = [fishman];
let objects = [hammer];

let song, bg;

function preload() {
    song = loadSound('assets/sounds/summer.mp3'); 
    bg = loadImage('assets/spritesnframes/summersbg.png');
}

function setup() {
    createCanvas(size, size);
    scale(60000.5);
    initializeSprites();
    song.play();
}

function draw() {
    background(bg);
    drawSprites();
    // drawViewPoint();
    detectCollisionWithNPCs();
    detectCollisionWithObjects();
    handleMovement();
}

function drawTextBubble(dialogue) {
    textAlign(CENTER);
    // text(`Hi, I'm ${this.name}`, width / 2, height / 2);
    // text(this.dialogue, (width / 2) + 10, (height / 2) + 15);
    stroke("white");
    strokeWeight(5);
    fill("black");
    rectMode(CENTER);
    rect(width / 2, height / 2, width - 100, height - 100);
    fill("white");
    noStroke();
    noFill();
    textSize(20);
    fill("white");
    textAlign(CENTER);
    text(dialogue, width / 2, height / 2, width - 100, height - 100);
}

function didCollideWithNPC() {
    drawTextBubble(this.dialogue);
}

function detectCollisionWithNPCs() {
    for (const npc of npcs) {
        hephaestus.sprite.collide(npc.sprite, didCollideWithNPC.bind(npc));
    }
}

function didCollideWithObject() {
    if (this.name === 'hammer') {
        hephaestus.quests.basket = true;
        fishman.dialogue = "Oh hello again Body Shame Boy. Come back to destroy whats left of my self esteem? Hey where'd you get that hammer? Wait, you do know I was joking when I said to whack yourself with a hammer right? Jesus Christ don't actually do it you litle psychopath! I can't afford to go to jail now! Not with the fish man body positivity pride parade tomorrow! I promised the guys I wouldn't forget the napkins this time...ok look I'm sorry I flew off the handle earlier. You're what, five-maybe six years old? Maybe I should get off my soapbox and not be so offended by a literal toddlers opinion of me. Why don't you use that hammer to do something productive? Something like oh I don't know...it's intended purpose maybe? BUILDING! Literally anything besides putting a big ol dent in your brains okey-doke with me son.";
    }

    console.log(`Hephaestus found a ${this.name}!`);
    // drawTextBubble(this.name);
    this.sprite.remove();
    objects = objects.filter(object => object.name !== this.name);
}

function detectCollisionWithObjects() {
    for (const object of objects) {
        hephaestus.sprite.collide(object.sprite, didCollideWithObject.bind(object));
    }
}

function handleMovement() {
    if(keyIsDown(LEFT_ARROW)) {
        hephaestus.sprite.setSpeed(3, 180);
        hephaestus.sprite.changeAnimation('right');
        hephaestus.sprite.mirrorX(1);
    } else if(keyIsDown(RIGHT_ARROW)) {
        hephaestus.sprite.setSpeed(3, 0);
        hephaestus.sprite.changeAnimation('right');
        hephaestus.sprite.mirrorX(-1);
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
    hephaestus.sprite.addAnimation('still', 'assets/spritesnframes/younghephaestusstill.png');
    hephaestus.sprite.addAnimation('up', 'assets/spritesnframes/younghephaestuswalkup01.png', 'assets/spritesnframes/younghephaestuswalkup02.png');
    hephaestus.sprite.addAnimation('right', 'assets/spritesnframes/younghephaestuswalkleft01.png', 'assets/spritesnframes/younghephaestuswalkleft02.png');
    hephaestus.sprite.addAnimation('down', 'assets/spritesnframes/younghephaestuswalkdown01.png', 'assets/spritesnframes/younghephaestuswalkdown02.png');
    fishman.sprite = createSprite(100, 50, characterSize, characterSize);

    for (let i = 0; i < npcs.length; i++) {
        npcs[i].sprite.addAnimation('still', 'assets/spritesnframes/' + npcs[i].name + '.png');
        npcs[i].sprite.changeAnimation('still');
    }

    for (let i = 0; i < objects.length; i++) {
        objects[i].sprite = createSprite(objects[i].x, objects[i].y, objectSize, objectSize);
        // objects[i].sprite = createSprite(random(objectSize + 10, width - objectSize - 10), random(objectSize + 10, height - objectSize - 10), objectSize, objectSize);
        //add animations just like previous for loop for objects

        if (objects[i].name === 'hammer') {
            objects[i].sprite.addAnimation('treasurebox', 'assets/spritesnframes/treasurebox.png');
         }
    }
}
