let duck = document.getElementById("duck");
let points = document.getElementById("points");
let texteTimer = document.getElementById("timer");
let compteur = 0;
let timer=10;





function commencer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            texteTimer.innerText = "Temps : "+timer+" secondes"
        }else{
            texteTimer.innerText = "Partie terminée !"
        }
        },1000);
    compteur = 0;
    timer=10;
    duck.style.position="relative";
    duck.style.top=Math.floor(Math.random() * 100)+"%";
    duck.style.left=Math.floor(Math.random() * 100)+"%";
    points.innerText = "Points : "+compteur;
}

function clicCanard(){
    if(timer>0){
        duck.style.top=Math.floor(Math.random() * 100)+"%";
        duck.style.left=Math.floor(Math.random() * 100)+"%";
        compteur++;
        points.innerText = "Points : "+compteur;
    }   
}