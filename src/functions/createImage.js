export default function createImage(){
    const image = document.createElement("img")
    image.src = this.options.image
    this.container.style.position = "relative"
    // image.style.top = "0"
    this.container.style.right = "0"
    this.container.style.left = "0"
    return image
}