let score = 0;
let tegenligger0: game.LedSprite
let tegenligger1: game.LedSprite
let tegenligger2: game.LedSprite
let tegenligger3: game.LedSprite
let tegenligger4: game.LedSprite

let speler: game.LedSprite
let spelBezig = false;

function initialiseer() {
    speler = game.createSprite(2, 4);
    score = 0;
    spelBezig = true;
}

basic.forever(function () {
    initialiseer();
    while (spelBezig) {
        basic.pause(1000)
    }
    game.setScore(score);
    game.gameOver();
})
