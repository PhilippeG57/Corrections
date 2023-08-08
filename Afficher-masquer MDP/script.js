let moveButton = document.getElementById("moveButton");
moveButton.addEventListener("mouseover", change);

function change() {
    moveButton.style.position = "absolute";
    moveButton.style.left = Math.floor(Math.random() * 90) + "vw";
    moveButton.style.top = Math.floor(Math.random() * 90) + "vh";
}