//for detecting button click
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var text= this.innerHTML;
        
        audios(text);
        buttonAnimation(text);
        
    })
}
//for detecting keyboard press
document.addEventListener("keypress",function(event) {
    audios(event.key);
    buttonAnimation(event.key);

})

function audios(key)
{
    switch (key) {
        case "w":   var audio1 = new Audio('sounds/tom-1.mp3');
                    audio1.play();
            
            break;
        case "a":   var audio2 = new Audio('sounds/tom-2.mp3');
                    audio2.play();
            break;
        case "s":   var audio3 = new Audio('sounds/tom-3.mp3');
                    audio3.play();
            break;
        case "d":   var audio4 = new Audio('sounds/tom-4.mp3');
                    audio4.play();
            break;
        case "j":   var audio5 = new Audio('sounds/crash.mp3');
                    audio5.play();
            break;
        case "k":   var audio6 = new Audio('sounds/kick-bass.mp3');
                    audio6.play();
            break;
        case "l":   var audio7 = new Audio('sounds/snare.mp3');
                    audio7.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(key)
{
    var button = document.querySelector("." + key);
    button.classList.add("pressed");

    setTimeout(function (){
        button.classList.remove("pressed");
    }, 200);
}

// document.querySelector(".w").addEventListener("click", handleclick1);
// document.querySelector(".a").addEventListener("click", handleclick2);
// document.querySelector(".s").addEventListener("click", handleclick3);
// document.querySelector(".d").addEventListener("click", handleclick4);
// document.querySelector(".j").addEventListener("click", handleclick5);
// document.querySelector(".k").addEventListener("click", handleclick6);
// document.querySelector(".l").addEventListener("click", handleclick7);

// function handleclick1()
// {
    // var audio1 = new Audio('sounds/tom-1.mp3');
    // audio1.play();

//     this.style.color= "white";
// }
// function handleclick2()
// {
//     var audio1 = new Audio('sounds/tom-2.mp3');
//     audio1.play();
// }
// function handleclick3()
// {
//     var audio1 = new Audio('sounds/tom-3.mp3');
//     audio1.play();
// }
// function handleclick4()
// {
//     var audio1 = new Audio('sounds/tom-4.mp3');
//     audio1.play();
// }
// function handleclick5()
// {
//     var audio1 = new Audio('sounds/crash.mp3');
//     audio1.play();
// }
// function handleclick6()
// {
//     var audio1 = new Audio('sounds/kick-bass.mp3');
//     audio1.play();
// }
// function handleclick7()
// {
//     var audio1 = new Audio('sounds/snare.mp3');
//     audio1.play();
// }