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
// const left = document.getElementById("left");
// const right = document.getElementById("right");
const image = document.getElementById("caty");
const choName = document.querySelector(".choName");
const select = document.querySelector("#petType");
const but = document.getElementById("submit");
const input = document.getElementById("input")
const header = document.getElementById("headi")


let mate = ""

but.addEventListener("click", ()=>{
    
    if(select.value === "Cat"){
    //  image.src = "./catNor.gif";
    mate = Cat
}
    
 
 });
 
 but.addEventListener("click", ()=>{
     
     if(select.value === "Dog"){
     
    //    image.src = "./dogNor.gif"
       mate = Dog
    }
    
  });
 
  but.addEventListener("click", ()=>{
     
     if(select.value == "Rabbit"){
     mate = Rabbit
    //   image.src = "./rabbitNor.gif"}
     }
  });
 
  but.addEventListener("click", ()=>{
     
     if(select.value == "Monkey"){
     mate = Monkey
    //   image.src = "./monkeyNor.gif"}
     }
  });
 
  but.addEventListener("click", ()=>{
     
     if(select.value == "Donkey"){
     mate = Donkey
    //   image.src = "./dunkeyNor.gif"}
     }
      
  });


  but.addEventListener("click",()=>{
    if(select.value == "Cat1"){
        mate = Cat1
    }
})
 
  but.addEventListener("click",()=>{
    if(input.value!=="")
    header.textContent=`Your ${select.value} name is: ${input.value}`

})



 


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
    // get petinfo(){
    //     return `${this.happiness},${this.cleanliness},${this.hunger},${this.thirst},${this.health}`
    //  }
}


//subclass
class PetInfo extends Pet {
    constructor(name, type, happiness, cleanliness, hunger, thirst, health){
        super(happiness, cleanliness, hunger, thirst, health);
        this.name = name;
        this.type = type;
    }
}



const Cat = new Pet(50,50,50,50,75);
const Dog = new Pet(50,50,50,50,50);
const Rabbit = new Pet(50,50,50,50,80);
const Monkey = new Pet(50,50,50,50,50);
const Donkey = new Pet(50,50,50,50,50);
// subclass
const Cat1 = new PetInfo("Cat1", "cybercat",100 , 100, 100, 100, 100)
// console.log(Cybercat.Pet.petinfo)




function feedPet() {
    // con
    mate.hunger -= 10;
    mate.cleanliness -= 5;
    mate.happiness -= 5;
    // pro
    mate.thirst += 5;
    mate.health -= 5;
}

function giveDrink() {
    // con
    mate.hunger -= 10;
    mate.cleanliness -= 10;
    mate.thirst -= 10;
    // pro
    mate.happiness += 5;
    mate.health += 10;
}

function playwithpet() {
    // con
    mate.happiness +=10;
    mate.health += 10;
    mate.hunger += 5;
    mate.thirst += 5;
}

function cleanPet() {
    // con
    mate.health += 10;
    mate.hunger += 5;
    mate.cleanliness += 5;
    // pro
    mate.happiness -= 5;
};




function checkCondition() {
    if (mate.health >= 100){
        mate.health = 100;
    } 
    if (mate.health <= 0){
        mate.health = 0;
    }
    if (mate.hunger <= 0){
        mate.hunger = 0;
    } 
    if (mate.hunger >= 100){
        mate.hunger = 100;
    } 
    if (mate.thirst >= 100){
        mate.thirst = 100;
    } 
    if (mate.thirst <= 0){
        mate.thirst = 0;
    } 
    if (mate.happiness >= 100){
        mate.happiness = 100;
    } 
    if (mate.happiness <= 0){
        mate.happiness = 0;
    } 
    if (mate.cleanliness <= 0){
        mate.cleanliness = 0;
    } 
    if (mate.cleanliness >= 100){
        mate.cleanliness =100;
    };

}    

function renderData() {
//     Pet.petinfo()
// Pet.petinfo.cybercat()
// }

        health.textContent = `health: ${mate.health}`;
        thirst.textContent = `thirst: ${mate.thirst}`;
        hunger.textContent = `hunger: ${mate.hunger}`;
        happiness.textContent = `happiness: ${mate.happiness}`;
        cleanliness.textContent = `cleanliness: ${mate.cleanliness}`;
    }

feed.addEventListener("click", () => {
    this.feedPet();
    checkCondition();
    renderData();
});

givedrink.addEventListener("click", () => {
    this.giveDrink();
    checkCondition();
    renderData();
});
play.addEventListener("click", () => {
    this.playwithpet();
    checkCondition();
    renderData();
});

clean.addEventListener("click", () => {
    this.cleanPet();
    checkCondition();
    renderData();
});




renderData()

const timingFunction = () => {
    window.setTimeout(() => {
        mate.hunger -= 2;
        mate.thirst -= 2;
        mate.happiness -= 2;
        mate.cleanliness -= 2;
        mate.health -= 2;
        
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