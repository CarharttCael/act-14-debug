input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.pause(350)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(350)
    }
})
