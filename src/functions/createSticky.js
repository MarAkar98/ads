export default function createSticky(){
    const image = document.createElement("img")
    image.src = this.options.image
    image.style.height = "0"
    this.container.style.position = "fixed"
    this.container.style.top = "0"
    this.container.style.right = "0"
    this.container.style.left = "0"
    image.style.transition = "height 0.3s cubic-bezier(0.4, 0, 1, 1) 0s"
    let scrollvalue = 0
    window.addEventListener("scroll",(e) => {
       
        if (scrollvalue > window.scrollY){
            console.log("up")
            this.container.style.height = "0"
            image.style.height = "0"
        }else if( scrollvalue < window.scrollY){
            console.log("down")
            this.container.style.height = this.options.height + "px"
            image.style.height = this.options.imageHeight + "px"
        }
        scrollvalue = window.scrollY
        
    })
    return image

}