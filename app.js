const colorGradient = ['a','b','c','d','f','0','1','2','3','4','5','6','7','8','9'];
const body = document.querySelector("body");
const container = document.querySelector(".clickMeButton");
const colorText = document.querySelector("#color-text")
function getGradient() {
    let color ="#"
    for(let i = 0; i < 6; i++){
      const randomNumber  = Math.trunc(Math.random() * colorGradient.length)
      color += colorGradient[randomNumber]
    }
    return color
}


function setGradient() {
    const colorOne = getGradient();
    const colorTwo = getGradient();
    const randomDeg = Math.trunc(Math.random() * 360);
    const gradients = `linear-gradient(${randomDeg}deg, ${colorOne}, ${colorTwo})`;
    body.style.background = gradients
    colorText.textContent = gradients
}
container.addEventListener("click", setGradient)