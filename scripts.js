var music = 0;
var idFruit = document.getElementById("fruit");
var carClicks = 0;
var tuberClicks = 0;
var autoClicks = 0;
var showHide = false;
var fruit1 = Math.floor(Math.random() * 1025);
var fruit1ClckTimes = 0;
var fruit2 = Math.floor(Math.random() * 1025);
var fruit2ClckTimes = 0;
var fruit3 = Math.floor(Math.random() * 1025);
var fruit3ClckTimes = 0;
var fruit4 = Math.floor(Math.random() * 1025);
var fruit4ClckTimes = 0;
var fruit5 = Math.floor(Math.random() * 1025);
var fruit5ClckTimes = 0;
var fruit6 = Math.floor(Math.random() * 1025);
var fruit6ClckTimes = 0;
var fruit7ClckTimes = 0;
var fruit7 = Math.floor(Math.random() * 1025);
var peachLeechclicks = 0;
var raisinClicks = 0;
var raisinForRemove = [];
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
function save(){
    window.localStorage.setItem("numberSave", carClicks);
    window.localStorage.setItem("autoclicks", autoClicks);
    console.log("Game Saved!");
}
function load(){
    carClicks = parseInt(window.localStorage.getItem("numberSave"));
    autoClicks = parseInt(window.localStorage.getItem("autoclicks"));
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
    if (confirm("Are you sure you want to reset score?")){
        window.localStorage.setItem("numberSave", 0);
        window.localStorage.setItem("autoclicks", 0);
        carClicks = parseInt(window.localStorage.getItem("numberSave"));
        autoClicks = parseInt(window.localStorage.getItem("autoclicks"));
    }
}
function add(){
    carClicks = carClicks + 1
    document.getElementById("clicks").innerHTML = carClicks;
}
function gas87(){
    if (carClicks >= 300){
        carClicks = carClicks - 300;
        autoClicks = autoClicks + 1;
    }
}
function show(){
    if (showHide == false){
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
    document.getElementById("fruit1").style.top = Math.floor(Math.random() * 1025) + "px";
    document.getElementById("fruit2").style.top = Math.floor(Math.random() * 1025) + "px";
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
    document.getElementById("fruit7").style.top = Math.floor(Math.random() * 1025);
    if (fruit7ClckTimes < 2){
        document.getElementById("fruit7").style.top = fruit7 + "px";
    }else{
        document.getElementById("fruit7").style.display = "none";
    }
}
function movefruit1(){
    updateFruit()
    fruit1ClckTimes = fruit1ClckTimes + 1;
    carClicks = carClicks + 15;
    document.getElementById("fruit1").style.top = Math.floor(Math.random() * 1025);
    if (fruit1ClckTimes < 6){
        document.getElementById("fruit1").style.top = fruit1 + "px";
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
    document.getElementById("fruit2").style.top = Math.floor(Math.random() * 1025);
    if (fruit2ClckTimes < 6){
        document.getElementById("fruit2").style.top = fruit2 + "px";
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
        document.getElementById("fruit3").style.top = fruit3 + "px";
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
        document.getElementById("fruit4").style.top = fruit4 + "px";
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
        document.getElementById("fruit5").style.top = fruit5 + "px";
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
        document.getElementById("fruit6").style.top = fruit6 + "px";
    }else{
        document.getElementById("fruit6").style.display = "none";
    }
}
function updateFruit(){
    fruit1 = Math.floor(Math.random() * 1025);
    fruit2 = Math.floor(Math.random() * 1025);
    fruit3 = Math.floor(Math.random() * 1025);
    fruit4 = Math.floor(Math.random() * 1025);
    fruit5 = Math.floor(Math.random() * 1025);
    fruit6 = Math.floor(Math.random() * 1025);
    fruit7 = Math.floor(Math.random() * 1025);
}
function peachLeech(){
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
    document.getElementById("body").style.animation = "turnBlack 4s";
    setTimeout(turnBlack, 4000);
    document.getElementById("peachLeech").style.left = Math.floor(Math.random() * 1335) + "px";
    document.getElementById("peachLeech").style.top = Math.floor(Math.random() * 1000) + "px";
    setTimeout(getSmaller, 2000);
    var take = setInterval(function(){
        carClicks = carClicks - carClicks * .03;
    }, 2000)
    setInterval(function(){
        if (peachLeechclicks == 100){
            clearInterval(take);
            document.getElementById("peachLeech").style.display = "none";
            document.getElementById("image").style.display = "block";
            document.getElementById("footer").style.display = "block";
            document.getElementById("body").style.animationName = "turnNormal";
            document.getElementById("body").style.backgroundColor = "white";
        }
    }, 0);
    setTimeout(function(){
        if (peachLeechclicks < 100){
            endPeachLeech();
            clearInterval(take);
        }
    }, 25000);
}
function endPeachLeech(){
    if (peachLeechclicks >= 100){
        document.getElementById("peachLeech").style.display = "none";
        document.getElementById("image").style.display = "block";
        document.getElementById("footer").style.display = "block";
        document.getElementById("body").style.animationName = "turnNormal";
        document.getElementById("body").style.backgroundColor = "white";
    }else{
        document.getElementById("dust").style.display = "block";
        document.getElementById("peachLeech").style.display = "none";
        document.getElementById("wind").play();
        document.getElementById("audio").pause();
    }
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
    document.getElementById("peachLeech").style.top = Math.floor(Math.random() * 1000) + "px";
    document.getElementById("peachLeech").style.left = Math.floor(Math.random() * 1335) + "px";
}
function peachLeechAdd(){
    peachLeechclicks = peachLeechclicks + 1;
    if (peachLeechclicks == 100){
        var reapeatRaisins = setInterval(raisins, 3000);
        setTimeout(function(){
            if (raisinClicks >= 10){
                clearInterval(reapeatRaisins);
                document.getElementsByName("zim").pause();
                raisinForRemove.every().remove();
            }else{
                var createH2 = document.createElement("h2");
                createH2.innerHTML = "You lost, sad";
                document.body.appendChild(createH2);
                window.localStorage.setItem("numberSave", 0);
                window.localStorage.setItem("autoClicks", 0);
                raisinForRemove.every().remove();
                clearInterval(reapeatRaisins);
                document.getElementById("image").style.display = "none";
                document.getElementById("span").style.display = "none";
                document.getElementById("footer").style.display = "none";
                document.getElementById("gas87").style.display = "none";
                document.getElementById("autoclicks").style.display = "none";
            }
        }, 20000);
    }
    if (peachLeechclicks >= 100){
        document.getElementById("peachLeech").style.display = "none";
        document.getElementById("span").style.display = "block";
        if (music == 1){
            document.getElementById("audio").pause();
            document.getElementById("music").innerHTML = "Music On";
            document.getElementById("zim").play();
        }else{
            document.getElementById("zim").play();
        }
        if (showHide == false){
            document.getElementById("autoclicks").style.display = "none";
        }else{
            document.getElementById("autoclicks").style.display = "block";
        }
    }
}
function raisins(){
    var raisin = document.createElement("img");
    raisinForRemove.push("raisins");
    raisin.setAttribute("src", "Images/raisins.png");
    raisin.setAttribute("class", "raisins");
    raisin.setAttribute("draggable", "false");
    raisin.onclick = function (e) {
        e.target.remove();
        carClicks = carClicks + 10;
    };
    raisin.style.position = "absolute";
    raisin.style.width = "100px";
    raisin.style.left = Math.floor(Math.random() * 100) + "%";
    raisin.style.top = Math.floor(Math.random() * 90) + "%";
    document.body.appendChild(raisin);
}
setInterval(update, 0);
setInterval(updateAutoClicks, 1000);