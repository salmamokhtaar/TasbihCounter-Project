const value = document.querySelector("#value")
const incremetButton = document.querySelector("#incrementBtn")
const decremetButton = document.querySelector("#decrementBtn")
const resetButton = document.querySelector("#resetBtn")

let startValue = 0;

incremetButton.addEventListener("click", function(){
    startValue++;
    value.innerHTML = startValue 

    if(startValue == 10){
        value.style.color = "red";
    }
    else{
        value.style.color = "black";
    }

})

decremetButton.addEventListener("click", function(){
   if(startValue >0){
    startValue--;
    value.textContent = startValue;

      if(startValue == 10){
        value.style.color = "red";
    }
    else{
        value.style.color = "black";
    }

   }

})
resetButton.addEventListener("click", function(){
    startValue = 0; 
    value.innerHTML = startValue ;
})

