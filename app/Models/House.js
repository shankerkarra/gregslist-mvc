export default class House {
  constructor({ hinfo, sqt, address, price, imgurl }) {
    this.hinfo = hinfo
    this.sqt = sqt
    this.address = address || "no address is provided at this point of time"
    this.price = price
    this.imgurl = imgurl || '//placehold.it/200x200'
  }

  get Template() {
    return `
     <div class="col-md-3 col-sm-2 my-3">
      <div class="house bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.hinfo} ${this.sqt} car image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.hinfo} - ${this.sqt} </b></p>
              </div>
              <p>${this.address}</p>
              <p><em>$${this.price}</em></p>
          </div>
      </div>
    </div>
    `
  }
}