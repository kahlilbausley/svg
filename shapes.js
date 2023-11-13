class circle{
constructor (text,textcolor,shapecolor){
this.text=text
this.textcolor=textcolor
this.shapecolor=shapecolor


}
render(){
return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textlogo}</text>
     </svg>`
}
}
class square{
constructor (text,textcolor,shapecolor){
this.text=text
this.textcolor=textcolor
this.shapecolor=shapecolor


}
render(){
return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
<rect width="60%" height="85%" fill="${this.shapecolor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textlogo}</text>
     </svg>`
}
}
class triangle{
constructor (text,textcolor,shapecolor){
this.text=text
this.textcolor=textcolor
this.shapecolor=shapecolor


}
render(){
return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     <polygon points="200,10 100,200 300,200" style="fill:${this.shapecolor};stroke:purple;stroke-width:1" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textlogo}</text>
     </svg>`
}
}

module.exports = {circle, square, triangle}