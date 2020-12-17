// Оставила те же классы и попробовала с их помощью сделать надпись))

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

let figures_array = [];
let x1 = 0, x2 = 20, change = true; 
for (let i = 0; i < 15; i++) {
   if (change) figures_array[i] = new Line(x1, 0, x2, 20, 'blue');
   else figures_array[i] = new Line(x1, 20, x2, 0, 'blue');
    change = !change;
    x1 +=20;
    x2 += 20;
}
figures_array[15] = new Circle(20, 60, 20, 'blue');
figures_array[16] = new Circle(20, 80, 20, 'blue');

figures_array[17] = new Circle(20, 60, 6, 'white');
figures_array[18] = new Circle(20, 80, 6, 'white');

figures_array[19] = new Rect(20, 54, 20, 12, 'white');
figures_array[20] = new Rect(0, 74, 20, 12, 'white');

figures_array[21] = new Circle(65, 70, 20, 'blue');
figures_array[22] = new Circle(65, 70, 10, 'white');

figures_array[23] = new Rect(90, 50, 10, 40, 'blue');
figures_array[24] = new Rect(100, 80, 20, 10, 'blue');
figures_array[25] = new Rect(110, 50, 10, 40, 'blue');

figures_array[26] = new Rect(125, 50, 10, 40, 'blue');

figures_array[27] = new Rect(135, 50, 20, 20, 'blue');
figures_array[28] = new Rect(135, 55, 10, 10, 'white');

figures_array[29] = new Line(130, 70, 150, 90, 'blue');

figures_array[30] = new Circle(180, 70, 20, 'blue');
figures_array[31] = new Circle(180, 70, 10, 'white');

figures_array[32] = new Rect(185, 50, 20, 40, 'white');
figures_array[33] = new Rect(190, 50, 10, 40, 'blue');

figures_array[34] = new Rect(195, 50, 20, 10, 'blue');
figures_array[35] = new Rect(195, 65, 20, 10, 'blue');
figures_array[36] = new Rect(195, 80, 20, 10, 'blue');

figures_array[37] = new Rect(230, 40, 10, 50, 'red');
figures_array[38] = new Rect(250, 40, 40, 10, 'red');
figures_array[39] = new Rect(265, 50, 10, 40, 'red');

var drawArea = new Canvas('canvasID');
drawArea.add.apply(null, figures_array);

