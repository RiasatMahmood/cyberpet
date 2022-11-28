// // let hello = "hi my name is cyberpet"
// // console.log(hello)

// const food = document.querySelector("#food")
// const play = document.querySelector("#play")
// const clean = document.querySelector("#clean")


// class Pet {
//     constructor(name, age, type,) {
//         this.name = name;
//         this.age = age;
//         this.type = type;

//     }

//     get PetInfo() {
//         return  `hi my name is ${this.name}, i am ${this.age} years old and im a ${this.type}`
//     }

// }

// class PetDetails extends Pet {
//     constructor(name, age, type, petHealth , playedWith, cleaned){
//     super(name, age, type)
//     this.health+petHealth
//     this.played+playedWith
//     this.cleaned+cleaned
//     }
// }

// function increaseHealth(){
//     if (this.petHealth <=100){
//     }
// }

// ////  click event

// food.addEventListener("click",()=>{
//     increaseHealth()
// });

// ///^^^add counter - if clicked so many times then reduce health via different function


// play.addEventListener("click",()=>{
//     increaseHealth()
// })

// clean.addEventListener("click",()=>{
//     increaseHealth()
// })





// const cybercat = new Pet("Cybercat", 1 , "cat" )
// const cyberdog = new Pet("Cyberdog", 3, "dog")
// const cyberdog2 = new PetDetails( "cyberdog2", 4, "cat", "", "", "")



// console.log(cyberdog2)


// ////////timer 

// var seconds = 00; 
//   var tens = 00; 
//   var appendTens = document.getElementById("tens")
//   var appendSeconds = document.getElementById("seconds")
//   var buttonStart = document.getElementById('button-start');
//   var buttonStop = document.getElementById('button-stop');
//   var buttonReset = document.getElementById('button-reset');
//   var Interval ;

//   buttonStart.onclick = function() {
    
//     clearInterval(Interval);
//      Interval = setInterval(startTimer, 10);
//   }
  
//     buttonStop.onclick = function() {
//        clearInterval(Interval);
//   }
  

//   buttonReset.onclick = function() {
//      clearInterval(Interval);
//     tens = "00";
//   	seconds = "00";
//     appendTens.innerHTML = tens;
//   	appendSeconds.innerHTML = seconds;
//   }
  
   
  
//   function startTimer () {
//     tens++; 
    
//     if(tens <= 9){
//       appendTens.innerHTML = "0" + tens;
//     }
    
//     if (tens > 9){
//       appendTens.innerHTML = tens;
      
//     } 
    
//     if (tens > 99) {
//       console.log("seconds");
//       seconds++;
//       appendSeconds.innerHTML = "0" + seconds;
//       tens = 0;
//       appendTens.innerHTML = "0" + 0;
//     }
    
//     if (seconds > 9){
//       appendSeconds.innerHTML = seconds;
//     }













// // class Pet {
// //     constructor(name) {
// //         this.name = name;
// //         this.drinkLevel = 10;
// //         this.foodLevel = 10;
// //         this.happiness = 10;
// //         this.health = 25
        
// //         feedpet ()


// //         if (this.health <10){
// //             console.log("im not feeling well")}

// //         else if(this.health >20 && this.health <70){
// //             console.log("im doing alright")
// //         }

// //         else{
// //             console.log("i feel great")
// //         }
    

        
// //     }
// //     get addDrink () {
// //         return `Drink Level:${this.drinkLevel+=5} `;
// //     }
// //     get addfood() {
// //         return `Food Level:${this.foodLevel+=5}`
// //     }
// //     get addfood() {
// //         return `Food Level:${this.foodLevel+=5}`
// //     }
// //     get play() {
// //         return `happiness:${this.happiness+=5}`
// //     }
// //     get sleep() {
// //         return `health Level:${this.health+=5}`
// //     }
// //     petHunger (hungerLevel) {
// //         this.hungerLevel = hungerLevel;
// //         if (this.hungerLevel == "hungry") {
// //             return `Ok, ${this.name}, I'll give you some ${this.diet[0]}.`
// //         } else {
// //             return `${this.name}, the food can wait until later`
// //         }
// //     }
// //     petCleanliness (cleanLevel) {
// //         this.cleanLevel = cleanLevel;
// //         if (this.cleanLevel == "unclean") {
// //             return `Ok, ${this.name}, I'll give you a wash.`
// //         } else {
// //             return `${this.name}, you don't need a wash yet`
// //         }
// //     }
    
// // }

// // const dog = new Pet("dog");
// // const cat = new Pet("cat");
// // console.log(dog.addfood);
// // console.log(dog.addfood);
// // console.log(dog.addfood);
// // console.log(dog.addDrink)
// // console.log(dog.addDrink)
// // console.log(dog);
// // // console.log(cat.addfood)
// // // console.log(cat.addfood)
// // // console.log(cat.addfood)
// // // console.log(cat)



// //need some if stmts and work out a setinerval where the health goes down auto