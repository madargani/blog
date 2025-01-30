const RES = 20;

let vertSrc, fragSrc;
let shdr;
let tex0;

function preload() {
  vertSrc = loadStrings("p5/basic.vert");
  fragSrc = loadStrings("p5/basic.frag");
  console.log(fragSrc);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  vertSrc = resolveLygia(vertSrc);
  fragSrc = resolveLygia(fragSrc);

  shdr = createShader(vertSrc, fragSrc);

  // MAD texture
  tex0 = madTexture();
}

function draw() {
  shader(shdr);

  shdr.setUniform('u_tex0', tex0);
  shdr.setUniform('u_res', RES);

  shdr.setUniform('u_resolution', [width, height]);
  shdr.setUniform('u_mouse', [mouseX, mouseY]);
  shdr.setUniform('u_time', millis() / 1000.0);

  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function madTexture() {
  let g = createGraphics(256, 256);
  g.fill(255);
  g.textAlign(CENTER, CENTER);
  g.textFont("Courier New", 128);
  g.textStyle(BOLD);
  g.text("MAD", g.width / 2, g.height / 2);
  return g;
}
