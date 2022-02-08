export default class Ads {
  constructor (options){
      this.options = options
      this.element = document.querySelector(this.options.element)
      console.log(this.element)
      this.render()

  }

 render(){
    const container = document.createElement("div")
    container.style.width = this.options.width + "px"
    container.style.height = this.options.height + "px"
    container.append(this.createImage())
    this.element.append(container)
    
 }

 createImage(){
     const image = document.createElement("img")
     image.src = this.options.image
     return image
 }


}