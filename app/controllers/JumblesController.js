import { AppState } from "../AppState.js";

function _drawJumbles() {
  console.log('drawing Jumbles')
  const jumbles = AppState.jumbles
  let content = ''
  jumbles.forEach(jumble => content += jumble.ListTemplate)
  document.getElementById('jumbles-list').innerHTML = content
}

function _drawActiveJumble() {
  const activeJumble = AppState.activeJumble
  let content = activeJumble.ActiveJumbleTemplate
  document.getElementById("active-jumble").innerHTML = content
}

export class JumblesController {
  constructor() {
    console.log('Jumbles are HERE!')
    _drawJumbles()


  }


}