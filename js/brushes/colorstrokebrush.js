var x= Math.random(0,255);
 var y= Math.random(0,255);
 var z= Math.random(0,255);
 var p= 40/Math.pow((window.input.x-m)^2+(window.input.y-n)^2,1/4);

 window.brushes.colorstrokebrush = {
  name: 'colorstrokebrush',

  draw: function () {
    colorMode(RGB)
    stroke(x, y, z)
    strokeWeight(p)
}
}
var m=window.input.x;
var n=window.input.y;
