import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js"

function _draw() {
  let template = ''

  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  console.log("inside draw function");
  document.getElementById('Houses').innerHTML = template
}

export default class HousesController {

  constructor() {
    ProxyState.on('houses', _draw)
    //  ProxyState.on('Houses', () => { console.log('New House') })
    _draw()
  }

  createHouse() {
    //  console.log('button pressed')
    event.preventDefault()
    let form = event.target
    let rawHouse = {
      hinfo: form.hinfo.value,
      sqt: form.sqt.value,
      address: form.address.value,
      price: form.price.value,
      imgurl: form.imgurl.value
    }
    housesService.createHouse(rawHouse)
    form.reset()
  }
}