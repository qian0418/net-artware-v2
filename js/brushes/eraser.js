/* global colorMode, RGB, fill, noStroke, ellipse */
window.brushes.eraser = {
  name: 'eraser',
  draw: function () {
    colorMode(RGB)
    fill(255, 255, 255)
    noStroke()
    const radius = 80
    ellipse(window.input.x, window.input.y, radius, radius)
  }
}
