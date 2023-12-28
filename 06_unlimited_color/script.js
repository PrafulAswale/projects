// generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  const color = "#";
  let colorCode = "";

  for (let i = 0; i < 6; i++) {
    colorCode += hex.charAt(Math.floor(Math.random() * 16) - 1);
  }

    return `${color}${colorCode}`;
};
let idInterval;
document.getElementById('start').addEventListener('click', ()=>{
   if(!idInterval){
    idInterval =  setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
   }
    console.log(idInterval);
})
document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(idInterval);
    idInterval = null;
})
