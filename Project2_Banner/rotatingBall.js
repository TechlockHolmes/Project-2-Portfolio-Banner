//Declare image
let img;
//Declare the rotation of the sphere
let theta = 0;
//Declare the font and font size
let font,
    fontsize = 40;
//Declaring the ease function
let x = 1;
let y = 1;
let easing = 0.4;

function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = loadFont('assets/subtitle/SubtitleBold-OmGP.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    img = loadImage('img/816.jpg');
    noStroke();

    // My first attempt at changing my cursor
    //    img2 = loadImage('img/Icons12.png');
    //    for (let x = 0; x < img2.width; x++) {
    //        for (let y = 0; y < img2.height; y++) {
    //            let a = map(y, 0, img2.height, 255, 0);
    //        }
    //    }


    // Setting up the text characteristics
    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(250);

    //Cursor Change
    //    image(img2, mouseX - img2.width / 0.3, mouseY - img2.height / 0.6);
    translate(-620, 0, 0);
    push();
    //Rotate with Mouse
    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.001);
    rotateY(theta * mouseX * 0.001);
    //    rotateZ(theta * 0.01);
    //    rotateX(theta * 0.01);
    //    rotateY(theta * 0.01);
    //pass image as texture
    texture(img);
    sphere(350);
    pop();
    theta += 0.005;

    //For the cursor, I could only find the code to help ease the image over
    //to places, but i hope to replace the cursor entirely soon.
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;

    ellipse(x, y, 66, 66);

    // Align the text to the right
    // and run drawWords() in the left third of the canvas
    textAlign(RIGHT);
    drawWords(width * 0.6);

    textAlign(RIGHT);
    drawWords(width * 0.6);



}

function drawWords(x) {
    fill(0);
    text('Liz AH', x, 50);

    fill(0);
    text('Finding Order in Chaos', x, 90);
}
