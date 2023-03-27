function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById("background-canvas").getContext("2d");
  ctx.globalCompositeOperation = "destination-over";
  const time = new Date();

  var windowWidth = (ctx.canvas.width = window.innerWidth);
  var windowHeight = (ctx.canvas.height = window.innerHeight);

  var rectWidth = 200;
  var rectHeight = 200;

  var rectHoriCenter = windowWidth / 2 - rectWidth / 2;
  var rectVertCenter =  windowHeight / 2 - rectHeight / 2;

  

  ctx.save();
  ctx.translate(windowWidth / 2, windowHeight / 2);
  
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );
  
  ctx.translate(-windowWidth / 2, -windowHeight / 2);


  ctx.beginPath();
  ctx.fillRect(
    rectHoriCenter,
    rectVertCenter,
    rectWidth,
    rectHeight
  );
  ctx.stroke();
  ctx.restore();

  window.requestAnimationFrame(draw);
}

init();
