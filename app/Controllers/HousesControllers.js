import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


function _draw() {
  let template = ''
  ProxyState.Houses.forEach(house => {
    template += house.template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {

  constructor() {
    ProxyState.on("houses", _draw)
    proxtstate.on('houses', () => { console.log('New House') })
    _draw()
  }

  createHouse() {
    let form = event.target
    let rawHouse = {

      hinfo = form.hinfo.value,
      sqt = form.sqt.value,
      address = form.address.value,
      price = form.price.value,
      Imgurl = form.imgurl.value
    }
    housesservice.createHouse(rawHouse)
    form.reset()
  }
}