/* global createCanvas, resizeCanvas */
function preload () {
  window.setupMenuLogic()
}

function setup () {
  window.canvas = createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  const currentInput = window.settings.selectedInput
  const inputObj = window.inputs[currentInput]
  inputObj.update()
  if (inputObj.condition() && !window.dragging) {
    const currentBrush = window.settings.selectedBrush
    const brushObj = window.brushes[currentBrush]
    brushObj.draw()
  }
}

function windowResized () {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
