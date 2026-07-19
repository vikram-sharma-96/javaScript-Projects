const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
console.log(randomColor());

let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changingColor,1000); //using setInterval for changing desired think according to our given time//
  }
    function changingColor(){
     document.body.style.backgroundColor = randomColor();
    } 
};
const stopChangingColor = function(){
     clearInterval(intervalId); //useful for stoping setInterval//
     intervalId = null;
}
document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);