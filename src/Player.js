import { InputHandler } from "./Input.js";
import { Vector2 } from "./Vector2.js"

export class Player
{
    constructor()
    {
        this.rockImage = document.querySelector("#rock");
        this.arrowImage = document.querySelector("#arrow");
        this.position = new Vector2(0, 0);
        this.scale = new Vector2(170, 170);

        this.direction = new Vector2(0, 0);
        this.angle = 0;
    }

    update(inputHandler)
    {
        this.direction = new Vector2(this.position.x-inputHandler.mousePos.x, this.position.y-inputHandler.mousePos.y);
        this.angle = Math.atan2(this.direction.y, this.direction.x)*(180/Math.PI)-90;
    }

    draw(context)
    {
        context.drawImage(this.rockImage, this.position.x - this.scale.x/2, this.position.y - this.scale.y/2, this.scale.x, this.scale.y);
        //context.drawImage(this.arrowImage, 0 - 100, -200 - 100, 200, 200);

        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.angle * Math.PI/180);
        //context.fillStyle = "red";
        //context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(this.arrowImage, 0 - 100, -200 - 100, 200, 200);
        context.restore();
    }
}