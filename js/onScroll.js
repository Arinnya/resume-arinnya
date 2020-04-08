window.onscroll = function() {
    myFunctionScroll();    
    myFunction();
};

var header = document.getElementById("tm-video-container-onScroll");
var scrollerContainer = document.getElementById("content-onScroll");


var height = document.getElementById('tm-video-container-onScroll').clientHeight;
console.log("Baler: ", height);
var sticky = 0
if(header){
    var sticky = header.offsetTop;
}

console.log(sticky); 

function myFunction() {
  if (window.pageYOffset - (height-103) > sticky) {
    header.style.position = "fixed";
    header.style.top = `-${height - 103}px`
  } else {
    header.style.position = "relative";
    header.style.top = "0";
    
  }
}

function myFunctionScroll() {
    if (window.pageYOffset - (height-103) > sticky) {
      scrollerContainer.style.height = `${height}px`;
      
    } else {
        scrollerContainer.style.height = 0;
    }
  }