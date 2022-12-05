//displayinfo
const health=document.getElementById("health");
const thirst = document.getElementById("thirst");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");
const name = document.getElementById("name");
const type = document.getElementById("type")

//buttons
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const givedrink = document.getElementById("drink");
const clean = document.getElementById("clean");
// const left = document.getElementById("left");
// const right = document.getElementById("right");
const image = document.getElementById("pics");
// const choName = document.querySelector(".choName");
const select = document.getElementById("petType");
const start = document.getElementById("submit");
const input = document.getElementById("input")
const hi = document.getElementById("hi")


let mate = ""

start.addEventListener("click", ()=>{
    
    if(select.value === "Cat"){
    mate = Cat
    image.src = "images/cat1.jpg";
    // start.textContent="Reset"   
    //start.remove()
    }
    
    else if(select.value === "Dog"){
     
        image.src = "/cyberpet2/dog.webp"
          mate = Dog
        //   start.textContent="Reset"   
          //start.remove()
    }

    else{ if(select.value == "Cybercat"){
            mate = Cybercat
            image.src = "/cyberpet2/cybercat.webp"
            // start.textContent="Reset"   
            //start.remove()
        }}
        if(select.value === "Cat" || select.value === "Dog" || select.value == "Cybercat");

    //     if (start.textContent="Reset")
    // }else {

    //     }
 
});

// start.addEventListener("click", start);
    
//     function start(){
//     if(select.value === "Cat"){
//     mate = Cat
//     image.src = "images/cat1.jpg";
//     // start.textContent="Reset"   
//     //start.remove()
//     }
    
//     else if(select.value === "Dog"){
     
//         image.src = "/cyberpet2/dog.webp"
//           mate = Dog
//         //   start.textContent="Reset"   
//           //start.remove()
//     }

//     else{ if(select.value == "Cybercat"){
//             mate = Cybercat
//             image.src = "/cyberpet2/cybercat.webp"
//             // start.textContent="Reset"   
//             //start.remove()
//         }}
//         if(select.value === "Cat" || select.value === "Dog" || select.value == "Cybercat" )

//         start.removeEventListener("click", start);
//         start.addEventListener("click", reset);
//         start.value="Reset";
//     }

//     function reset(){
//         // console.log("Stopped");
//         start.removeEventListener("click", reset);
//         start.addEventListener("click", start);
//         start.value = "Start";
//     }


// start.addEventListener("click", ()=>{
//     start.textContent==="Reset" 
//     reset()
//     renderData();
// })

 start.addEventListener("click",()=>{
    if(input.value!=="")
    hi.textContent=`Hi I am a ${select.value} and my name is ${input.value}`

})

// start.addEventListener("click", () => {
//      (style.display == "none")}
//         // list.style.display = "block";
//         // showButton.textContent = "hide";


//  but.addEventListener("click", ()=>{
     
//      if(select.value === "Dog"){
     
//      image.src = "/cyberpet2/dog.webp"
//        mate = Dog
//     }
    
//   });
 
//   but.addEventListener("click", ()=>{
     
//      if(select.value == "Rabbit"){
//      mate = Rabbit
//       image.src = "fox.jpeg"
//      }
//   });
 
//   but.addEventListener("click", ()=>{
     
//      if(select.value == "Monkey"){
//      mate = Monkey
//     //   image.src = "./monkeyNor.gif"}
//      }
//   });
 
//   but.addEventListener("click", ()=>{
     
//      if(select.value == "Donkey"){
//      mate = Donkey
//     //   image.src = "./dunkeyNor.gif"}
//      }
      
//   });


//   but.addEventListener("click",()=>{
//     if(select.value == "Cybercat"){
//         mate = Cybercat
//         image.src = "/cyberpet2/cybercat.webp"
//     }
// })



 
//   but.addEventListener("click",()=>{
//     if(input.value!=="")
//     hi.textContent=`Hi i am a ${select.value} and my name is ${input.value}`

// })



// start.addEventListener('click', () => {
//   start.remove();
// });


 


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
    // get petdetails(){
    //     return `${this.happiness},${this.cleanliness},${this.hunger},${this.thirst},${this.health}`
    //  }
}


//subclass
class PetInfo extends Pet {
    constructor(happiness, cleanliness, hunger, thirst, health, name, type){
        super(happiness, cleanliness, hunger, thirst, health);
        this.name = name;
        this.type = type;
    }
}



const Cat = new Pet(50,50,50,50,75);
const Dog = new Pet(50,50,50,50,50);
// const Rabbit = new Pet(50,50,50,50,80);
// const Monkey = new Pet(50,50,50,50,50);
// const Donkey = new Pet(50,50,50,50,50);
// subclass
const Cybercat = new PetInfo(100, 100, 100, 100, 100,"Cat", "Type: Cybercat")
// console.log(Cybercat.Pet.petinfo)

if (mate.health = 0){
    window.HTML = "game over massage"
}


function feedPet() {
    // con
    mate.cleanliness -= 5;
    mate.thirst += 5
    //pos
    mate.happiness += 3;
    mate.health += 5;
    mate.hunger -= 10;
}

function giveDrink() {
    // con
    mate.hunger += 2;
    mate.cleanliness -= 5;
    mate.thirst -= 10;
    // pos
    mate.happiness += 5;
    mate.health += 5;
}

function playwithpet() {
    //con
    mate.hunger += 5;
    mate.thirst += 5;
    mate.cleanliness -+10
    //pos
    mate.happiness +=10;
    mate.health += 10;
}

function cleanPet() {
    // con
    mate.health += 10;
    mate.hunger += 5;
    mate.cleanliness += 5;
    // pos
    mate.happiness -= 5;
};

function reset(){
    this.happiness = happiness;
    this.cleanliness = cleanliness;
    this.hunger =hunger;
    this.thirst =thirst;
    this.health =health;
}




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
        name.textContent = `${input.value}: Stats`;
        type.textContent = `${mate.type}`;

        health.textContent = `Health: ${mate.health}`;
        thirst.textContent = `Thirst: ${mate.thirst}`;
        hunger.textContent = `Hunger: ${mate.hunger}`;
        happiness.textContent = `Happiness: ${mate.happiness}`;
        cleanliness.textContent = `Cleanliness: ${mate.cleanliness}`;
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
        mate.hunger += 2;
        mate.thirst += 2;
        mate.happiness -= 2;
        mate.cleanliness += 2;
        mate.health -= 5;
        
        checkCondition()
        renderData();
        timingFunction();
        
    }, 10000);
}
timingFunction();


const healthCheck = () => {
    window.setTimeout(() => {
        if(mate.hunger >85)
        mate.health -= 5;
        
        checkCondition()
        renderData();
        healthCheck();
        
    }, 10000);
}
healthCheck();




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

 randomgift();