export default class Paddle {
    constructor(screenWidth, screenHeight) {
        this.width = 150;
        this.height = 20;
        this.speed = 0;
        this.maxSpeed = 200;
        this.screenWidth = screenWidth;

        this.position = {
            x: screenWidth / 2 - this.width / 2,
            y: screenHeight - this.height - 10
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed
    }

    stop() {
        this.speed = 0
    }

    draw(ctx) {
        ctx.fillStyle = `#0f0`
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime) {
        if (!deltaTime) return
        this.position.x += this.speed / deltaTime

        if (this.position.x < 0) this.position.x = 0
        if (this.position.x + this.width > this.screenWidth) 
            this.position.x = this.screenWidth - this.width
        
    }
}