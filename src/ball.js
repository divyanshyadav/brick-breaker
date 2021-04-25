export default class Ball {
    constructor(screenWidth, screenHeight, paddle) {
        this.image = document.getElementById('img-ball')
        this.size = 16
        this.position = { x: 0, y: 200 }
        this.speed = { x: 7, y: 7 }
        this.screenWidth = screenWidth
        this.screenHeight = screenHeight
        this.paddle = paddle
    }

    draw(ctx) {
        ctx.drawImage(this.image, 
            this.position.x, this.position.y, 
            this.size, this.size)
    }

    update(deltaTime) {
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        if (this.position.x + this.size > this.screenWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x
        } else if (this.position.y + this.size > this.screenHeight || this.position.y < 0) {
            if ( this.position.y > 0 ) {
                this.position = { x: 0, y: (this.screenWidth - 50) * Math.random() }
                return
            }
            this.speed.y = -this.speed.y

        }

        if (collision(this, this.paddle)) {
            this.speed.y = -this.speed.y
        }
    }
}

function collision(ball, obj) {
    const topOfBall = ball.position.y
    const bottomOfBall = ball.position.y + ball.size

    const topOfObj = obj.position.y
    const bottomOfObj = obj.position.y + obj.height
    const leftSideOfObj = obj.position.x
    const rightSideOfObj = obj.position.x + obj.width

    if (bottomOfBall >= topOfObj && 
        topOfBall <= bottomOfObj &&
        ball.position.x >= leftSideOfObj &&
        ball.position.x + ball.size <= rightSideOfObj) {
            return true
    }
    
    return false
}