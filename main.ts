basic.forever(function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P2)))
    if (500 == control.millis()) {
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
