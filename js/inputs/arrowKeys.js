/* global keyIsPressed, key */
window.inputs.arrowKeys = {
  name: 'arrow keys',
  condition: function () {
    if (keyIsPressed) {
      return true
    } else {
      return false
    }
  },
  update: function () {
    if (keyIsPressed && key === 'ArrowLeft') {
      window.input.x -= 4
    } else if (keyIsPressed && key === 'ArrowRight') {
      window.input.x += 4
    } else if (keyIsPressed && key === 'ArrowDown') {
      window.input.y += 4
    } else if (keyIsPressed && key === 'ArrowUp') {
      window.input.y -= 4
    }
  }
}
