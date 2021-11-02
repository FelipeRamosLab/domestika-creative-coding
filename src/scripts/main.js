import $ from 'jquery';

window.addEventListener('load', () => {
    const canvas = $('canvas')[0];
    const context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(30, 30);
    context.lineTo(100, 200)
    context.lineTo(150, 250)
    context.lineTo(400, 500)
    context.strokeStyle = "red";
    context.stroke();

    ctx.beginPath();
    ctx.bezierCurveTo(20, 40, 60, 70, 50, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 40, 60, 70, 50, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 500, 60, 70, 50, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 500, 400, 70, 50, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 500, 400, 200, 50, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 500, 400, 200, 5300, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 50, 400, 400, 5300, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 50, 400, 400, 15, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 50, 400, 400, 150, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.bezierCurveTo(50, 50, 400, 400, 600, 150);
    ctx.strokeStyle = "black";
    ctx.stroke();

    window.ctx = context;
});
