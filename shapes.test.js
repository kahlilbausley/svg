const {circle, square, triangle} = require("./shapes")

test("circle", () => {
    let shape = new circle("svg", "blue", "yellow") 
    expect(shape.text).toBe("svg")
})
test("square", () => {
    let shape = new square("svg", "blue", "yellow") 
    expect(shape.textcolor).toBe("blue")
})
test("triangle", () => {
    let shape = new triangle("svg", "blue", "yellow") 
    expect(shape.shapecolor).toBe("yellow")
})