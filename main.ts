input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 2382, 632, 168, 32, 667, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    basic.showNumber(randint(1, 6))
})
basic.forever(function () {
	
})
