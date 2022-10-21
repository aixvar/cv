var R,D,t=0;

function setup() {
  createCanvas(800,800)
  frameRate(24);
  colorMode(HSB)
}

function draw() {
  t+=.02
  background(0, 0.1)
  noFill();
  strokeWeight(2);
  stroke(26,6,66);
  //ellipse(width/2,height/2,700);
  //circleCustom();
  noStroke();
  for(var i=1;i<7;i++)
    for(var r=0;r<TAU;r+=PI/i/7){
      S=sin(t+i+r*7)
      //fill(r*60,80,99,S+.5)
      fill(r*50,75,99,S+1)
      R=r+t*i*.1*(i%2*2-1)
      D=i+cos(t+i*.5)
      circle(cos(R)*D*50+width/2,sin(R)*D*50+height/2,S*i*1+3)
     
    }
}

/** 
// save jpg
let lapse = 0;    // mouse timer
function mousePressed(){
  // prevents mouse press from registering twice
  if (millis() - lapse > 400){
  save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  }
}
*/