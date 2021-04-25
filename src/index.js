import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js'

const SCREEN_WIDTH = 600;
const SCREEN_HEIGHT = 600;

const canvas = document.getElementById('game-screen');
const ctx = canvas.getContext('2d');

const paddle = new Paddle(SCREEN_WIDTH, SCREEN_HEIGHT);
new InputHandler(paddle)
const ball = new Ball(SCREEN_WIDTH, SCREEN_HEIGHT, paddle)


let lastTime = 0

function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    paddle.update(deltaTime)
    paddle.draw(ctx)
    ball.draw(ctx)
    ball.update(deltaTime)

    requestAnimationFrame(gameLoop) 
}

requestAnimationFrame(gameLoop)