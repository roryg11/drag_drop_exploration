$(document).ready(function(){
  function dragged (event){
    console.log(event);
  }
  // var boxes = $('div.box');
  // var mousePosition = [0,0];
  // var draggedBox = null;
  // for(var i=0; i < boxes.length; i++){
  //   boxes[i].draggable = true;
  //   boxes.ondragStart()
  // };
  // need a layout grid of some kind


})


// ---------- ----------
// |         |         |
// |    1    |    2    |
// |         |         |
// |_________|_________|
// |         |         |
// |    3    |    4    |
// |         |         |
// |_________|_________|
//
// var x = 0;
// var y = 0;
// var mousePosition = [x,y];
// // how do we define div areas?
// // we need to have four corners
// var div1 = {tl: [0,0], tr: [10,0], bl: [0, 10], br: [10, 10]}; // in this way we track the corners of the div
// var div2 = {tl: [10,0], tr: [20,0], bl: [10, 10], br: [20, 10]}; // in this way we track the corners of the div
// var div3 = {tl: [0,10], tr: [10,10], bl: [0, 20], br: [10, 20]}; // in this way we track the corners of the div
// var div4 = {tl: [10,10], tr: [20,10], bl: [10, 20], br: [20, 20]}; // in this way we track the corners of the div
//

// how much overlap between the squares
// for the n sided polygon
// geeksForGeeks checking if a given point is inside a polygon
// http://www.geeksforgeeks.org/how-to-check-if-a-given-point-lies-inside-a-polygon/
// for if the mouse is in the correct area
if(x>=0 && x <= 10){
  if(y>=0 && y<=10){
    "put it in Quadrant 1" // put swap content here
  } else if (y> 10 && y <=20){
    "put in quadrant 3" // put swap content here
  }
} else if (x > 10 && x <= 20){
  if(y>=0 && y<=10){
    "put it in Quadrant 2"
  } else if (y> 10 && y <=20){
    "put in quadrant 4"
  }
}

function dragEnd (){
  //  set p id to the div id, and put that id within the p's object that keeps content
  //  append new p the the div that it's being dragged over, and then you have to reset all of the other
}


// use the divs to track the layout, and then use the <p> to track the content
