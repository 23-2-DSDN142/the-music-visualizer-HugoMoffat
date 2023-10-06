let firstrun = true
let Wizard;
let PowerY1 = 750
let PowerY2 = 750
let PowerY3 = 750
let PowerO1 = 0
let PowerO2 = 0
let PowerO3 = 0

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

   strokeWeight(0)
   PowerR = vocal/2.5
   fill(116, 147, colourMapVocal, PowerO1)
   ellipse(300, PowerY1, PowerR+10, PowerR+10)
   ellipse(450, PowerY1-80, PowerR, PowerR)
   fill(colourMapVocal, 147, 227, PowerO2)
   ellipse(400, PowerY2+150, PowerR-5, PowerR-5)
   ellipse(550, PowerY2-20, PowerR, PowerR)
   fill(116, colourMapVocal, 227, PowerO3)
   ellipse(500, PowerY3-50, PowerR+10, PowerR+10)
   ellipse(250, PowerY3, PowerR-5, PowerR-5)
   PowerY1 = PowerY1 - 3
   PowerY2 = PowerY2 - 4
   PowerY3 = PowerY3 - 2.2
   PowerO1 = PowerO1 + 0.5
   PowerO2 = PowerO2 + 0.2
   PowerO3 = PowerO3 + 0.3

   if(PowerY1 < -200){
   PowerY1 = 750
   PowerO1 = 0
   }
   if(PowerY2 < -200){
   PowerY2 = 750
   PowerO2 = 0
   }
   if(PowerY3 < -200){
   PowerY3 = 750
   PowerO3 = 0
   }


   // display "words"
   textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, 550);
}