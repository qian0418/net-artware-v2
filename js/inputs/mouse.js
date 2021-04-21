/* global mouseX, mouseY, mouseIsPressed */
window.inputs.mouse = {
  name: 'mouse',
  condition: function () {
    if (mouseIsPressed) {
      return true
    } else {
      return false
    }
  },
  update: function () {
    window.input.x = mouseX
    window.input.y = mouseY
  }
}
