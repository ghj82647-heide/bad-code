const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const cWidth = canvas.width;
const cHeight = canvas.height;




const sWidth = 43;
const sHeight = 50;

const sprite = new Image()
sprite.src = 'idle_here.png'





























animate()



class Player {
 constructor (x, y){
 this.x = x
 this.y = y
 this.heroImg = new Image()
 this.heroImg.src = 'images/idle_hero.png'
 this.heroMaxFrame = 17

 this.xFrame = 0
 this.sWidth = 43
 this.sHeight = 50
}

stay() {
ctx.drawImage(
    this.heroImg, this.sWidth*this.xFrame, 0, this.sWidth, this.sHeight, this.x, this.y, this.sWidth*1.5, this.sHeight*1.5
    )
    if (gameFrame % 6 == 0){
if (this.xFrame < this.heroMaxFrame){
        this.xFrame++
    }
    else {
        this.xFrame = 0;
    }
}

runleft() {
ctx.drawImage(
    this.heroImg, this.sWidth*this.xFrame, 0, this.sWidth, this.sHeight, this.x, this.y, this.sWidth*1.5, this.sHeight*1.5
    )
    if (gameFrame % 6 == 0){
if (this.xFrame < this.heroMaxFrame){
        this.xFrame++
    }
    else {
        this.xFrame = 0;
    }
}



let player = new Player(100, 100)

let gameFrame = 0

function animate(){
 ctx.clearRect(0, 0, cWidth, cHeight)
 player.runleft()
gameFrame++;
requestAnimationFrame
}
