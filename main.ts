namespace SpriteKind {
    export const button = SpriteKind.create()
    export const scorekeep = SpriteKind.create()
    export const vox = SpriteKind.create()
    export const eyes = SpriteKind.create()
    export const dice = SpriteKind.create()
}
function randomize_all_dice () {
    setd1()
    setd2()
    setd3()
    dicenum4 = randint(1, 6)
    dicenum5 = randint(1, 6)
}
function setd1 () {
    dicenum1 = randint(1, 6)
    if (dicenum1 == 1) {
        dice_1.setImage(assets.image`D_1`)
    }
    if (dicenum1 == 2) {
        dice_1.setImage(assets.image`D_2`)
    }
    if (dicenum1 == 3) {
        dice_1.setImage(assets.image`D_3`)
    }
    if (dicenum1 == 4) {
        dice_1.setImage(assets.image`D_4`)
    }
    if (dicenum1 == 5) {
        dice_1.setImage(assets.image`D_5`)
    }
    if (dicenum1 == 6) {
        dice_1.setImage(assets.image`D_6`)
    }
}
function dice2 () {
    if (!(dice2selected) && Dice_2.overlapsWith(mouse) && dicenum2 == 1) {
        Dice_2.setImage(assets.image`DS_1`)
        dice2selected = true
    } else if (dice2selected && Dice_2.overlapsWith(mouse) && dicenum2 == 1) {
        Dice_2.setImage(assets.image`D_1`)
        dice2selected = false
    }
    if (!(dice2selected) && Dice_2.overlapsWith(mouse) && dicenum2 == 2) {
        Dice_2.setImage(assets.image`DS_2`)
        dice2selected = true
    } else if (dice2selected && Dice_2.overlapsWith(mouse) && dicenum2 == 2) {
        Dice_2.setImage(assets.image`D_2`)
        dice2selected = false
    }
    if (!(dice2selected) && Dice_2.overlapsWith(mouse) && dicenum2 == 3) {
        Dice_2.setImage(assets.image`DS_3`)
        dice2selected = true
    } else if (dice2selected && Dice_2.overlapsWith(mouse) && dicenum2 == 3) {
        Dice_2.setImage(assets.image`D_3`)
        dice2selected = false
    }
    if (!(dice2selected) && Dice_2.overlapsWith(mouse) && dicenum2 == 4) {
        Dice_2.setImage(assets.image`DS_4`)
        dice2selected = true
    } else if (dice2selected && Dice_2.overlapsWith(mouse) && dicenum2 == 4) {
        Dice_2.setImage(assets.image`D_4`)
        dice2selected = false
    }
    if (!(dice2selected) && Dice_2.overlapsWith(mouse) && dicenum2 == 5) {
        Dice_2.setImage(assets.image`DS_5`)
        dice2selected = true
    } else if (dice1selected && Dice_2.overlapsWith(mouse) && dicenum2 == 5) {
        Dice_2.setImage(assets.image`D_5`)
        dice2selected = false
    }
    if (!(dice1selected) && Dice_2.overlapsWith(mouse) && dicenum2 == 6) {
        Dice_2.setImage(assets.image`DS_6`)
        dice2selected = true
    } else if (dice2selected && Dice_2.overlapsWith(mouse) && dicenum2 == 6) {
        Dice_2.setImage(assets.image`D_6`)
        dice2selected = false
    }
}
controller.combos.attachCombo("uuddlrlrba", function () {
    voncaiser = false
    voxsprite = sprites.create(assets.image`voxino`, SpriteKind.vox)
    voxsprite.setPosition(80, 18)
    animation.runImageAnimation(
    voxsprite,
    assets.animation`vincent anim`,
    200,
    true
    )
    scene.setBackgroundImage(assets.image`voxbg`)
    game.splash("Found me?", "Some luck you have")
    game.splash("Trust me with your", "Gambling")
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    mouse = sprites.create(assets.image`cursor`, SpriteKind.Player)
})
function startingdiceslection () {
    dice1selected = false
    dice2selected = false
    dice3selected = false
    dice4selected = false
    dice5selected = false
}
function setd2 () {
    dicenum2 = randint(1, 6)
    if (dicenum2 == 1) {
        Dice_2.setImage(assets.image`D_1`)
    }
    if (dicenum2 == 2) {
        Dice_2.setImage(assets.image`D_2`)
    }
    if (dicenum2 == 3) {
        Dice_2.setImage(assets.image`D_3`)
    }
    if (dicenum2 == 4) {
        Dice_2.setImage(assets.image`D_4`)
    }
    if (dicenum2 == 5) {
        Dice_2.setImage(assets.image`D_5`)
    }
    if (dicenum2 == 6) {
        Dice_2.setImage(assets.image`D_6`)
    }
}
browserEvents.onMouseMove(function (x, y) {
    mouse.setPosition(x, y)
})
function dice1 () {
    if (!(dice1selected) && dice_1.overlapsWith(mouse) && dicenum1 == 1) {
        dice_1.setImage(assets.image`DS_1`)
        dice1selected = true
    } else if (dice1selected && dice_1.overlapsWith(mouse) && dicenum1 == 1) {
        dice_1.setImage(assets.image`D_1`)
        dice1selected = false
    }
    if (!(dice1selected) && dice_1.overlapsWith(mouse) && dicenum1 == 2) {
        dice_1.setImage(assets.image`DS_2`)
        dice1selected = true
    } else if (dice1selected && dice_1.overlapsWith(mouse) && dicenum1 == 2) {
        dice_1.setImage(assets.image`D_2`)
        dice1selected = false
    }
    if (!(dice1selected) && dice_1.overlapsWith(mouse) && dicenum1 == 3) {
        dice_1.setImage(assets.image`DS_3`)
        dice1selected = true
    } else if (dice1selected && dice_1.overlapsWith(mouse) && dicenum1 == 3) {
        dice_1.setImage(assets.image`D_3`)
        dice1selected = false
    }
    if (!(dice1selected) && dice_1.overlapsWith(mouse) && dicenum1 == 4) {
        dice_1.setImage(assets.image`DS_4`)
        dice1selected = true
    } else if (dice1selected && dice_1.overlapsWith(mouse) && dicenum1 == 4) {
        dice_1.setImage(assets.image`D_4`)
        dice1selected = false
    }
    if (!(dice1selected) && dice_1.overlapsWith(mouse) && dicenum1 == 5) {
        dice_1.setImage(assets.image`DS_5`)
        dice1selected = true
    } else if (dice1selected && dice_1.overlapsWith(mouse) && dicenum1 == 5) {
        dice_1.setImage(assets.image`D_5`)
        dice1selected = false
    }
    if (!(dice1selected) && dice_1.overlapsWith(mouse) && dicenum1 == 6) {
        dice_1.setImage(assets.image`DS_6`)
        dice1selected = true
    } else if (dice1selected && dice_1.overlapsWith(mouse) && dicenum1 == 6) {
        dice_1.setImage(assets.image`D_6`)
        dice1selected = false
    }
}
function setd3 () {
    dicenum3 = randint(1, 6)
    if (dicenum3 == 1) {
        Dice_3.setImage(assets.image`D_1`)
    }
    if (dicenum3 == 2) {
        Dice_3.setImage(assets.image`D_2`)
    }
    if (dicenum3 == 3) {
        Dice_3.setImage(assets.image`D_3`)
    }
    if (dicenum3 == 4) {
        Dice_3.setImage(assets.image`D_4`)
    }
    if (dicenum3 == 5) {
        Dice_3.setImage(assets.image`D_5`)
    }
    if (dicenum3 == 6) {
        Dice_3.setImage(assets.image`D_6`)
    }
}
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    dice1()
    dice2()
})
let dicenum3 = 0
let dice5selected = false
let dice4selected = false
let dice3selected = false
let voxsprite: Sprite = null
let dice1selected = false
let dicenum2 = 0
let dice2selected = false
let dicenum1 = 0
let dicenum5 = 0
let dicenum4 = 0
let mouse: Sprite = null
let voncaiser = false
let Dice_3: Sprite = null
let Dice_2: Sprite = null
let dice_1: Sprite = null
let Totalbg = sprites.create(assets.image`totalbg`, SpriteKind.scorekeep)
let bonesbg = sprites.create(assets.image`bonecount`, SpriteKind.scorekeep)
let multbg = sprites.create(assets.image`multcount`, SpriteKind.scorekeep)
Totalbg.setPosition(119, 55)
bonesbg.setPosition(39, 55)
multbg.setPosition(78, 55)
dice_1 = sprites.create(assets.image`D_1`, SpriteKind.dice)
Dice_2 = sprites.create(assets.image`D_2`, SpriteKind.dice)
Dice_3 = sprites.create(assets.image`D_3`, SpriteKind.dice)
let Dice_4 = sprites.create(assets.image`D_4`, SpriteKind.dice)
let Dice_5 = sprites.create(assets.image`D_5`, SpriteKind.dice)
let startinghandsrerolls = 3
dice_1.setPosition(35, 75)
Dice_2.setPosition(58, 75)
Dice_3.setPosition(81, 75)
Dice_4.setPosition(104, 75)
Dice_5.setPosition(127, 75)
scene.setBackgroundImage(assets.image`overseebg`)
game.splash("i am the overseer", "you shouldnt be here")
game.splash("Gambling", "(also known as betting)")
game.splash("is the wagering of", "something of value")
game.splash("you will wager your life", "you dont get a choice")
game.splash("Use a contra code to", "have someone take MY place")
voncaiser = true
browserEvents.setCursorVisible(false)
mouse = sprites.create(assets.image`cursor`, SpriteKind.Player)
startingdiceslection()
randomize_all_dice()
forever(function () {
    if (voncaiser) {
        if (browserEvents.MouseLeft.isPressed()) {
            mouse.setImage(assets.image`click`)
        } else {
            mouse.setImage(assets.image`cursor`)
        }
    }
})
