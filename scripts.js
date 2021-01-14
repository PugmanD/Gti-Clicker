//dont forget to make the version (var Game) to show when it is normal.
var music = 0;
var idFruit = document.getElementById("fruit");
var carClicks = 0;
var tuberClicks = 0;
var autoClicks = 0;
var showHide = false;
var fruit1 = Math.floor(Math.random() * 90);
var fruit1ClckTimes = 0;
var fruit2 = Math.floor(Math.random() * 90);
var fruit2ClckTimes = 0;
var fruit3 = Math.floor(Math.random() * 90);
var fruit3ClckTimes = 0;
var fruit4 = Math.floor(Math.random() * 90);
var fruit4ClckTimes = 0;
var fruit5 = Math.floor(Math.random() * 90);
var fruit5ClckTimes = 0;
var fruit6 = Math.floor(Math.random() * 90);
var fruit6ClckTimes = 0;
var fruit7ClckTimes = 0;
var fruit7 = Math.floor(Math.random() * 90);
var peachLeechclicks = 0;
var codeUsed = "false";
var Game = {version: "V:1.0.2", mode: "Beta"};
var raisinAmount = false;
var achievement = {firstClick: "there's a first for everything"};
var achievementsUnlocked = [];
var firstClickUsed = false;
var llamaClicks = 0;
setInterval(save, 10000);
document.getElementById("fruit1").style.display = "none";
document.getElementById("fruit2").style.display = "none";
document.getElementById("fruit3").style.display = "none";
document.getElementById("fruit4").style.display = "none";
document.getElementById("fruit5").style.display = "none";
document.getElementById("fruit6").style.display = "none";
document.getElementById("peachLeech").style.display = "none";
document.getElementById("fruit7").style.display = "none";
document.getElementById("dust").style.display = "none";
document.getElementById("image").style.display = "block";
document.getElementById("image").style.position = "relative";
document.getElementById("image").style.marginLeft = "auto";
document.getElementById("image").style.marginRight = "auto";
document.getElementById("clicks").style.textAlign = "right";
document.getElementById("autoclicks").style.display = "none";
document.getElementById("bowl").style.display = "none";
document.getElementById("flour").style.display = "none";
document.getElementById("yeast").style.display = "none";
document.getElementById("peachLeechClickCounter").style.display = "none";
document.getElementById("sugar").style.display = "none";
document.getElementById("cinnamon").style.display = "none";
document.getElementById("water").style.display = "none";
document.getElementById("version").innerHTML = Game.version + " " + Game.mode;
document.getElementById("lost").style.display = "none";
document.getElementById("gas87").style.display = "none";
document.getElementById("gas89").style.display = "none";
document.getElementById("alert").style.display = "none";
document.getElementById("llama").style.display = "none";
document.getElementById("alpaca").style.display = "none";
document.getElementById("llamaText").style.display = "none";
document.getElementById("llamaClicks").style.display = "none";
document.getElementById("hider").style.display = "none";
document.getElementById("input").addEventListener("keyup", function(e){
    if(e.keyCode == 13){
        checkIfCorrrectCode();
    }
});
function restartGame(){
    reset();
}
function showBtnHolder(){
    document.getElementById("btnHolder").style.left = "0px";
    document.getElementById("gas87").style.display = "block";
    document.getElementById("gas89").style.display = "block";
    document.getElementById("hider").style.display = "block";
}
function hideBtnHolder(){
    document.getElementById("hider").style.display = "none";
    document.getElementById("gas87").style.display = "none";
    document.getElementById("gas89").style.display = "none";
    document.getElementById("btnHolder").style.left = "-260px";
}
function checkIfCorrrectCode(){
    var value = document.getElementById("input").value
    if(value != "raisin"){
        alert("Not correct code.");
    }
    if(codeUsed == "false"){
        if(value == "raisin"){
            codeUsed = "true";
            carClicks = carClicks + 350;
            window.localStorage.setItem("codeUsed", codeUsed);
        }
    }else{
        if(value == "raisin"){
            alert("You have used this code already.");
        }
    }
}
function updatePeachLeechClickCounter(){
    document.getElementById("peachLeechClickCounter").innerHTML = peachLeechclicks;
}
function save(){
    window.localStorage.setItem("numberSave", carClicks);
    window.localStorage.setItem("autoclicks", autoClicks);
    window.localStorage.setItem("codeUsed", codeUsed);
    window.localStorage.setItem("unlockedAchievements", achievementsUnlocked);
    window.localStorage.setItem("firstClickUsed", firstClickUsed);
    console.log("Game Saved!");
}
function load(){
    carClicks = parseInt(window.localStorage.getItem("numberSave"));
    autoClicks = parseInt(window.localStorage.getItem("autoclicks"));
    codeUsed = window.localStorage.getItem("codeUsed");
    achievementsUnlocked = window.localStorage.getItem("unlockedAchievements");
    document.getElementById("loader").style.display = "none";
}
function playAudio(){
    var audio = document.getElementById("audio");
    if(music == 0){
        music = music + 1;
        audio.play();
        document.getElementById("music").innerHTML = "Music Off";
    }else{
        music = 0;
        audio.pause();
        document.getElementById("music").innerHTML = "Music On";
    }
}
function reset(){
    if(confirm("You're restarting the game duh.")){
        window.localStorage.setItem("numberSave", 0);
        window.localStorage.setItem("autoclicks", 0);
        window.localStorage.setItem("codeUsed", "false");
        carClicks = parseInt(window.localStorage.getItem("numberSave"));
        autoClicks = parseInt(window.localStorage.getItem("autoclicks"));
        codeUsed = window.localStorage.getItem("codeUsed");
    }
}
function add(){
    carClicks = carClicks + 1
    document.getElementById("clicks").innerHTML = carClicks;
}
function gas87(){
    if(carClicks >= 300){
        carClicks = carClicks - 300;
        autoClicks = autoClicks + 1;
    }
}
function gas89(){
    if(carClicks >= 1000){
        carClicks = carClicks - 1000;
        autoClicks = autoClicks + 5;
    }
}
function show(){
    if(showHide == false){
        document.getElementById("autoclicks").style.display = "block";
        document.getElementById("span").innerHTML = "Hide Autoclicks";
        showHide = true;
    }else{
        document.getElementById("autoclicks").style.display = "none";
        document.getElementById("span").innerHTML = "Show Autoclicks";
        showHide = false;
    }
}
function update(){
    document.getElementById("clicks").innerHTML = carClicks;
    carClicks = Math.round(carClicks);
    document.title = "Gti Clicker: " + carClicks + " Clicks";
    document.getElementById("autoclicks").innerHTML = "Autoclicks: " + autoClicks;
    if(isNaN(carClicks)){
        window.localStorage.setItem("numberSave", 0);
        window.localStorage.setItem("autoclicks", 0);
        window.localStorage.setItem("codeUsed", "false");
        carClicks = parseInt(window.localStorage.getItem("numberSave"));
        autoClicks = parseInt(window.localStorage.getItem("autoclicks"));
        codeUsed = window.localStorage.getItem("codeUsed");
    }
    if(carClicks == 0){
        document.title = "Gti Clicker";
    }
}
function updateAutoClicks(){
    carClicks = carClicks + autoClicks;
}
function sone(){
    tuberClicks = tuberClicks + 1;
    if(tuberClicks == 1){
        document.getElementById("pot").src = "Images/corn.png";
        document.getElementById("pot").style.animationDuration = "7.5s";
        carClicks = carClicks + 100;
    }
    if(tuberClicks == 2){
        document.getElementById("pot").src = "Images/Beats.png";
        document.getElementById("pot").style.animationDuration = "5s";
        document.getElementById("pot").style.width = "250px";
        carClicks = carClicks + 125;
    }
    if(tuberClicks == 3){
        carClicks = carClicks + 150;
        fruitMania()
        document.getElementById("fruit1").style.display = "block";
        document.getElementById("fruit2").style.display = "block";
    }
}
function fruitMania(){
    if (music == 1){
        document.getElementById("audio").pause()
        setTimeout(function(){
            document.getElementById("audio").play();
        }, 15000);
    }
    document.getElementById("fruitSong").play()
    turnPurple();
    setTimeout(turnPurple, 1500);
    document.getElementById("body").style.animation = "fruitMania 1.5s";
    document.getElementById("pot").style.display = "none";
    idFruit.innerHTML = "Fruit Mania!";
    idFruit.style.fontSize = "100px";
    idFruit.style.animationName = "fruitText";
    idFruit.style.zIndex = "-2";
    idFruit.style.animationDuration = "7s";
    document.getElementById("fruit1").style.top = Math.floor(Math.random() * 90) + "%";
    document.getElementById("fruit2").style.top = Math.floor(Math.random() * 90) + "%";
    document.getElementById("span").style.display = "none";
    document.getElementById("autoclicks").style.display = "none";
    setTimeout(hideFruitText, 7000);
    setTimeout(peachLeech, 15000);
}
function hideFruitText(){
    idFruit.style.display = "none"
}
function turnPurple(){
    document.getElementById("body").style.backgroundColor = "#a138d6";
}
function movefruit7(){
    fruit7ClckTimes = fruit7ClckTimes + 1;
    carClicks = carClicks + 250;
    document.getElementById("fruit7").style.top = Math.floor(Math.random() * 90) + "%";
    if (fruit7ClckTimes < 2){
        document.getElementById("fruit7").style.top = fruit7 + "%";
    }else{
        document.getElementById("fruit7").style.display = "none";
    }
}
function movefruit1(){
    updateFruit()
    fruit1ClckTimes = fruit1ClckTimes + 1;
    carClicks = carClicks + 15;
    document.getElementById("fruit1").style.top = Math.floor(Math.random() * 90) + "%";
    if (fruit1ClckTimes < 6){
        document.getElementById("fruit1").style.top = fruit1 + "%";
    }else{
        document.getElementById("fruit1").style.display = "none";
        document.getElementById("fruit4").style.display = "block";
        movefruit4();
    }
}
function movefruit2(){
    updateFruit()
    fruit2ClckTimes = fruit2ClckTimes + 1;
    carClicks = carClicks + 20;
    document.getElementById("fruit2").style.top = Math.floor(Math.random() * 90) + "%";
    if (fruit2ClckTimes < 6){
        document.getElementById("fruit2").style.top = fruit2 + "%";
    }else{
        document.getElementById("fruit2").style.display = "none";
        document.getElementById("fruit3").style.display = "block";
    }
}
function movefruit3(){
    updateFruit()
    fruit3ClckTimes = fruit3ClckTimes + 1;
    carClicks = carClicks + 25;
    if (fruit3ClckTimes < 5){
        document.getElementById("fruit3").style.top = fruit3 + "%";
    }else{
        document.getElementById("fruit3").style.display = "none";
        document.getElementById("fruit6").style.display = "block";
    }
}
function movefruit4(){
    updateFruit()
    fruit4ClckTimes = fruit4ClckTimes + 1;
    carClicks = carClicks + 30;
    if (fruit4ClckTimes < 4){
        document.getElementById("fruit4").style.top = fruit4 + "%";
    }else{
        document.getElementById("fruit4").style.display = "none";
        document.getElementById("fruit5").style.display = "block";
    }
}
function movefruit5(){
    updateFruit()
    fruit5ClckTimes = fruit5ClckTimes + 1;
    carClicks = carClicks + 45;
    if (fruit5ClckTimes < 3){
        document.getElementById("fruit5").style.top = fruit5 + "%";
    }else{
        document.getElementById("fruit5").style.display = "none";
        document.getElementById("fruit7").style.display = "block";
    }
}
function movefruit6(){
    updateFruit()
    fruit6ClckTimes = fruit6ClckTimes + 1;
    carClicks = carClicks + 45;
    if (fruit6ClckTimes < 2){
        document.getElementById("fruit6").style.top = fruit6 + "%";
    }else{
        document.getElementById("fruit6").style.display = "none";
    }
}
function updateFruit(){
    fruit1 = Math.floor(Math.random() * 90);
    fruit2 = Math.floor(Math.random() * 90);
    fruit3 = Math.floor(Math.random() * 90);
    fruit4 = Math.floor(Math.random() * 90);
    fruit5 = Math.floor(Math.random() * 90);
    fruit6 = Math.floor(Math.random() * 90);
    fruit7 = Math.floor(Math.random() * 90);
}
function peachLeech(){
    document.getElementById("peachLeechClickCounter").style.display = "block";
    document.getElementById("image").style.display = "none";
    document.getElementById("fruit1").style.display = "none";
    document.getElementById("fruit2").style.display = "none";
    document.getElementById("fruit3").style.display = "none";
    document.getElementById("fruit4").style.display = "none";
    document.getElementById("fruit5").style.display = "none";
    document.getElementById("fruit6").style.display = "none";
    document.getElementById("fruit7").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("peachLeech").style.display = "block";
    document.getElementById("uhoh").play();
    document.getElementById("music")
    document.getElementById("body").style.animation = "turnBlack 4s";
    setTimeout(function(){
        document.getElementById("getReady").play();
    }, 7000);
    setTimeout(turnBlack, 4000);
    document.getElementById("peachLeech").style.left = Math.floor(Math.random() *90) + "%";
    document.getElementById("peachLeech").style.top = Math.floor(Math.random() * 90) + "%";
    setTimeout(getSmaller, 2000);
    var take = setInterval(function(){
        carClicks = carClicks - carClicks * .03;
    }, 2000)
    setInterval(function(){
        if (peachLeechclicks == 60){
            clearInterval(take);
            document.getElementById("peachLeech").style.display = "none";
            document.getElementById("body").style.animationName = "turnNormal";
            document.getElementById("body").style.backgroundColor = "white";
        }
    }, 0);
    setTimeout(function(){
        if (peachLeechclicks < 60){
            endPeachLeech();
            clearInterval(take);
        }
    }, 25000);
}
function endPeachLeech(){
    if (peachLeechclicks >= 60){
        document.getElementById("peachLeechClickCounter").style.display = "none";
        document.getElementById("peachLeech").style.display = "none";
        document.getElementById("image").style.display = "block";
        document.getElementById("footer").style.display = "block";
        document.getElementById("body").style.animationName = "turnNormal";
        document.getElementById("body").style.backgroundColor = "white";
    }else{
        document.getElementById("peachLeechClickCounter").style.display = "none";
        dust();
        document.getElementById("peachLeech").style.display = "none";
    }
}
function dust(){
    document.getElementById("dust").style.display = "block";
    document.getElementById("wind").play();
    document.getElementById("audio").pause();
    document.getElementById("zim").pause();
    document.getElementById("lost").style.display = "block";
}
function turnBlack(){
    document.getElementById("body").style.backgroundColor = "black";
}
function getSmaller(){
    document.getElementById("peachLeech").style.animationName = "peachLeech";
    document.getElementById("peachLeech").style.width = "500px";
    setInterval(peachPosition, 5000);
}
function peachPosition(){
    document.getElementById("peachLeech").style.top = Math.floor(Math.random() * 90) + "%";
    document.getElementById("peachLeech").style.left = Math.floor(Math.random() * 90) + "%";
}
function peachLeechAdd(){
    peachLeechclicks = peachLeechclicks + 1;
    if (peachLeechclicks == 60){
        document.getElementById("bowl").style.display = "block";
        document.getElementById("flour").style.display = "block";
        document.getElementById("yeast").style.display = "block";
        document.getElementById("sugar").style.display = "block";
        document.getElementById("cinnamon").style.display = "block";
        document.getElementById("water").style.display = "block";
        document.getElementById("peachLeechClickCounter").style.display = "none";
    }
    if (peachLeechclicks >= 60){
        document.getElementById("peachLeech").style.display = "none";
        if (music == 1){
            document.getElementById("audio").pause();
            document.getElementById("music").innerHTML = "Music On";
            document.getElementById("zim").play();
        }else{
            document.getElementById("zim").play();
        }
    }
}
function flourTrigger(){
    document.getElementById("flour").style.display = "none";
    document.getElementById("bowl").src = "Images/Bowl and flour.png";
    carClicks = carClicks + 15;
    document.getElementById("yeast").addEventListener("click", function(){
        document.getElementById("yeast").style.display = "none";
        document.getElementById("bowl").src = "Images/Bowl and yeast.png";
        carClicks = carClicks + 15;
        document.getElementById("sugar").addEventListener("click", function(){
            document.getElementById("sugar").style.display = "none";
            document.getElementById("bowl").src = "Images/Bowl and sugar.png";
            carClicks = carClicks + 15;
            document.getElementById("cinnamon").addEventListener("click", function(){
                document.getElementById("cinnamon").style.display = "none";
                document.getElementById("bowl").src = "Images/Bowl and cinnamon.png";
                document.getElementById("water").addEventListener("click", function(){
                    document.getElementById("water").style.display = "none";
                    document.getElementById("bowl").src = "Images/Bowl and poof.png";
                    setTimeout(function(){
                        startRaisinLoop();
                        document.getElementById("bowl").style.display = "none";
                    }, 3000);
                });
            });
        });
    });
}
function startRaisinLoop(){
    var raisin = setInterval(function(){
        raisins();
    }, 700);
    setTimeout(function(){
        clearInterval(raisin);
        if(raisinAmount == true){
            document.getElementById("llama").style.display = "block";
            document.getElementById("alpaca").style.display = "block";
            document.getElementById("llamaText").style.display = "block";
            document.getElementById("llama").style.left = "30%";
            document.getElementById("alpaca").style.left = "60%";
            document.getElementById("llama").style.top = "80%";
            document.getElementById("alpaca").style.top = "79%";
        }else{
            dust();
            document.getElementById("dust").style.transition = "all 1s"
            document.getElementById("dust").style.color = "lightblue";
        }
    }, 15000);
}
function raisins(){
    var raisin = document.createElement("img");
    raisin.setAttribute("src", "Images/raisins.png");
    raisin.setAttribute("class", "raisins");
    raisin.setAttribute("draggable", "false");
    raisin.style.zIndex = "1000";
    raisin.style.position = "absolute";
    raisin.onclick = function(e){
        raisinAmount = true;
        e.target.remove();
        carClicks = carClicks + 10;
    };
    raisin.style.position = "absolute";
    raisin.style.width = "100px";
    raisin.style.left = Math.floor(Math.random() * 100) + "%";
    raisin.style.top = Math.floor(Math.random() * 90) + "%";
    document.body.appendChild(raisin);
    setTimeout(function(){
        raisin.remove();
    }, 3000);
}
function playNope(){
    document.getElementById("nope").play();
}
function playEnemeySpotted(){
    document.getElementById("enemy").play();
}
function llamaClick(){
    llamaClicks = llamaClicks + 1;
}
function alpacaClick(){
    llamaClicks = llamaClicks - 1;
}
function firstForEverything(){
    if(firstClickUsed == false){
        document.getElementById("alert").style.display = "block";
        document.getElementById("achievement").innerHTML = achievement.firstClick;
    }
}
function hideAlert(){
    document.getElementById("alert").style.display = "none";
    firstClickUsed = true;
}
function achievementCheck(){
    if(carClicks == 1 && firstClickUsed == false){
        firstForEverything();
    }
}
setInterval(update, 0);
setInterval(updatePeachLeechClickCounter, 0);
setInterval(updateAutoClicks, 1000);
setInterval(achievementCheck, 0);