const SLICE_COUNT = 16;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("star" , "png");
  pScope.load_image("koifish" , "png");
  pScope.load_image("jellyfish" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 4, 45, 91);  //lets us draw the whole circle background, ignoring the boundaries

  var layer2 = new PLayer(waves);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
  
  var layer1 = new PLayer(clouds);
  layer1.mode(RING);
  layer1.set_boundary( 0, 800 );

  var center = new PLayer(rings);
  center.mode( RING );
  center.set_boundary( 0, 400 );

  var particles = new PLayer(particle1);
  particles.mode( SWIRL(8) );
  particles.set_boundary( 200, 850 );

  var particles = new PLayer(particle2);
  particles.mode( SWIRL(17) );
  particles.set_boundary( 200, 630 );

  var particles = new PLayer(particle3);
  particles.mode( SWIRL(12) );
  particles.set_boundary( 200, 900 );

  var center = new PLayer(ringstar);
  center.mode( RING );
  center.set_boundary( 0, 400 );
  
  // var center = new PLayer(ringstar2);
  // center.mode( RING );
  // center.set_boundary( 0, 400 );

  var layer1 = new PLayer(jellyfish);
layer1.mode(RING);
layer1.set_boundary( 0, 800 );

  var center = new PLayer(koi);
  center.mode( RING );
  center.set_boundary( 0, 400 );

  
}

function rings (x, y, animation, Pscope){
  stroke("#f5cf67");
  strokeWeight(3)
  noFill();
  ellipse(0, 0, 1650, 1650)
  // ellipse(0, 0, 1200, 1200)
}

function ringstar(x, y, animation, pScope){

  push()
  rotate(23*animation.frame);
    scale(3)
    pScope.draw_image("star",x,275);
    pop()

  } 

// function ringstar2(x, y, animation, pScope){
//     push()
//     rotate(-24*animation.frame);
//     scale(3)
//     pScope.draw_image("star",x,201);
//     pop()

// } 

function koi(x, y, animation, pScope){
    push()
    scale(6)
    if(animation.frame == 0){
    pScope.draw_image("koifish",x,y);
    }
    pop()
}

function particle1(x, y, animation, pScope){
  noStroke(); 
  //const startColor = color("#b5e4ff");
  //const endColor = color("#3a6099");
  scale(animation.wave(2));
  let particle1x = animation.wave(1)+100
  fill(181, 228, 255, 200);
  ellipse(particle1x,0,40,50);


  //if(animation.frame <= 0.5){
  // lerpColor(startColor, endcolor, 0.5); }

}

function particle2(x, y, animation, pScope){
  noStroke(); 
  scale(animation.wave(4));
  let particle2x = animation.wave(1)-120
  fill(41, 153, 214, 90);
  ellipse(particle2x,0,50,50);

}

function particle3(x, y, animation, pScope){
  noStroke(); 
  scale(animation.wave(2));
  let particle3x = animation.wave(1)-280
  fill(255, 255, 255);
  ellipse(particle3x,0,20,20);

}

function waves(x, y, animation, pScope){
  noStroke(); 
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("#14426D");
  arc(x,y,1100,1600,backgroundArcStart,backgroundArcEnd);
  fill("#245680") 
  arc(x,y,1000,1400,backgroundArcStart,backgroundArcEnd);
  fill("#346B92")
  arc(x,y,800,1200,backgroundArcStart,backgroundArcEnd);
  fill("#4380A4")
  arc(x,y,600,1000,backgroundArcStart,backgroundArcEnd);
  fill("#5394B7")
  arc(x,y,400,800,backgroundArcStart,backgroundArcEnd);
  fill("#63A9C9")
  arc(x,y,200,600,backgroundArcStart,backgroundArcEnd);
}

function jellyfish(x, y, animation, pScope){
//translate(50 * animation.frame, 0);
//scale(animation.frame*2);
fill(196, 252, 255)

let jellySize  = 1700 + (animation.wave(1)* 50)
let bounce = 20* animation.wave()
// ellipse(150, 750+bounce ,jellySize); 
push()
angleMode(DEGREES);
translate(0,jellySize);
rotate(180);
scale(0.6);
pScope.draw_image("jellyfish",bounce,jellySize);
pop()

}


function clouds(x, y, animation, pScope){
  //translate(50 * animation.frame, 0);
  //scale(animation.frame*2);
  noStroke(); 
  fill(255, 255, 255)
  
  let ballSize  = 200 + (animation.wave(1)* 50)
  let bounce = 50* animation.wave()
  ellipse(200, 950+bounce ,ballSize); 
  ellipse(280, 950+bounce ,ballSize); 
  ellipse(440, 890+bounce ,ballSize); 

}
