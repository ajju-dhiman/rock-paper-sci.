let userscore = 0;
let uscore= document.querySelector("#yourscore")
let comscore = 0;
let cscore= document.querySelector("#compscore")
let resultsg = document.querySelector("#msg");
let rest= document.querySelector("#res");

let images = document.querySelectorAll(".images");   // BUTTON CLICK K LIYE OR USER KI CHOICE K LIYE
images.forEach((image) => {
    image.addEventListener("click", () => {
        const userimgid = image.getAttribute("id");

        playgame(userimgid); //  GAME AAGA BADHAN VASTA
    });
});
let showwinner=(userwin)=>  // RESILT BOARD  BOARD  VASTA
{
    if(userwin)
    {
        console.log("you win");
        resultsg.innerText="YOU WON!"
    }
    else {
        console.log("you lose");
        resultsg.innerText=("YOU LOOSE");
    }
}
let drawgame = () => {
    console.log("draw game");
    resultsg.innerText="ITS DRAW";
}
const comchoice = () => {   // YO FNC RANDM CHOICE LEVA GA COMPUTER PE TE 
    let array = ["rock", "paper", "sci"];
    let arrayind = Math.floor(Math.random() * 3);
    return array[arrayind];
}
const playgame = (userimgid) => {        ///YHI H MAIN FNC 
    console.log("user choice is", userimgid)
    let compimgid = comchoice(); //COMPUTER KIU CHOICE LEN VASTA 
    console.log("comp choice is", compimgid)
    if (userimgid == compimgid) {

        drawgame(); // AGR USER AR CPM KO CHOICE SAME HOGI 

    }
    else {
        let userwin = true;
        if (userimgid == "rock") {
            //paper sci
            userwin = compimgid == "paper" ? false : true;
        }
        else if (userimgid == "paper") { // rock sci
            userwin = compimgid == "sci" ? false : true;
        }
        else {
            //rock paper
            userwin = compimgid == "rock" ? false : true;
        }
        showwinner(userwin);   // RESULTMSG VASTA JO CONSOLE ARE PAGE DONO PA DIKHAVA GA 
        scoreboard (userwin); // SCOREBOARD
        
    }
     

};
let scoreboard =(userwin)=> // SCOREBOARD MA SCORE UPDAT
{
    if (userwin) {
        userscore++;
        uscore.innerText=userscore;
        
    }
    else{
        comscore++;
        cscore.innerText=comscore;
    }

}
rest.addEventListener("click",()=>{ // RESET BUTTON VASTA 
    uscore.innerText="0";
    cscore.innerText="0";

    resultsg.innerText="RE-STARTED";


}
);


