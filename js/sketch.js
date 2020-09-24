function setup() {
  // put setup code here
  createCanvas(800,800);
  background(43,76,100);


  //______________groot gebouw rechts_____________
  // basis groot gebouw rechts
  noStroke()
  fill(68, 119, 175)
  rect(400, 40, 300, 760)

  //schaduwvlak rechts
  fill(100, 166, 215)
  rect(550, 40, 150, 760)

  //lijnen wit van boven naar onder
  fill(255)
  rect(425,80, 250, 32)
  rect(425,145, 250, 32)
  rect(425,210, 250, 32)
  rect(425,275, 250, 32)
  rect(425,340, 250, 32)
  rect(425,405, 250, 32)
  rect(425,470, 250, 32)
  rect(425,535, 250, 32)
  rect(425,600, 250, 32)
  rect(425,665, 250, 32)



//_________klein gebouw links__________________
  
//schaduw onder klein gebouw links
fill(0,0,0,50)
rect(350, 610, 158, 190)

// basis klein gebouw links
fill(100, 166, 215)
  rect(350, 610, 150, 190)

  fill(255)
  rect(350,610,150,26)

  rect(350,670,130,25)
  rect(350,715,130,25)
  rect(350,760,130,25)
  
  //schaduw boven klein gebouw links
fill(0,0,0,50)
rect(350, 610, 12, 190)



//______________klein gebouw rechts_____________

//halve cirkel
stroke(255, 255, 255)
strokeWeight(3)
fill(100, 166, 215)
ellipse(662, 477, 130,130)

//schaduw klein gebouw rechts
noStroke()
fill(0,0,0,50)
rect(535,470,225,400)

//basis klein gebouw rechts
fill(68, 119, 175)
  rect(550,470,225,400)

// ramen klein gebouw rechts
fill(255)

rect(550,470,225,15)

rect(575,510,30,270)
rect(623,510,30,270)
rect(671,510,30,270)
rect(719,510,30,270)



//______________groot gebouw links_____________
  // basis groot gebouw links
  noStroke()
  fill(68, 119, 175)
  rect(50, 200, 300, 600)

// blok boven op
fill(255)
rect(230,150,100,50)

//ramen rechthoeken
rect(70,240,260,30)

rect(20,300,360,45)
rect(20,366,360,45)

rect(70,765,260,35)


//ramen vierkant

rect(90,450,40,50)
rect(150,450,40,50)
rect(210,450,40,50)
rect(270,450,40,50)

rect(90,520,40,50)
rect(150,520,40,50)
rect(210,520,40,50)
rect(270,520,40,50)

rect(90,590,40,50)
rect(150,590,40,50)
rect(210,590,40,50)
rect(270,590,40,50)

// opdracht 4j sign your work
text("Vera Maris", 10, 10, 700, 50)

}

function draw() {
  // put drawing code here

  //draw is 60 keer per seconde berekend het programma alles opnieuw
  //background(mouseY,0,0);

  

//random(255) --> 0 tot 255
//random (100,110)--> 100,110. pakt willekurig nummer tussen die bepaalde getallen
  
}