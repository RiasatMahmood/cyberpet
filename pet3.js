//displayinfo
const health=document.getElementById("health");
const thirst = document.getElementById("thirst");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");

//buttons
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const givedrink = document.getElementById("drink");
const clean = document.getElementById("clean");
const left = document.getElementById("left");
const right = document.getElementById("right");


class Pet {
    constructor(happiness, cleanliness, hunger, thirst, health){
        //constructor(){
        // this.name = name;
        // this.type = type;
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.hunger =hunger;
        this.thirst =thirst;
        this.health =health;
    }
    get petinfo(){
        return `${this.happiness},${this.cleanliness},${this.hunger},${this.thirst},${this.health}`
     }
}


const Cybercat = new Pet(10, 20, 30, 40, 50)
const Cyberdog= new Pet(60,70,80,90,100)
console.log(Cybercat)
console.log(Cybercat.Pet.petinfo)



function feedPet() {
    // con
    this.hunger -= 10;
    this.cleanliness -= 5;
    this.happiness -= 5;
    // pro
    this.thirst += 5;
    this.health -= 5;
}

function giveDrink() {
    // con
    this.hunger -= 10;
    this.cleanliness -= 10;
    this.thirst -= 10;
    // pro
    this.happiness += 5;
    this.health += 10;
}

function playwithpet() {
    // con
    this.happiness +=10;
    this.health += 10;
    this.hunger += 5;
    this.thirst += 5;
}

function cleanPet() {
    // con
    this.health += 10;
    this.hunger += 5;
    this.cleanliness += 5;
    // pro
    this.happiness -= 5;
};




function checkCondition() {
    if (Pet.health >= 100){
        Pet.health = 100;
    } 
    if (Pet.health <= 0){
        Pet.health = 0;
    }
    if (Pet.hunger <= 0){
        Pet.hunger = 0;
    } 
    if (Pet.hunger >= 100){
        Pet.hunger = 100;
    } 
    if (Pet.thirst >= 100){
        Pet.thirst = 100;
    } 
    if (Pet.thirst <= 0){
        Pet.thirst = 0;
    } 
    if (Pet.happiness >= 100){
        Pet.happiness = 100;
    } 
    if (Pet.happiness <= 0){
        Pet.happiness = 0;
    } 
    if (Pet.cleanliness <= 0){
        Pet.cleanliness = 0;
    } 
    if (Pet.cleanliness >= 100){
        Pet.cleanliness =100;
    };

}    

function renderData() {
//     Pet.petinfo()
// Pet.petinfo.cybercat()
// }

        health.textContent = `health: ${Pet.health}`;
        thirst.textContent = `thirst: ${Pet.thirst}`;
        hunger.textContent = `hunger: ${Pet.hunger}`;
        happiness.textContent = `happiness: ${Pet.happiness}`;
        cleanliness.textContent = `cleanliness: ${Pet.cleanliness}`;
    }

feed.addEventListener("click", () => {
    Pet.feedPet();
    checkCondition();
    renderData();
});

givedrink.addEventListener("click", () => {
    Pet.giveDrink();
    checkCondition();
    renderData();
});
play.addEventListener("click", () => {
    Pet.playwithpet();
    checkCondition();
    renderData();
});

clean.addEventListener("click", () => {
    Pet.cleanPet();
    checkCondition();
    renderData();
});




renderData()

const timingFunction = () => {
    window.setTimeout(() => {
        Pet.hunger -= 2;
        Pet.thirst -= 2;
        Pet.happiness -= 2;
        Pet.cleanliness -= 2;
        Pet.health -= 2;
        
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
            Pet.health =0;
        }

            renderData();
            randomgift();

    },1000)
 }

 randomgift()