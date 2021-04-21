/* global saveCanvas */
window.share.saveJPG = {
  name: 'jpg',
  run: function () {
    saveCanvas(window.canvas, 'my sketch', 'jpg')
  }
}
