function createArrow(){
    if(thePosition === 1){
    arrow = createSprite(player.x+100,player.y,1,1);
    } else {
        arrow = createSprite(player.x-100,player.y,1,1);
    }
    arrow.scale = 0.1;
 //   image(bowImg, bow.x,bow.y,70,150);   

}

function moveArrow(){
    if(arrowState === 1){
    if(thePosition === 1){
    arrow.velocityX = bowLevel +3;
    arrow.addImage(arrowImg);
    } else{
        arrow.velocityX=-bowLevel-3
        arrow.addImage(arrow2Img);
    }
}
    arrowState = 2;
}

function collideArrow(){
   // if(arrow != false && monster != false){
    if(arrow.x >= monster.x){
        console.log("hi");
  //  }
}
}