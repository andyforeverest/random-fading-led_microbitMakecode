let b = 0
let x = 0
let y = 0
basic.forever(function () {
    led.plotBrightness(x, y, b)
    b += 20
    basic.pause(2)
    if (b > 255) {
        b = 0
        led.unplot(x, y)
        x = randint(0, 4)
        y = randint(0, 4)
    }
})
