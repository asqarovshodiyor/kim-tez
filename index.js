const elForm = document.querySelector("#form")
const elInput = document.querySelector("#input")
const resultPerson = document.querySelector(".person")
const resultBicycli = document.querySelector(".bicycli")
const resultCar = document.querySelector(".car")
const resultPlane = document.querySelector(".plane")


//score

personScore = 3.6;
bicycliScore = 20.1;
carScore = 70;
planeScore = 800;

elForm.addEventListener("submit",function(evt){
    evt.preventDefault()
    let inputResult = Number(elInput.value)
    
    
    if(inputResult >= 0 && !isNaN (inputResult)){
        elInput.style.border = "3px solid green";
        
        //person
        let hourPerson = Math.floor(elInput.value / personScore) + "hour";
        let minutePerson = (((elInput.value / personScore).toFixed(2) - Math.floor(elInput.value / personScore))
        *60).toFixed(0) + "minute";
        
        resultPerson.textContent = hourPerson + minutePerson
        
        // Bicycli
        let hourBicycli = Math.floor(elInput.value / bicycliScore) + "hour";
        let minuteBicycli = (((elInput.value / bicycliScore).toFixed(2) - Math.floor(elInput.value / bicycliScore))
        *60).toFixed(0) + "minute";
        
        resultBicycli.textContent = hourBicycli + minuteBicycli

        //Car

        let hourCar = Math.floor(elInput.value / carScore) + "hour";
        let minuteCar = (((elInput.value / carScore).toFixed(2) - Math.floor(elInput.value / carScore))
        *60).toFixed(0) + "minute";
        
        resultCar.textContent = hourCar + minuteCar


        //Plane
        let hourPlane = Math.floor(elInput.value / planeScore) + "hour";
        let minutePlane = (((elInput.value / planeScore).toFixed(2) - Math.floor(elInput.value / planeScore))
        *60).toFixed(0) + "minute";
        
        resultPlane.textContent = hourPlane + minutePlane


    }
})