function Figure(x, y, color) {
    var x = x;
    var y = y;
    var color;
}
function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color);
    
    var w = w;
    var h = h;
    this.draw = function(canvas) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
    } 
}
function Circle(x, y, r, color) {
    Figure.call(this, x, y, color);
    var r = r;
    this.draw = function(canvas) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        
        ctx.fill();
    } 
}
function Line(x, y, x2, y2, color) {
    Figure.call(this, x, y, color);
    
    var x2 = x2;
    var y2 = y2;
    this.draw = function(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = color;  
        ctx.beginPath();         
        ctx.moveTo(x, y);    
        ctx.lineTo(x2, y2); 
        ctx.stroke();      
    } 
}
function Canvas(id, width = 300, height = 150) {
    var id = id;
    this.add = function(...args) {
        var canvas = document.getElementById(id);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        args.forEach(item => item.draw(canvas));
    };
}
var line = new Line(30, 50, 150, 100, 'blue');
var circle = new Circle(120, 70, 50, 'green');
var rect = new Rect(200, 10, 60, 120, 'red');
var drawArea = new Canvas('canvasID');
drawArea.add(circle, rect, line);
