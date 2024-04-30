input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Butterfly)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
})
basic.forever(function () {
	
})
