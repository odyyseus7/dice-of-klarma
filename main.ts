namespace SpriteKind {
    export const button = SpriteKind.create()
    export const scorekeep = SpriteKind.create()
}
controller.combos.attachCombo("uuddlrlrba", function () {
    scene.setBackgroundImage(assets.image`voxbg`)
})
browserEvents.onMouseMove(function (x, y) {
    mouse.setPosition(x, y)
})
let mouse: Sprite = null
let bonesbg = sprites.create(assets.image`bonecount`, SpriteKind.scorekeep)
let multbg = sprites.create(assets.image`multcount`, SpriteKind.scorekeep)
bonesbg.setPosition(39, 55)
multbg.setPosition(75, 55)
scene.setBackgroundImage(assets.image`overseebg`)
game.splash("Gambling", "(also known as betting)")
game.splash("is the wagering of", "something of value")
game.splash("you will wager your life")
browserEvents.setCursorVisible(false)
mouse = sprites.create(assets.image`cursor`, SpriteKind.Player)
forever(function () {
    if (browserEvents.MouseLeft.isPressed()) {
        mouse.setImage(assets.image`click`)
    } else {
        mouse.setImage(assets.image`cursor`)
    }
})
