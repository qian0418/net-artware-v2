/* global random, colorMode, fill, stroke, sin, ellipse,
 HSB, frameCount */
window.brushes.oscilattingCircles = {
  name: 'oscilatting circles',
  draw: function () {
    const hue = random(0, 360)
    colorMode(HSB)
    fill(hue, 50, 100)
    stroke(0, 0, 0)
    const radius = sin(frameCount * 0.1) * 80
    ellipse(window.input.x, window.input.y, radius, radius)
  }
}
