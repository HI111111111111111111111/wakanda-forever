namespace SpriteKind {
    export const Tree = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Namor.setPosition(148, 2)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Guard, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Namor.setPosition(148, 2)
})
info.onScore(20, function () {
    Namor.destroy()
    scene.setBackgroundImage(assets.image`boston-bridge`)
    effects.confetti.startScreenEffect()
    Shuri.sayText("WAKANDA FOREVER!", 2000, false)
})
let Namor: Sprite = null
let Shuri: Sprite = null
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ", DialogLayout.Full)
scene.setBackgroundImage(assets.image`wakanda`)
Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.setPosition(148, 2)
Namor.follow(Shuri, 30)
let Riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
let Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
controller.moveSprite(Riri, 34, -5)
controller.moveSprite(Okoye, -65, -58)
let mySprite = sprites.create(assets.image`vibranium`, SpriteKind.Tree)
