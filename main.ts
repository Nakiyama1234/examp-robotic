let distance = 0
servos.P0.setAngle(0)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showString("" + (distance))
    basic.pause(200)
    if (distance < 20) {
        servos.P0.setAngle(90)
        basic.pause(100)
    } else {
        servos.P0.setAngle(-90)
    }
})
