function proceduralWatermark( imgx,imgy,px,py) {

    var
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        cx = 0,
        cy = 0;

    canvas.width = imgx;
    canvas.height = imgy;
    cx = px;
    cy = py;

    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#ee0000';
    ctx.fill();

    // ctx.font = 'Bold 12px Arial, sans-serif';
    // ctx.textAlign = 'center';
    // ctx.fillStyle = '#ffffff';
    // ctx.textBaseline = 'middle';
    // ctx.fillText(top_text, cx, 32);

    return canvas.toDataURL();
}