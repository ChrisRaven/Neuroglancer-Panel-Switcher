// ==UserScript==
// @name         Panel switcher
// @namespace    all neuroglancers
// @version      2025-07-13
// @description  Switch directly between 3D view and 2-panel split view
// @author       KrzysztofKruk
// @match        https://spelunker.cave-explorer.org/
// @match        https://ngl.brain-wire.org/
// @match        https://play.eyewire.ai/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cave-explorer.org
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

  document.body.addEventListener('keyup', e => {
    if (e.key === ' ') {
      setTimeout(() => {
        document.querySelector('button[title="Switch to xy-3d layout."]')?.click()
      }, 0)
    }
  })
})()
