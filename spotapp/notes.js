// The Path.Circle constructor takes a Point(x, y), and a radius
var myBall = new Path.Circle(new Point(70, 70), 50);
myBall.fillColor = 'tomato';
 
// The Path.Rectangle constructor can take a Point and a Size object
var point = new Point(20, 150);
var size = new Size(100, 50);
var myRectangle = new Path.Rectangle(point, size);
myRectangle.fillColor = 'powderblue';
 
// The Path.Line constructor takes 2 points, defining the start and end of the line.
var from = new Point(160, 20);
var to = new Point(200, 80);
var straightLine = new Path.Line(from, to);
straightLine.strokeColor = 'black';
 
// The Path.Arc constructor takes 3 points, var names describing the obvious.
var from = new Point(170, 120);
var through = new Point(200, 180);
var to = new Point(170, 220);
var curvedPath = new Path.Arc(from, through, to);
curvedPath.strokeColor = 'black';



// create the shape
var point = new Point(20, 150);
var size = new Size(100, 50);
var myRectangle = new Path.Rectangle(point, size);
myRectangle.fillColor = 'powderblue';
 
function onFrame(event) {
  // On each frame update, rotate the square by 3 degrees:
  myRectangle.rotate(3);
}


Using event.count and Math.sin() to create a smooth looping animation.
var point = new Point(20, 50);
var size = new Size(100, 50);
var myRectangle = new Path.Rectangle(point, size);
myRectangle.fillColor = 'lightBlue';
 
var myBall = new Path.Circle(new Point(10, 90), 10);
myBall.fillColor = 'black';
 
function onFrame(event) {
  // Normalise the event.count property to a 0-359 scale
  // then apply some trigonometry so we get some smoothed values
  // just like going round the edge of a circle
  var x = (1 + Math.cos((event.count * 2 % 360)
    * (Math.PI / 180))) * 100 + 10
  var y = (Math.abs(Math.sin((event.count * 2 % 360)
    * (Math.PI / 180)))) * 80;
  myRectangle.position.x = x;
  myBall.position.x = x;
  myBall.position.y = 90 - y;
}



Using symbols to create multiple instances of a shape
var squarePath = new Path.Rectangle(new Point(20, 20), new Size(20, 20));
squarePath.fillColor = 'aquamarine ';
var squareSymbol = new Symbol(squarePath);
 
// lets place some squares using symbols, and rotate each instance slightly
for (var i = 0; i < 5; i++) {
  var placedSymbol = squareSymbol.place(new Point(20 + (i * 40), 50));
  placedSymbol.rotate(i * 10); // operation on the instance
}
 
function onFrame(event) {
 // Add 1 degree to the hue
 // of the symbol definition's fillColor:
 squareSymbol.definition.fillColor.hue += 1;
}  









