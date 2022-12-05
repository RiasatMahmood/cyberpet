
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
    constructor(name , type, happiness, cleanliness, hunger, thirst, health){
        this.name = name;
        this.type = type;
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.hunger =hunger;
        this.thirst =thirst;
        this.health =health;
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
console.log(cybercat)

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

