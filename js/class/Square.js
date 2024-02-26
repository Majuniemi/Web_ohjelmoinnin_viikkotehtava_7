import { Rectangle } from "./Rectangle.js.js"

export class Square extends Rectangle {
    #width
    #height

    constructor(x, y, x2, x2) {
        super(x, y)
        this.#width = x2
        this.#height = x2
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x, this._y, this.#width, this.#height)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.stroke()
    }
}