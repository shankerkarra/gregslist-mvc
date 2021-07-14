// import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  Houses = [
    new house({
      hinfo: '2 bedroom 2 bath',
      sqt: '1200 sft',
      address: '44 rocport status, Boise, ID 21045',
      price: '$200,000',
      imgurl: "https://ssl.cdn-redfin.com/v374.3.1/images/merch/generalImages/CompleteSolution_Q1_2020_557_YardSign2.jpg"
    }), new house({
      hinfo: '1 bedroom 1 bath',
      sqt: '980 sft',
      address: '404 rocport status, Boise, ID 21045',
      price: '$150,000',
      imgurl: "https://ssl.cdn-redfin.com/v374.3.1/images/merch/generalImages/CompleteSolution_Q1_2020_557_YardSign2.jpg"
    })

  ]


  // /** @type {Car[]} */
  // cars = [
  //   new Car({
  //     make: 'Ford',
  //     model: 'Pinto',
  //     year: 1987,
  //     price: 1200,
  //     description: 'This Car is HOT!',
  //     imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
  //   }),
  //   new Car({
  //     make: 'VW',
  //     model: 'Gremlin',
  //     year: 1988,
  //     price: 3400,
  //     description: 'Lime Green! You gonna love it',
  //     imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
  //   })
  // ]

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
