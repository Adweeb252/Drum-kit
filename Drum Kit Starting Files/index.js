document.querySelector(".w").addEventListener("click", handleclick1);
document.querySelector(".a").addEventListener("click", handleclick2);
document.querySelector(".s").addEventListener("click", handleclick3);
document.querySelector(".d").addEventListener("click", handleclick4);
document.querySelector(".j").addEventListener("click", handleclick5);
document.querySelector(".k").addEventListener("click", handleclick6);
document.querySelector(".l").addEventListener("click", handleclick7);

function handleclick1()
{
    var audio1 = new Audio('sounds/tom-1.mp3');
    audio1.play();

    this.style.color= "red";
}
function handleclick2()
{
    var audio1 = new Audio('sounds/tom-2.mp3');
    audio1.play();
}
function handleclick3()
{
    var audio1 = new Audio('sounds/tom-3.mp3');
    audio1.play();
}
function handleclick4()
{
    var audio1 = new Audio('sounds/tom-4.mp3');
    audio1.play();
}
function handleclick5()
{
    var audio1 = new Audio('sounds/crash.mp3');
    audio1.play();
}
function handleclick6()
{
    var audio1 = new Audio('sounds/kick-bass.mp3');
    audio1.play();
}
function handleclick7()
{
    var audio1 = new Audio('sounds/snare.mp3');
    audio1.play();
}