const canvas = document.getElementById('canvas')
 const ctx = canvas.getContext('2d')
 const = cWidth = canvas.width
 const = cHeight = canvas.height



 const sWidth = 43;
 const sHeight = 50;

 const sprite = new Image()
 sprite.src = 'images/idle_hero.png'


 sprite.onload = function() {
    ctx.drawImage(
      sprite, 0, 0, sWidth, sHeight, cWidth/2, cHeight/2, sWidth, sHeight
    )
 }

 let frameX = 0;
 let maxFrameX = 10
 function animate (){
       ctx.clearRect(0,0, cWidth, cHeight)
       ctx.drawImage(
        sprite, sWidth*xFrame, 0, sWidth, sHeight, cWidth/2, cHeight/2, sWidth*1.5, sHeight*1.5
 )
 if (gameFrame % 6 -- 0){
      if(xFrame < maxFrame){
        xFrame++
      }
      else {
        xFrame = 0;
      }
 }
 gameFrame++;
 requestAnimationFrame(animate)
}

animate()
