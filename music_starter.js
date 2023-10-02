let firstrun = true
let Wizard;



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
    if(firstrun){
    rectMode(CENTER)
    Wizard = loadImage('Wizard.png')
    RightHand = loadImage('RightHand.png')
    LeftHand = loadImage('LeftHand.png')
    firstrun = false
  }
  
  background(50)
  textFont('Helvetica'); // please use CSS safe fonts
  
  textSize(24);
  
   let drumMap = map(drum, 0, 100, 0, 1000)
   let colourMapOther = map(other, 0, 100, 0, 255)
   let colourMapBass = map(bass, 0, 100, 0, 255)
   let colourMapDrum = map(drum, 0, 100, 0, 255)
   let colourMapVocal = map(vocal, 0, 100, 0, 255)

   strokeWeight(8)
   stroke(drum, 50)

   for(var i = 1; i <= drumMap; i++){
    var LineSpace = i + 20
    line(10, 750 - LineSpace, 990, 750 - LineSpace)
   }

   

   fill(colourMapDrum, 81, 41)
   ellipse(750, 350, 2 * drum, 2 * drum);
   fill(colourMapBass, 81, 41);
   ellipse(500, 150, 2 * bass, 2 * bass);
   fill(colourMapOther, 81, 41)
   ellipse(150, 200, 2 * other, 2 * other);
   
   fill(0)
   rect(750, 350, 5, 10)
   rect(500, 150, 5, 10)
   rect(150, 200, 5, 10)
   
   fill(255, 187, 138)
   rect(750, 390, 40, 80)
   rect(500, 190, 40, 80)
   rect(150, 240, 40, 80)
   
   fill(186, 119, 71)
   rect(763, 388, 9, 70)
   rect(137, 240, 7, 70)
   rect(517, 188, 5, 70)
   rect(483, 188, 5, 70)

   fill(30)
   rect(750, 455, 90, 50)
   rect(500, 255, 90, 50)
   rect(150, 305, 90, 50)

   image(Wizard, 150,240)

   fill(50, colourMapVocal, 240, 200);
   ellipse(500, 700, 4 * vocal, 4 * vocal);
   
   fill(255, colourMapVocal/2)
   ellipse(500, 700, 400 + vocal, 400 + vocal) 
   
   scale(1.2)
   image(RightHand, 250 - vocal, 475)
   image(LeftHand, 525 + vocal, 475)
   
   let potionX = 625
   let potionY = 125
   
   fill(255, 200)
   ellipse(potionX+25, potionY, 100, 100)
   rect(potionX+25, potionY-50, 30, 40)
   fill(250, 0, colourMapDrum, 200)
   ellipse(potionX+25, potionY, 90, 90)
   rect(potionX+25, potionY-50, 20, 30)

   fill(255, 200)
   ellipse(potionX+150, potionY, 100, 100)
   rect(potionX+150, potionY-50, 30, 40)
   fill(colourMapBass, 250, 0, 200)
   ellipse(potionX+150, potionY, 90, 90)
   rect(potionX+150, potionY-50, 20, 30)

   fill(64, 37, 11)
   rect(725, 200, 300, 50)

   // display "words"
   textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, 550);
}