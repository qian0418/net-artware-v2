window.brushes = {} // dictionary of brushes
window.inputs = {} // dictionary of inputs
window.share = {} // dictionary of share options
window.input = { // location of the current input (mouse or otherwise)
  x: 0,
  y: 0
}
window.settings = { // general app settings
  selectedBrush: 'oscilattingCircles',
  selectedInput: 'mouse'
}

window.setupMenuLogic = function () {
  // setup event listeners so that sub menus open when options are clicked
  const options = document.querySelectorAll('#menu > .option')
  options.forEach(option => {
    const sub = option.dataset.submenu
    option.addEventListener('click', () => {
      // open the window that matches the data-submenu of the clicked option
      const win = document.querySelector('#' + sub)
      win.style.display = 'block'
      // make sure this window is above the others
      document.querySelectorAll('.draggable')
        .forEach(de => { de.style.zIndex = 1000 })
      win.style.zIndex = 10001
    })
  })

  // setup event listeres for all of the X (close) buttons
  const closeButtons = document.querySelectorAll('.close')
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentNode.parentNode.style.display = 'none'
    })
  })

  // setup brushes submenu
  const brushesMenu = document.querySelector('#brushes')
  for (const keyname in window.brushes) {
    const brush = window.brushes[keyname]
    const div = document.createElement('div')
    div.textContent = brush.name
    div.className = 'submenu-option'
    div.addEventListener('click', () => {
      window.settings.selectedBrush = keyname
      const otherOpts = document.querySelectorAll('#brushes .submenu-option')
      otherOpts.forEach(opt => { opt.classList.remove('selected') })
      div.classList.add('selected')
    })
    brushesMenu.appendChild(div)
  }

  // setup inputs submenu
  const inputsMenu = document.querySelector('#inputs')
  for (const keyname in window.inputs) {
    const inp = window.inputs[keyname]
    const div = document.createElement('div')
    div.textContent = inp.name
    div.className = 'submenu-option'
    div.addEventListener('click', () => {
      window.settings.selectedInput = keyname
      const otherOpts = document.querySelectorAll('#inputs .submenu-option')
      otherOpts.forEach(opt => { opt.classList.remove('selected') })
      div.classList.add('selected')
    })
    inputsMenu.appendChild(div)
  }

  // setup share submenu
  const shareMenu = document.querySelector('#share')
  for (const keyname in window.share) {
    const share = window.share[keyname]
    const div = document.createElement('div')
    div.textContent = share.name
    div.className = 'submenu-option'
    div.addEventListener('click', () => share.run())
    shareMenu.appendChild(div)
  }
}
