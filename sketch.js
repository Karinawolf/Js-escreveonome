function setup() {
    createCanvas(700, 400);
    background("white")
  }
  
  function draw() {
    stroke("red");
    fill("black");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 25);
    }
  }
  