// const health = document.getElementById("health");
// const thirst = document.getElementById("thirst");
// const hunger = document.getElementById("hunger");
// const happiness = document.getElementById("happiness");
// const cleanliness = document.getElementById("cleanliness");
// const feed = document.getElementById("feed");
// const play = document.getElementById("play");
// const givedrink = document.getElementById("drink");
// const clean = document.getElementById("clean");
// const image = document.getElementById("catpic1.jpeg");



// let pet = {
//     hunger: 50,
//     thirst: 50,
//     happiness: 50,
//     cleanliness: 50,
//     health: 100,

//     feedPet() {
//         // con
//         this.hunger -= 10;
//         this.cleanliness -= 10;
//         this.happiness -= 5;
//         // pro
//         this.thirst += 10;
//         this.health -= 10;
//     },
//     giveDrink() {
//         // con
//         this.hunger -= 10;
//         this.cleanliness -= 10;
//         this.thirst -= 10;
//         // pro
//         this.happiness += 5;
//         this.health += 10;
//     }
    

//     // reducehealth() {
//     //     this.health -= 10;
//     // }
// }

// function checkCondition() {
//     if (pet.health >= 100){
//         pet.health = 100;
//     } 
//     if (pet.health <= 0){
//         pet.health = 0;
//     }
//     if (pet.hunger <= 0){
//         pet.hunger = 0;
//     } 
//     if (pet.hunger >= 100){
//         pet.hunger = 100;
//     } 
//     if (pet.thirst >= 100){
//         pet.thirst = 100;
//     } 
//     if (pet.thirst <= 0){
//         pet.thirst = 0;
//     } 
//     if (pet.happiness >= 100){
//         pet.happiness = 0;
//     } 
//     if (pet.happiness <= 0){
//         pet.happiness = 0;
//     } 
//     if (pet.cleanliness <= 0){
//         pet.cleanliness = 0;
//     } 
//     if (pet.cleanliness >= 100){
//         pet.cleanliness =100;
//     } 
//     if (pet.cleanliness >= 100){
//         pet.cleanliness =100;
//     } 
//     if (pet.cleanliness <= 0){
//         pet.cleanliness =0;
//     } 

// };

// function reducehealth(){
//     this.hunger += 10;
//         this.cleanliness += 10;
//         this.happiness -= 5;
//         // pro
//         this.thirst += 10;
//         this.health -= 10;

// }

// function renderData() {
//     health.textContent = `health: ${pet.health}`;
//     thirst.textContent = `thirst: ${pet.thirst}`;
//     hunger.textContent = `hunger: ${pet.hunger}`;
//     happiness.textContent = `happiness: ${pet.happiness}`;
//     cleanliness.textContent = `cleanliness: ${pet.cleanliness}`;
// }

// feed.addEventListener("click", () => {
//     pet.feedPet();
//     checkCondition();
//     flag = true;
//     renderData();
// });

// givedrink.addEventListener("click", () => {
//     pet.giveDrink();
//     checkCondition();
//     renderData();
// });

// renderData();



// ///myTimeout = setTimeout(function, milliseconds)

// myTimeout = setTimeout(reducehealth(), 1000)



// setTimeout();
// let timeout = setTimeout( ,5000) 


// let flag = true

// function setTimeout(() => { 
//     if (flag=false){
//         setTimeout()
//             }
//             else{(this.health -=20)
//             setTimeout}; 

// }, 5000);

// setTimeout(5000)
//     if (flag=false){
//     }
//     else{(this.health -=10)}
//     // myTimeout()

// const health = document.getElementById("health");
// const thirst = document.getElementById("thirst");
// const hunger = document.getElementById("hunger");
// const happiness = document.getElementById("happiness");
// const cleanliness = document.getElementById("cleanliness");
// const feed = document.getElementById("feed");
// const play = document.getElementById("play");
// const givedrink = document.getElementById("drink");
// const clean = document.getElementById("clean");
// const left = document.getElementById("left")
// const right = document.getElementById("right")


//dropdown menu - overlay pop up - choose pet and that drops the info down to main screen

//might just use a radio button cycle through the pets for now - issue is youll need to get the button off the screen after the selection



//hwo do i access the data from pets details and show here - 
// call on the pets(cybercat) which will push through to show next profile
// do the profiles need to be in an array or a database???? research




//function all the for loop and profile
////for pervious pet for if (i <= 0) ; pet.details.length ; i--
                       //return profile 
            ////and to go next for i=-1 ; pet.details.length ; i++
                 ////return profile
                               
       // profile = conected to profile array/ or class constructor?????
       //could just use get/setters to pull petdetails

// let 


// class PetDetails {
//     constructor(name , type , happiness, cleanliness, hunger, thirst, health){
//         this.name = name;
//         this.type = type;
//         this.happiness = happiness;
//         this.cleanliness = cleanliness;
//         this,hunger =hunger;
//         this.thirst =thirst;
//         this.health =health
//      }

    
// }
//buttons cycle through pets - whilst dislay mini stats - mini choose button with in - will have a lot of css involved --- might just need to be on z index----

// left.addEventListener("click", () => {
//     pet.feedPet();
//     checkCondition();
//     renderData();
// });

// right.addEventListener("click", () => {
//     pet.feedPet();
//     checkCondition();
//     renderData();
// });


// const cybercat = new PetDetails("Cybercat", "cat", "10", "20", "30", "40", "50")
// const cybercat2 = new PetDetails("Cybercat2","cat", "60", "70", "80", "90", "100")
// const cyberdog = new PetDetails("Cyberdog", "dog", "10", "20", "30", "40","50")
// const cyberdog2 = new PetDetails( "cyberdog2", "cat","60", "70", "80", "90", "100",)



// let pet = {
//     hunger: 50,
//     thirst: 50,
//     happiness: 50,
//     cleanliness: 50,
//     health: 50,



//displayinfo
const health = document.getElementById("health");
const thirst = document.getElementById("thirst");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");

//buttons
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const givedrink = document.getElementById("drink");
const clean = document.getElementById("clean");
const left = document.getElementById("left")
const right = document.getElementById("right")

class PetDetails {
    constructor(name , type){//, "happiness", cleanliness, hunger, thirst, health){
        this.name = name;
        this.type = type;
        this.happiness = 100;
        this.cleanliness = 100;
        this.hunger =100;
        this.thirst =100;
        this.health =100;
     }

    //  get petinfo(){
    //     return `${this.happiness},${this.cleanliness},${this.hunger},${this.thirst},${this.health}`
    //  }

     feedPet() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 5;
        this.happiness -= 5;
        // pro
        this.thirst += 5;
        this.health -= 5;
    }
    giveDrink() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 10;
        this.thirst -= 10;
        // pro
        this.happiness += 5;
        this.health += 10;
    }
    playwithpet() {
        // con
        this.happiness +=10;
        this.health += 10;
        this.hunger += 5;
        this.thirst += 5;
    }

    cleanPet() {
        // con
        this.health += 10;
        this.hunger += 5;
        this.cleanliness += 5;
        // pro
        this.happiness -= 5;
    }

    }
// const Cybercat = new PetDetails("Cybercat", "cat", "10", "20", "30", "40", "50");
// const Cybercat2 = new PetDetails("Cybercat2","cat", "60", "70", "80", "90", "100");
// const cyberdog = new PetDetails("Cyberdog", "dog", "10", "20", "30", "40","50");
// const cyberdog2 = new PetDetails( "cyberdog2", "cat","60", "70", "80", "90", "100");
     



const cybercat = new PetDetails("Cybercat", "cat", 10, 20, 30, 40, 50)
// const cybercat2 = new PetDetails("Cybercat2","cat", "60", "70", "80", "90", "100")
// const cyberdog = new PetDetails("Cyberdog", "dog", "10", "20", "30", "40","50")
// const cyberdog2 = new PetDetails( "cyberdog2", "cat","60", "70", "80", "90", "100")

function checkCondition() {
    if (PetDetails.health >= 100){
        PetDetails.health = 100;
    } 
    if (PetDetails.health <= 0){
        PetDetails.health = 0;
    }
    if (PetDetails.hunger <= 0){
        PetDetails.hunger = 0;
    } 
    if (PetDetails.hunger >= 100){
        PetDetails.hunger = 100;
    } 
    if (PetDetails.thirst >= 100){
        PetDetails.thirst = 100;
    } 
    if (PetDetails.thirst <= 0){
        PetDetails.thirst = 0;
    } 
    if (PetDetails.happiness >= 100){
        PetDetails.happiness = 100;
    } 
    if (PetDetails.happiness <= 0){
        PetDetails.happiness = 0;
    } 
    if (PetDetails.cleanliness <= 0){
        PetDetails.cleanliness = 0;
    } 
    if (PetDetails.cleanliness >= 100){
        PetDetails.cleanliness =100;
    } 


};

function renderData() {
    // cybercat.petinfo()
        health.textContent = `health: ${PetDetails.health}`;
        thirst.textContent = `thirst: ${PetDetails.thirst}`;
        hunger.textContent = `hunger: ${PetDetails.hunger}`;
        happiness.textContent = `happiness: ${PetDetails.happiness}`;
        cleanliness.textContent = `cleanliness: ${PetDetails.cleanliness}`;
    }

feed.addEventListener("click", () => {
    PetDetails.feedPet();
    checkCondition();
    renderData();
});

givedrink.addEventListener("click", () => {
    PetDetails.giveDrink();
    checkCondition();
    renderData();
});
play.addEventListener("click", () => {
    PetDetails.playwithpet();
    checkCondition();
    renderData();
});

clean.addEventListener("click", () => {
    PetDetails.cleanPet();
    checkCondition();
    renderData();
});




renderData()

const timingFunction = () => {
    window.setTimeout(() => {
        PetDetails.hunger -= 2;
        PetDetails.thirst -= 2;
        PetDetails.happiness -= 2;
        PetDetails.cleanliness -= 2;
        PetDetails.health -= 2;
        
        checkCondition()
        renderData();
        timingFunction();
        
    }, 10000);
}
timingFunction();

 const randomgift=() => {
    window.setTimeout(() => {
        let num1 = Math.ceil(Math.random()*100)
        if (num1 == 20){
            PetDetails.health =0;
        }

            renderData();
            randomgift();

    },1000)
 }

 randomgift()







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


// const cybercat = new Pet("Cybercat", 1 , "cat" )
// const cyberdog = new Pet("Cyberdog", 3, "dog")
// const cyberdog2 = new PetDetails( "cyberdog2", 4, "cat", "", "", "")

           
// class pet {
//     constructor(name , type , happiness, cleanliness, hunger, thirst, health){
//         this.name = name;
//         this.type = type;
//         this.happiness = happiness;
//         this.cleanliness = cleanliness;
//         this,hunger =hunger;
//         this.thirst =thirst;
//         this.health =health
//     }
//}




//  const startTimeoutFunction = setTimeout(doSomething, 2000);

// function doSomething() {
//     // do stuff
// }

// function stopTimeoutFunction() {
//     clearTimeout(startTimeoutFunction);
// }



// let =num1

// num1 = Math.ceil(Math.random()*1000)
//         if (num1 = 20){
//             pet.health =0;   

// Math.ceil(Math.random(10))

// const randomgift {
//     if (i >9)

// }




// function reducehealth(){
//         this.hunger += 10;
//             this.cleanliness += 10;
//             this.happiness -= 5;
//             // pro
//             this.thirst += 10;
//             this.health -= 10;


// const timer = setTimeout((){
//     reducehealth()
//     timer()
// } , 10000)

// {}

// timer()