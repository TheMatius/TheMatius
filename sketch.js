var colors = [];
var notes = [];
var size, grow, osc;
	

function setup() {
	createCanvas(windowWidth, windowHeight); /*un tamaño para la pantalla 800 ancho, 600 alto o windowWidth o windowHeigth*/
	// frameRate(10); /*la velocidad de cambio*/

	colors[0] = color(255, 120, 120);
	colors[1] = color(15, 16, 37);
	colors[2] = color(15, 25, 67);
	colors[3] = color(21, 47, 89);
	colors[4] = color(23, 74, 121);
	colors[5] = color(14, 111, 173);
	
	notes = [130.81, 155.56, 174.61, 185.00, 196.00, 233.08, 130.81]; 

	size = 100;
	grow = false;

	osc = new p5.Oscillator();
	osc.setType('sine');
	// osc.freq(19.45);
	// osc.amp(0.2);
	osc.start();

	var delay = new p5.Delay();
	delay.process(osc, .12, .7, 2300);
}

function draw() {
	// background(225); /*Es el fondo cada vez que se cumpla el ciclo
	fill(255, 3); /*Que se vaya desvaneciendo el fondo*/
	rect(0, 0, width, height); /*width y height hacen referencia a todo el ancho y largo de la pantalla*/
	
	// size = random(100);
	
	if (mouseIsPressed) { /*Cuando el mouse está presionado*/
		/*fill(0);/*rellena con negro cuando se preciona el clic */
		fill(colors[parseInt(random(5))]);
	} else fill(255);/*Queda blanco cuándo no se presione*/

	if (size == 100)
		grow = true;

	if (size == 0)
		grow = false;

	if (!grow)
		size++;
	else
		size--;

  	ellipse(mouseX, mouseY, size, size); /*hace el circulo(50,50,80,80) los 80 son el tamaño para el circulo, los 50 son para 
  	la posición en el plano también podemos usar el random*/
  	
  	ellipse(width-mouseX, mouseY, size,  size); /*saca otro circulo paralelo horizontal*/
  	ellipse(mouseX, height-mouseY, size, size) /*saca otro circulo paralelo vertical*/
  	ellipse(width-mouseX, height-mouseY, size, size); /*saca uno diagonal*/

  	var pos = map(mouseY, 0, height, 1, 0);
	osc.amp(pos);

	var space = width/notes.length;
	var pos1, pos2;

	for (var i = 0; i >= notes.length; i++) {
		// pos1 = mouseX;
	}

	if (mouseX > 0 && mouseX <= width/6) osc.freq(notes[0]);
	if (mouseX > width/6 && mouseX <= 2*width/6) osc.freq(notes[1]);
	if (mouseX > 2*width/6 && mouseX <= 3*width/6) osc.freq(notes[2]);
	if (mouseX > 3*width/6 && mouseX <= 4*width/6) osc.freq(notes[3]);
	if (mouseX > 4*width/6 && mouseX <= 5*width/6) osc.freq(notes[4]);
	if (mouseX > 5*width/6 && mouseX <= 6*width/6) osc.freq(notes[5]);
	if (mouseX > 6*width/6 && mouseX <= 7*width/6) osc.freq(notes[6]);	
}