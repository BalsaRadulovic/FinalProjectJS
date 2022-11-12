import { InputHandler } from "./Input.js";
import { Player } from "./Player.js";

window.addEventListener("load", function()
{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = 1800;
    canvas.height = 1800;

    ctx.translate(canvas.width/2, canvas.height/2);

    class Game
    {
        constructor(width, height)
        {
            this.width = width;
            this.height = height;
            this.inputHandler = new InputHandler();
            this.player = new Player();
        }

        update()
        {
            this.player.update(this.inputHandler);
        }

        draw(context)
        {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    function animate()
    {
        ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});