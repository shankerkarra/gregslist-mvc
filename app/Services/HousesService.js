import { ProxyState } from "../AppState.js"
import House from "./Models/House.js"

class HousesService {
  createhouse(rawdata) {
    Proxystate.Houses = [...proxystate.Houses, new House(rawdata)]
  }
}

export const housesService = new HousesService()