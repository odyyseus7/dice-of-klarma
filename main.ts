controller.combos.attachCombo("uuddlrlrba", function () {
    scene.setBackgroundImage(assets.image`voxbg`)
})
browserEvents.onMouseMove(function (x, y) {
    mouse.setPosition(x, y)
})
let mouse: Sprite = null
mouse = sprites.create(assets.image`cursor`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`overseebg`)
game.splash("Gambling", "(also known as betting)")
game.splash("is the wagering of", "something of value")
browserEvents.setCursorVisible(false)
forever(function () {
    if (browserEvents.MouseLeft.isPressed()) {
        mouse.setImage(assets.image`click`)
    } else {
        mouse.setImage(assets.image`cursor`)
    }
})
