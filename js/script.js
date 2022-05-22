var colors = ['#DE6B59', '#F2C16E', '#79CA95', '#56C1D9','#EB996E'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByClassName('text-color').style = random_color;