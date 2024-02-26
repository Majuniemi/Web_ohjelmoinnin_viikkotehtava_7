import { Shape } from "./Shape.js"

export class Rectangle extends Shape {
    #width
    #height

    constructor(x, y, x2, y2) {
        super(x, y)
        this.#width = x2
        this.#height = y2
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x, this._y, this.#width, this.#height)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.stroke()
    }
}