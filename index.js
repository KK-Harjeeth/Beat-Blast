var n=document.querySelectorAll("button").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}
// #function 1
function handleClick()
{
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    switch(buttonInnerHTML){
        case "a":
            var audio=new Audio("https://github.com/KK-Harjeeth/Beat-Blast/blob/main/sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("https://github.com/KK-Harjeeth/Beat-Blast/blob/main/sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/snare.mp3");
            audio.play();
            break;
        case "f":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log("hi");
    }
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// function2
function makeSound(key)
{
    switch(key){
        case "a":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/snare.mp3");
            audio.play();
            break;
        case "f":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("/Users/kk_harjeeth/Documents/Web Development/Beat-Blast/sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log("hi");
    }
}

//function 3

function buttonAnimation(key){
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100);

}

document.addEventListener("DOMContentLoaded", function() {
    var tutorialButton = document.getElementById("tutorial-button");
    var tutorialContent = document.getElementById("tutorial-content");

    tutorialButton.addEventListener("click", function() {
        tutorialContent.style.display = (tutorialContent.style.display === "block") ? "none" : "block";
    });
});
