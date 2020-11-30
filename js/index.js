var myCanvas = document.getElementById("myCanvas"); // Находим html элемент
       
var ctx = myCanvas.getContext("2d"); // Задаём измерение нашей фигуре
        
ctx.beginPath(); // beginPath используется что бы «начать» серию действий описывающих отрисовку фигуры.

ctx.fillStyle = "yellow"; // Задаём цвет заливки (Смайла)
 
ctx.arc(600, 450, 300, 0, Math.PI * 2, true); // Круг
//ctx.stroke();
ctx.closePath();
ctx.fill();
// Смайл
ctx.beginPath();
ctx.strokeStyle="black"; // Цвет улыбки
ctx.lineWidth = 2; // Толщина улыбки
ctx.arc(600, 500, 150, 0.1 * Math.PI, Math.PI * 0.9, false); // Улыбка (Если true - против часовой, false - по часовой)
ctx.stroke();
ctx.closePath();
// Глаза
// Левый
ctx.save();
// Контур глаза
        ctx.scale(0.65, 1); // Делает глаз овальным
        ctx.beginPath();
        ctx.arc(800,380,80, 0 * Math.PI, Math.PI * 2, false); // Круг (глаз)
ctx.fillStyle="black"; // Цвет глаза
ctx.fill(); // Заливка глаза
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
// Правый
ctx.save();
// Контур глаза
        ctx.scale(0.65, 1); // Делает глаз овальным
        ctx.beginPath();
        ctx.arc(1050,380,80, 0 * Math.PI, Math.PI * 2, false); // Круг (глаз) (Если true - против часовой, false - по часовой)
ctx.fillStyle="black"; // Цвет глаза
ctx.fill(); // Заливка глаза
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
