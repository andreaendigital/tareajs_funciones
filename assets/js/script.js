function pintar(elem, color = "green") {
    elem.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
pintar(ele);
ele.addEventListener("click", (e) => {
    pintar(e.target, "yellow");
});