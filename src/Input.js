import { Vector2 } from "./Vector2.js";

export class InputHandler
{
    constructor()
    {
        this.keys = [];
        window.addEventListener("keydown", e => {
            if ((e.key === "ArrowDown"  ||
                 e.key === "ArrowUp"    ||
                 e.key === "ArrowLeft"  ||
                 e.key === "ArrowRight" ||
                 e.key === "s"          ||
                 e.key === "w"          ||
                 e.key === "a"          ||
                 e.key === "d"          
                 )
                && this.keys.indexOf(e.key) === -1)
            {
                this.keys.push(e.key);
            }
        });

        window.addEventListener("keyup", e => {
            if (e.key === "ArrowDown"  ||
                e.key === "ArrowUp"    ||
                e.key === "ArrowLeft"  ||
                e.key === "ArrowRight" ||
                e.key === "s"          ||
                e.key === "w"          ||
                e.key === "a"          ||
                e.key === "d"          
            )
            {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });

        this.mousePos = new Vector2(0, 0);
        window.addEventListener("mousemove", e => {
            this.mousePos = new Vector2(e.clientX-window.innerWidth/2, e.clientY-window.innerHeight/2);
        });
    }
}