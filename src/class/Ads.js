
import createImage from "../functions/createImage"
import createSticky from "../functions/createSticky"
import render from "../functions/render"
import "../style/image.css"
export default class Ads {
  constructor (options){
      this.options = options
     this.container = document.querySelector("#ad") 

      this.element = document.querySelector(this.options.element)
      console.log(this.element)
      this.render()

  }


 

  render = render
  createImage = createImage
  createSticky = createSticky
}
