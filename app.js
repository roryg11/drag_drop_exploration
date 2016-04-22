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

function detectCorners (x){
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
}

// points are [x: x, y: y]
// when this function returns 0, points are collinear
// - means counterclockwise
// positive means clockwise
function orientation(p1, p2, p3){
  var slopeA = (p2.y - p1.y)/(p2.x - p1.x);
  var slopeB = (p3.y - p2.y)/(p3.x - p1.x);

  // if(slopeA === slopeB){
  //   return "collinear";
  // } else if (slopeA < slopeB){
  //   return "counterclockwise";
  // } else {
  //   return "clockwise";
  // }

  //this is refactored as:
  return (p2.y - p1.y)*(p3.x - p2.x) - (p3.y - p2.y)*(p2.x - p1.x); // need to figure out how these are the same
}

function onSegment(p, q, r){
  if (q.x <= max(p.x, r.x) && q.x >= min(p.x, r.x) && q.y <= max(p.y, r.y) && q.y >= min(p.y, r.y)){
    return true;
  }
  return false;
}

// in this case p is the beginning point and q is the endpoint
function doIntersect(p1, q1, p2, q2){
  var o1 = orientation(p1, q1, p2);
  var o2 = orientation(p1, q1, q2);
  var o3 = orientation(p2, q2, p1);
  var o4 = orientation(p2, q2, q1);

  if(o1 !== o2 && o3 !== o4){
    return true;
  }

  if (o1 == 0 && onSegment(p1, p2, q1)) {return true};
  if (o2 == 0 && onSegment(p1, q2, q1)) {return true};
  if (o3 == 0 && onSegment(p2, p1, q2)) {return true};
  if (o4 == 0 && onSegment(p2, q1, q2)) {return true};

  return false;
}

function slope(p, q){
  return (p.y - q.y)/(p.x - q.x);
}

function yIntercept (x, y, slope){
  return y- (slope)x;
}


function whereIntersect(p1, q1, p2, q2){
  var slopeOne = slope(p1, q1);
  var slopeTwo = slope(p2, q2);
  var yInterceptOne =  yIntercept(p1.x, p1.y, slopeOne);
  var yInteceptTwo = yIntercept(p2.x, p2.y, slopeTwo);
  var xAtIntersection = (yInterceptTwo - yInterceptOne )/(slopeOne - slopeTwo);
  var yAtIntersection = slopeOne(xAtIntersection) + yInterceptOne;

  return {x: xAtIntersection, y: yAtIntersection};
}

function enoughOverlap(intOne, intTwo){
  // find the overlapping square(ie the points of intersection and the points
  //  that sit within the rest of the square, find the area of that square AKA the
  //  overlap and decide if that's enoughOverlap
  var sq1 = {
      tl: [x,y],
      tr: [x, y],
      br: [x,y],
      bl: [x,y]
  }
  var sq2 = {
    tl: [x,y],
    tr: [x, y],
    br: [x,y],
    bl: [x,y]
  }

  var sq2Area = Math.pow(tr.x - tl.x, 2);

  // calculate overlap assuming you have intersection points
  var oppCornerOne = {x: intOne.x, y: intTwo.y};
  var oppCornerTwo = {x: intTwo.x, y: intOne.y};
  // now you have all four corners of the square, assuming it is a regular polygon,
  // you only need the length of one segment to calculate the area
  // assuming it's a square, you need to find the difference between two points
  // that isn't zero
  // you could extrapolate and say it's
  var length = intOne.x - oppCornerTwo.x
  var area = Math.pow(length, 2);

  if(area === .5(sq2Area)){
    //swap their contents
  }
}
