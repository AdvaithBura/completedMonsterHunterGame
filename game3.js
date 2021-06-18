function game3(){
    background(255);
    getBowLevel();
    getPlayerLevel();
    getPlayerHP();
    getHealthMoney();

  //  console.log(gameState);
  var bowText = bowLevel*25+20
  var playerText = playerLevel*25+20
  var jumpText = jumpLevel*25+20
  healthText = hpMoney *40+30;

  textSize(40);
  fill("red");
  text("Cost:" + jumpText, 65,150);
  text("Cost:" + bowText,375,150);   
  text("Cost: "+ playerText, 675,150);   
  text("Cost: "+ healthText,970,150);   
  text("Money:"+ Money, 800,50);
  text(""+playerLevel + "/10", 695,280)
  text(""+jumpLevel+"/5",85,280)
  text(""+bowLevel+"/10",395,280)
  text(""+ playerHP+"/no limit",980,280);
 

arrowButton.show();
lifeButton.show();
playerButton.show();
shopButton.show();
jumpButton.show();
player.visible = false
ground.visible = false
button2.hide();
//player.y = 100;
if(monster1 !== undefined){
monster1.destroy();
}
if(monster3 !== undefined){
monster3.destroy();
}

arrowButton.mousePressed(()=>{
    if(Money >= bowText && bowLevel <= 9){
    writeBowLevel(1);
    writeMoney(-bowText);
    }
})

lifeButton.mousePressed(()=>{
    if(Money >= healthText){
    writePlayerHP(1);
    writeMoney(-healthText);
    writeHealthMoney(1);
    }
})

playerButton.mousePressed(()=>{
    if(Money >= playerText && playerLevel <=9){
    writePlayerLevel(1);
    writeMoney(-playerText);
    }
})

shopButton.mousePressed(()=>{
    gameState = 2;
})

jumpButton.mousePressed(()=>{
    if(Money >= jumpText && jumpLevel <=4){
 writeJumpLevel(1);
 writeMoney(-jumpText);
    }
})
}