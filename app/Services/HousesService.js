import { ProxyState } from "../AppState.js"
import House from '../Models/House.js'

class HousesService {
  createHouse(rawdata) {
    debugger;
    ProxyState.houses = [...ProxyState.houses, new House(rawdata)]
  }
}

export const housesService = new HousesService()