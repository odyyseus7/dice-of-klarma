namespace SpriteKind {
    export const button = SpriteKind.create()
    export const scorekeep = SpriteKind.create()
    export const vox = SpriteKind.create()
    export const eyes = SpriteKind.create()
    export const dice = SpriteKind.create()
}
controller.combos.attachCombo("uuddlrlrba", function () {
    mySprite = sprites.create(img`
        .................fffeeeeeeeeefff................
        .................ffefffffffffeff................
        .................fffffffefffffff................
        .................fffffffffffffff................
        .................fffff4444ffffff................
        .................f44444ff444444f................
        ...........ffffff44fffffffffff44fffff...........
        ...........ffffffffffffffffffffffffff...........
        cccccccccccccccccccccccccccccccccccccccccccccccc
        ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec
        ce55555555555555555555555555555555555555555555ec
        ce5555555555555555555555555555ffffffff55555555ec
        ce5555555ff5555555555555555ffff555555555555555ec
        ce555555555ffff55555555555ff555555555555555555ec
        ce5555555555555fffff55555f55555555544444455555ec
        ce5555555ffffff5555f5555555444454444feee455555ec
        ce555555ffeeeeeffffff555554eee444eeefffe455555ec
        ce55555555ffeeeeeeef5555554effeeefffeefe455555ec
        ce5555555555fffee5ef5555554feee5eeeffef4555555ec
        ce5555555555555ffeef5555554feff5fffefef4555555ec
        ce555555555555555ff55555554eef55eefee445555555ec
        ce5555555555555555555555554eefe55ffe4455555555ec
        ce55555555555555555555555544efe5e4444555555555ec
        ce55555555555555555555555554444444555555555555ec
        ce55555555555555555555555555555555555555555555ec
        ce55554555555555555555555555555555555555445555ec
        ce55554445555555555555555555555555554444455555ec
        ce555545544455555555555555555555554444544e5555ec
        ce555545555444444444444444444444444554545e5555ec
        ce555544554455554455554555554555545545545e5555ec
        ce555554545455554455544555544555454545445e5555ec
        ce5555545455455455455454555454554545454e5e5555ec
        ce5555544555545455454554554554545544554e5e5555ec
        ce5555544555544555544555445555445544544e5e5555ec
        ce5555554555554555544555445555545554545e5e5555ec
        ce5555554444444444444444444444444444445e5e5555ec
        ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec
        cccccccccccccccccccccccccccccccccccccccccccccccc
        `, SpriteKind.vox)
    mySprite.setPosition(80, 18)
    animation.runImageAnimation(
    mySprite,
    [img`
        .................fffeeeeeeeeefff................
        .................ffefffffffffeff................
        .................fffffffefffffff................
        .................fffffffffffffff................
        .................fffff4444ffffff................
        .................f44444ff444444f................
        ...........ffffff44fffffffffff44fffff...........
        ...........ffffffffffffffffffffffffff...........
        cccccccccccccccccccccccccccccccccccccccccccccccc
        ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec
        ce55555555555555555555555555555555555555555555ec
        ce5555555555555555555555555555ffffffff55555555ec
        ce5555555ff5555555555555555ffff555555555555555ec
        ce555555555ffff55555555555ff555555555555555555ec
        ce5555555555555fffff55555f55555555544444455555ec
        ce5555555ffffff5555f5555555444454444feee455555ec
        ce555555ffeeeeeffffff555554eee444eeefffe455555ec
        ce55555555ffeeeeeeef5555554effeeefffeefe455555ec
        ce5555555555fffee5ef5555554feee5eeeffef4555555ec
        ce5555555555555ffeef5555554feff5fffefef4555555ec
        ce555555555555555ff55555554eef55eefee445555555ec
        ce5555555555555555555555554eefe55ffe4455555555ec
        ce55555555555555555555555544efe5e4444555555555ec
        ce55555555555555555555555554444444555555555555ec
        ce55555555555555555555555555555555555555555555ec
        ce55554555555555555555555555555555555555445555ec
        ce55554445555555555555555555555555554444455555ec
        ce555545544455555555555555555555554444544e5555ec
        ce555545555444444444444444444444444554545e5555ec
        ce555544554455554455554555554555545545545e5555ec
        ce555554545455554455544555544555454545445e5555ec
        ce5555545455455455455454555454554545454e5e5555ec
        ce5555544555545455454554554554545544554e5e5555ec
        ce5555544555544555544555445555445544544e5e5555ec
        ce5555554555554555544555445555545554545e5e5555ec
        ce5555554444444444444444444444444444445e5e5555ec
        ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec
        cccccccccccccccccccccccccccccccccccccccccccccccc
        `,img`
        .................fffeeeeeeeeefff................
        .................ffefffffffffeff................
        .................fffffffefffffff................
        .................fffffffffffffff................
        .................fffff4444ffffff................
        .................f44444ff444444f................
        ...........ffffff44fffffffffff44fffff...........
        ...........ffffffffffffffffffffffffff...........
        cccccccccccccccccccccccccccccccccccccccccccccccc
        ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec
        ce55555555555555555555555555555555555555555555ec
        ce5555555555555555555555555555ffffffff55555555ec
        ce5555555ff5555555555555555ffff555555555555555ec
        ce555555555ffff55555555555ff555555555555555555ec
        ce5555555555555fffff55555f55555555544444455555ec
        ce5555555ffffff5555f5555555444454444efee455555ec
        ce555555ffeeeeeffffff555554ffe444efeeffe455555ec
        ce55555555ffeeeeeeef5555554feffeeeffeeff455555ec
        ce5555555555fffee5ef5555554effe5feefeee4555555ec
        ce5555555555555ffeef5555554eefe5ffefffe4555555ec
        ce555555555555555ff55555554eff55efeee445555555ec
        ce5555555555555555555555554efee55fef4455555555ec
        ce55555555555555555555555544fee5e4444555555555ec
        ce55555555555555555555555554444444555555555555ec
        ce55555555555555555555555555555555555555555555ec
        ce55554555555555555555555555555555555555445555ec
        ce55554445555555555555555555555555554444455555ec
        ce555545544455555555555555555555554444544e5555ec
        ce555545555444444444444444444444444554545e5555ec
        ce555544554455554455554555554555545545545e5555ec
        ce555554545455554455544555544555454545445e5555ec
        ce5555545455455455455454555454554545454e5e5555ec
        ce5555544555545455454554554554545544554e5e5555ec
        ce5555544555544555544555445555445544544e5e5555ec
        ce5555554555554555544555445555545554545e5e5555ec
        ce5555554444444444444444444444444444445e5e5555ec
        ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec
        cccccccccccccccccccccccccccccccccccccccccccccccc
        `],
    500,
    true
    )
    scene.setBackgroundImage(assets.image`voxbg`)
    game.splash("Found me?", "Some luck you have")
    game.splash("Trust me with your", "Gambling")
})
browserEvents.onMouseMove(function (x, y) {
    mouse.setPosition(x, y)
})
let mySprite: Sprite = null
let mouse: Sprite = null
let Totalbg = sprites.create(img`
    ...7777777777777777777777...
    ..776767676666666676767677..
    .77676766666666666666767677.
    7767666666666666666666667677
    7676666666666666666666666767
    7766666666666666666666666677
    7676666666666666666666666767
    7766666666666666666666666677
    7766666666666666666666666677
    7676666666666666666666666767
    7766666666666666666666666677
    7676666666666666666666666767
    7767666666666666666666667677
    .77676766666666666666767677.
    ..776767676666666676767677..
    ...7777777777777777777777...
    `, SpriteKind.scorekeep)
let bonesbg = sprites.create(assets.image`bonecount`, SpriteKind.scorekeep)
let multbg = sprites.create(assets.image`multcount`, SpriteKind.scorekeep)
Totalbg.setPosition(119, 55)
bonesbg.setPosition(39, 55)
multbg.setPosition(78, 55)
let dice_1 = sprites.create(assets.image`D_1`, SpriteKind.dice)
let Dice_2 = sprites.create(assets.image`D_2`, SpriteKind.dice)
let Dice_3 = sprites.create(assets.image`D_4`, SpriteKind.dice)
let Dice_4 = sprites.create(assets.image`D_3`, SpriteKind.dice)
let Dice_5 = sprites.create(assets.image`myImage1`, SpriteKind.dice)
let Dice_6 = sprites.create(assets.image`myImage2`, SpriteKind.dice)
dice_1.setPosition(35, 75)
Dice_2.setPosition(58, 75)
Dice_3.setPosition(80, 75)
Dice_4.setPosition(105, 75)
Dice_5.setPosition(127, 75)
scene.setBackgroundImage(assets.image`overseebg`)
game.splash("Gambling", "(also known as betting)")
game.splash("is the wagering of", "something of value")
game.splash("you will wager your life")
game.splash("Use A code to", "have someone new!")
browserEvents.setCursorVisible(false)
mouse = sprites.create(assets.image`cursor`, SpriteKind.Player)
forever(function () {
    if (browserEvents.MouseLeft.isPressed()) {
        mouse.setImage(assets.image`click`)
    } else {
        mouse.setImage(assets.image`cursor`)
    }
})
