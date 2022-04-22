class Rectangle {
    constructor(x,y,w,h,color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;

    }
    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);

    }

}
