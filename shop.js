function getBowLevel(){
    var playerRef = database.ref('bowLvl')
    playerRef.on('value', function(data){
        bowLevel = data.val(); 
    })
}

function writeBowLevel(x){
    database.ref('/').update({
bowLvl:bowLevel +x
    })
}

function getPlayerLevel(){
    var playerRef = database.ref('playerLvl')
    playerRef.on('value', function(data){
        playerLevel = data.val(); 
    })
}

function getPlayerHP(){
    var playerRef = database.ref('playerHealth')
    playerRef.on('value', function(data){
        playerHP = data.val(); 
    })
}

function writePlayerLevel(x){
    database.ref('/').update({
playerLvl:playerLevel +x
    })
}

function writePlayerHP(x){
    database.ref('/').update({
playerHealth:playerHP+x
    })
}

function getJumpLevel(){
    var playerRef = database.ref('jumpLvl')
    playerRef.on('value', function(data){
        jumpLevel = data.val(); 
    })
}

function writeJumpLevel(x){
    database.ref('/').update({
jumpLvl:jumpLevel+x
    })
}

function getMoney(){
    var playerRef = database.ref('Money')
    playerRef.on('value', function(data){
        Money = data.val(); 
    }) 
}

function writeMoney(x){
    database.ref('/').update({
Money:Money+x
    })
}

function getHealthMoney(){
    var playerRef = database.ref('healthMoney')
    playerRef.on('value', function(data){
        hpMoney = data.val(); 
    }) 
}

function writeHealthMoney(x){
    database.ref('/').update({
healthMoney:hpMoney+x
    })
}

function getdeadMonster(){
    var playerRef = database.ref('deadMonster')
    playerRef.on('value', function(data){
        unMonster = data.val(); 
    }) 
}

function writedeadMonster(x){
    database.ref('/').update({
deadMonster:unMonster+x
    })
}

function getHiScore(){
    var playerRef = database.ref('hiScore')
    playerRef.on('value', function(data){
        highScore = data.val(); 
    }) 
}

function writeHiScore(x){
    database.ref('/').update({
hiScore:x
    })
}