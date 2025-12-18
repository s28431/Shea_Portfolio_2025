
//inline functions! :3 (for each you have to use em rip)

const newSitchBtn = document.getElementById(`newSitch`);
const FavBtn = document.getElementById(`Fav`);
const monsterID = document.getElementById(`monsterID`);
const healthID = document.getElementById(`healthID`);
const whyID = document.getElementById(`whyID`);
const whereID = document.getElementById(`whereID`);
const MNID = document.getElementById(`MNID`);
const IMG = document.getElementById(`IMG`);

let RandLoc;
let RandNum;
let RandCre;
let RandY;
let RandMN;

const wheres = [
  "In a cave",
  "In the ocean",
  "In a castle",
  "In a desert",
  "In a swamp",
  "In a grass field",
  "In some NPC’s house",
  "In a village",
  "In the forest",
  "In the jungle",
  "At the beach",
  "In a evil mansion",
  "In the snow",
  "In the tundra",
  "In the grassland",
  "At a festival",
  "At a carnival",
  "In a funhouse",
  "At a museum",
  "On a highway",
  "In a trench",
  "At a market",
  "On a mountain",
  "In a volcano"
];

const whys = [
  "You killed/hurt its friend/child and now it wants vengeance",
  "You rolled a nat 1 charisma roll on it",
  "It killed your childhood best friend so now you seek vengeance",
  "It just attacked you for funzies",
  "The DM felt like it",
  "You entered its home/territory",
  "You tripped when trying to run from it",
  "Random encounter",
  "Random encounter",
  "You don’t like the way it looks",
  "You thought it was evil or something",
  "It was bored",
  "It has a high bounty",
  "You have something it wants"
];


newSitchBtn.addEventListener('click', () => {
    newSitch()
})

FavBtn.addEventListener('click', () => {
    Favourite()
})

FavBtn.disabled= true;

async function newSitch() {
    try {
        const response = await fetch('https://www.dnd5eapi.co/api/2014/monsters');
        //naming our data data
        const data = await response.json();
        //logging the "data" we just go
        let RandNum = Math.floor(Math.random() * 334);
        //make the random number
        console.log(data.results[RandNum]);
        //just to see it
        let RandCre = data.results[RandNum].url;
        //creates a random number var that pulls it url for more info
        const response2 = await fetch(`https://www.dnd5eapi.co${RandCre}`);
        const data2 = await response2.json();
        console.log(data2);
        //same thing guys
        //Now to change the hmtl <3
        let RandMN = Math.floor(Math.random() * 20) + 1;
        MNID.innerText = `Number of Monsters: ${RandMN}`;
        monsterID.innerText = `Monster: ${data2.name}`;
        healthID.innerText = `Health of Monster: ${data2.hit_points}hp`;
        //IMG.innerText = `<img src="http://localhost:3000${data.image}" alt="monster image"/>`
        //console.log(`<img src="http://localhost:3000${data.image}" alt="monster image"/>`)

        //turns on the fav button since you now have a situation to favourite 
        FavBtn.disabled= false;

    }
    catch(error) {
        //incase of error :3
        console.log("Getting Monster API Request Failed", error);
    }
    
    //gets a random location and console logs it YIPPEE
    let RandLoc = Math.floor(Math.random() * 24);
    console.log(wheres[RandLoc]);
    whereID.innerText = wheres[RandLoc];

    //same thing but with whys
    let RandY = Math.floor(Math.random() * 14);
    console.log(whys[RandY]);
    whyID.innerText = whys[RandY];

}

function randomLog() {

}

//async function deal() {
//    try {
//        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`);
//        const data = await response.json();
//        console.log(data);
//        card = data.cards[0].code;
//        cardimg = data.cards[0].images.png;
//        yourCard.innerText=`${card}`
//        yourCardimg.innerHTML=`<img src="${cardimg}"/>`
//    }
//    catch(error) {
//        console.log("Cant deal()", error);
//    }
//}



//or you could have it here run on load I just wanted to try the disabled thing
//newGame();




//TODO
// ! console random monster
// ! acsess random monster info using its url
// - inner html name/ health/ other if youre feeling fancy
// ! write out arrays for why and where
// ! random pick why/ where
// - inner html why/ where
// - make pretty so favourites make a new card
// - fourvorite stores array of currents (what monsters inner html = etc)
// - fav saved in local
// - load fav loads fav current save in local storage