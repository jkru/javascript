        // <!--
        // Add an event listener and attach it to the "get-text" id.
        // When the link is clicked:
        //     Prevent the default action
        //     Change the content of the "text-box-replace" div to "world"
        // -->



var myLink = document.getElementById("get-text");
var linkText = document.getElementById("text-box-replace");

myLink.style.color = "red";

myLink.addEventListener("click", function(e){
    // alert("alert");
    linkText.innerHTML= "world";
    e.preventDefault();
});

        // <!--
        // Add an event listener and attach it to the "get-color" id.
        // When the link is clicked:
        //     Prevent the default action
        //     Change the background color of the "text-box-color" div to red
        //     Change the content of the "text-box-color" div to "I am the color red!"

var myDiv = document.getElementById("text-box-color");
var linkID = document.getElementById("get-color");

linkID.addEventListener("click", function(e){
    e.preventDefault();
    myDiv.style.backgroundColor = "red";
    myDiv.innerHTML = "I am the color red!";
});

        // <!--
        // Add an event listener and attach it to the "get-melon" id.
        // When the link is clicked:
        //     Prevent the default action
        //     Change the content of the "melon" div to an image of a new melon
        // -->

var myMelon = document.getElementById("melon-box");
var myMelonLink = document.getElementById("get-melon");

myMelonLink.addEventListener("click", function(e){
    e.preventDefault();
    // img = doThatThingJoelDescribedButDidntShowUs();

    // myMelon.innerHTML = "<img height='142' width='142' src=http://azu1.faci
    // lisimo.com/ima/i/3/4/be/am_79225_2366772_58444.jpg>";
 //   debugger;
    myMelon.firstElementChild.setAttribute("src", "http://azu1.facilisimo.com/ima/i/3/4/be/am_79225_2366772_58444.jpg");
    myMelon.firstElementChild.setAttribute("width", "400px");

});

var beAwesome = document.getElementById("be-awesome");


beAwesome.addEventListener("click", function(e){
    e.preventDefault();
    var awesomeBox = document.getElementById('awesome-box');
    setInterval(function (){
        awesomeBox.classList.toggle('hidden');
    }, 1000);
    setInterval(function(){

        // awesomeBox.setAttribute("margin-left", '200px');
        // debugger;
        awesomeBox.style.marginLeft = (Math.floor(Math.random()*500)+1).toString()+"px";
    }, 1000);

});