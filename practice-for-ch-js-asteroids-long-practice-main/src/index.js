import MovingObject from "./moving-object.js";

console.log("Webpack is working!");


// const Game = require('./game.js');
// const Asteroid = require('./asteroid.js');
// const Ship = require('./ship.js');
// const Bullet = require('./bullet.js');
// const MovingObject = require('./moving_object.js');


document.addEventListener('DOMContentLoaded', () => {
    const canvasEle = document.getElementById("game-canvas");
    const ctx = canvasEle.getContext('2d');
    // const game = new Game(ctx);

    const mo = new MovingObject(
        [30, 30],
        [10, 10],
        5,
        "#00FF00");
        
    mo.drawctx(ctx);

    // window.Game = Game;
    // window.Asteroid = Asteroid;
    // window.Ship = Ship;
    // window.Bullet = Bullet;
    window.MovingObject = MovingObject;
});


