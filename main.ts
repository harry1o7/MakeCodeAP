controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    playerScale += -1
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    playerScale += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerScale += 1
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    playerScale += 1
})

let mySprite = sprites.create(img`
    . . . . . . . e e e . . . . . . 
    . . . . . . . e d d . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . . . d d d . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . d d 2 2 2 2 2 2 2 2 d d . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)

let playerScale = 1
forever(function () {
mySprite.setScale(playerScale, ScaleAnchor.Middle)
})