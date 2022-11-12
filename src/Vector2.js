export class Vector2
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    normalized()
    {
        // Magnitude = √(a*a + b*b)
        let magnitude = Math.sqrt((this.x*this.x)+(this.y*this.y));
        return new Vector2(this.x/magnitude, this.y/magnitude);
    }

    static Distance(first, second)
    {
        // Distance = √|ax-bx|²+|ay-by|²
        return Math.sqrt(Math.pow(Math.abs(first.x - second.x), 2) + Math.pow(Math.abs(first.y - second.y), 2));
    }
}