const SLICE_COUNT = 16;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("star" , "png");
  pScope.load_image("koifish" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 26, 14, 87);  //lets us draw the whole circle background, ignoring the boundaries

  var layer2 = new PLayer(accentwave);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer2 = new PLayer(sundial);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
  
  var center = new PLayer(depth);
  center.mode( RING );
  center.set_boundary( 0, 400 );
 
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
  
  var center = new PLayer(ringstar2);
  center.mode( RING );
  center.set_boundary( 0, 400 );

  var center = new PLayer(koi);
  center.mode( RING );
  center.set_boundary( 0, 400 );
}


function depth (x, y, animation, Pscope){
  noStroke();
  fill("#83CDDA")
  ellipse(0, 0, 1250, 1250)
  fill("#5FB4CA")
  ellipse(0, 0, 1000, 1000)
  fill("#3A9BB9")
  ellipse(0, 0, 800, 800)
  fill("#1682A9")
  ellipse(0, 0, 550, 550)
}

function rings (x, y, animation, Pscope){
  stroke("#f5cf67");
  strokeWeight(3)
  noFill();
  ellipse(0, 0, 1800, 1800)
  ellipse(0, 0, 1200, 1200)
}

function ringstar(x, y, animation, pScope){

  push()
  rotate(24*animation.frame);
    scale(3)
    pScope.draw_image("star",x,300);
    pop()

  } 

function ringstar2(x, y, animation, pScope){
    push()
    rotate(-24*animation.frame);
    scale(3)
    pScope.draw_image("star",x,201);
    pop()

} 

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
  fill(23, 109, 179, 90);
  ellipse(particle2x,0,50,50);

}

function particle3(x, y, animation, pScope){
  noStroke(); 
  scale(animation.wave(2));
  let particle3x = animation.wave(1)-280
  fill(255, 255, 255);
  ellipse(particle3x,0,20,20);

}

function sundial(x, y, animation, pScope){
  noStroke(); 
  let sundialx = animation.wave(1)-280
  fill(255, 255, 255);
  rect(sundialx,0,20,20);
}

function accentwave(x, y, animation, pScope){
  noStroke(); 
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("#5468cc");
  arc(x,y,1100,1600,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

}

function squares(x, y, animation, pScope){
  noStroke(); 
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("#5ba8e3") //#A8E6EB
  arc(x,y,1000,1400,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  // fill(255)
  // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}

