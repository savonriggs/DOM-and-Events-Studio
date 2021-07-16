// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
const takeoff=document.getElementById("takeoff");
const flightStatus=document.getElementById("flightStatus");

const landing=document.getElementById("landing");

function takeoffClicked(){
    let answer=window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (answer){
        document.getElementById("flightStatus").innerHTML="Shuttle in flight";
        document.getElementById("shuttleBackground").style.background="blue";
        document.getElementById("spaceShuttleHeight").innerHTML="10000";
    }
    
    
}
takeoff.addEventListener("click", takeoffClicked);

function landingClicked(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML="The shuttle has landed.";
    document.getElementById("shuttleBackground").style.background="green";
    document.getElementById("spaceShuttleHeight").innerHTML="0";
}
landing.addEventListener("click", landingClicked);

}
window.addEventListener("load", init);