function game2(){
    player.visible = true;
        ground.visible = true;
        playerButton.hide();
        arrowButton.hide();
        lifeButton.hide();
        shopButton.hide();
        jumpButton.hide();
        button2.show();
        bText1.hide();
        bText2.hide();
        bText3.hide();
        bText4.hide();
        bText5.hide();

      //gravity on player
        player.velocityY = player.velocityY + 0.3;
        player.collide(ground);
        player.collide(leftWall);
        player.collide(rightWall);
        player.collide(topWall);
        background("white");
        
        fill("red");
        textSize(30);
        text("Money:"+ Money, 610,50);
        text("Health Remaining:"+ playerHP,300,50);
        text("Score: "+unMonster*200, 900,50);

        getBowLevel();
        getPlayerLevel();
        getPlayerHP();
        getJumpLevel();
        getMoney();
        getHealthMoney();
        getdeadMonster();

        if(keyDown(RIGHT_ARROW)){
            player.x = player.x+playerLevel+3
            thePosition = 1
        } 

        if(keyDown(LEFT_ARROW)){
            player.x = player.x-playerLevel-3
            thePosition = 2
        } 
console.log(player.y)
        if(keyWentDown(UP_ARROW) && player.y >=300){
        // player.velocityY = -10
        jump();
        }   

        speed = unMonster/3
    //image(playerImg, player.x,player.y,200,300);
    if(thePosition ===1){
        image(bowImg, player.x+100,player.y,70,150);
    } else {
        image(bowImg, player.x-100,player.y,70,150); 
    }
    //console.log(player.y)
    //var c =ground.y-player.y 

       /* if(player.y >=300){
            player.y = 320
        }*/

    if(keyWentDown("space") && arrowState === 1){
      createArrow();
    }
    if(keyWentUp("space")){
        moveArrow()
    }
    if(arrowState ===2){
    if(arrow.x - player.x >= 600 || player.x-arrow.x >=600){
        arrowState = 1
    }
    }
    if(frameCount % 100 === 0 && frameCount % 200 !== 0){
        monster();
    }   

    if(frameCount % 200 === 0){
        nextMonster();
    }

    if(frameCount%120===0 && frameCount%240 !== 0 && unMonster>=10){
        ball();
    }

    if(frameCount%240 === 0 && unMonster>=10){
        nextBall();
    }
    
    if(arrow !== undefined){
    collideArrow();
   // console.log(monster.x)
    }
if(monster1 !== undefined){
    if(player.isTouching(monster1)){
writePlayerHP(-1);
monster1.destroy();
    }
}

if(ball3 !== undefined){
    if(player.isTouching(ball3)){
        writePlayerHP(-1);
        ball3.destroy();
    }
}

if(ball2 !== undefined){
    if(player.isTouching(ball2)){
        writePlayerHP(-1);
        ball2.destroy();
    }
}

if(monster3 !== undefined){
    if(player.isTouching(monster3)){
      writePlayerHP(-1);
      monster3.destroy();
    }
}
    if(arrow !== undefined){
     //   console.log(monster1.x-arrow.x);
     if(monster1 !== undefined){
        if(arrow.isTouching(monster1)){
        monster1.destroy();
        monster1.y = -300;
        arrow.destroy();
        arrow.y = -200;
        arrow.x = 3000;
        writeMoney(50);
        writedeadMonster(1);
        }
    }

    if(monster3 !== undefined){
        if(arrow.isTouching(monster3)){
            monster3.destroy()
            arrow.destroy();
            arrow.y = -200;
            arrow.x = 3000;
            monster3.y = -300
           writeMoney(50);
           writedeadMonster(1);
            }
    }

    }


    getBowLevel();

button2.mousePressed(()=>{
gameState = 3;
player.velocityY = 0
})

}
