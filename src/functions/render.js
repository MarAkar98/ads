export default function render(){
    const container = document.createElement("div")
    container.id = "container"
    if(this.options.type === "image" ){
        container.append(this.createImage())
    }else if(this.options.type == "sticky"){
      container.append(this.createSticky())
    }
    
    this.element.append(container)
    container.addEventListener("click", () => {
      window.open(this.options.Url,"_blank").focus()        
    })
}