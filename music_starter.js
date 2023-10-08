let firstrun = true
let Wizard;
let EnergyY1 = 750 // Y pos of the energy emminating from the orb
let EnergyY2 = 750 
let EnergyY3 = 750 
let EnergyO1 = 0 // opacity of emminating energy
let EnergyO2 = 0
let EnergyO3 = 0

function draw_one_frame(words, vocal, drum, bass, other, counter) {
    if(firstrun){
    rectMode(CENTER)
    Wizard = loadImage('Wizard.png')
    RightHand = loadImage('RightHand.png')
    LeftHand = loadImage('LeftHand.png')
    firstrun = false
  }
  
  background(50)
  
  textSize(24);
  
   let drumMap = map(drum, 0, 100, 0, 1000) // maps
   let colourMapOther = map(other, 0, 100, 0, 255)
   let colourMapBass = map(bass, 0, 100, 0, 255)
   let colourMapDrum = map(drum, 0, 100, 0, 255)
   let colourMapVocal = map(vocal, 0, 100, 0, 255)

   strokeWeight(8)
   stroke(drum, 50) // changing colour based on drum value

   for(var i = 1; i <= drumMap; i++){ // flickering background
    var LineSpace = i + 20
    line(10, 750 - LineSpace, 990, 750 - LineSpace)
   }

   fill(colourMapDrum, 81, 41) // orange candle light changes due to map
   ellipse(750, 350, 2 * drum, 2 * drum); // candle lights
   fill(colourMapBass, 81, 41);
   ellipse(500, 150, 2 * bass, 2 * bass);
   fill(colourMapOther, 81, 41)
   ellipse(150, 200, 2 * other, 2 * other);
   
   fill(0) // black
   rect(750, 350, 5, 10) // candle wicks
   rect(500, 150, 5, 10)
   rect(150, 200, 5, 10)
   
   fill(255, 187, 138) // beige
   rect(750, 390, 40, 80) // candles
   rect(500, 190, 40, 80)
   rect(150, 240, 40, 80)
   
   fill(186, 119, 71) // brown
   rect(763, 388, 9, 70) // candle shadows
   rect(137, 240, 7, 70)
   rect(517, 188, 5, 70)
   rect(483, 188, 5, 70)

   fill(30) // dark grey
   rect(750, 455, 90, 50) // shelves
   rect(500, 255, 90, 50)
   rect(150, 305, 90, 50)

   image(Wizard, 150,240) // wizard

   fill(50, colourMapVocal, 240, 200); // primarily blue colour changes due to vocal map
   ellipse(500, 700, 4 * vocal, 4 * vocal); // inner orb
   
   fill(255, colourMapVocal/2) // white, opacity changes due to vocal map
   ellipse(500, 700, 400 + vocal, 400 + vocal) // outer orb
   
   scale(1.2)
   image(RightHand, 250 - vocal, 475) // right hand
   image(LeftHand, 525 + vocal, 475) // left hand

   strokeWeight(0)
   EnergyR = vocal/2.5
   fill(116, 147, colourMapVocal, EnergyO1) // colour changes due to vocal map
   ellipse(300, EnergyY1, EnergyR+10, EnergyR+10) // emminating energy
   ellipse(450, EnergyY1-80, EnergyR, EnergyR)
   fill(colourMapVocal, 147, 227, EnergyO2)
   ellipse(400, EnergyY2+150, EnergyR-5, EnergyR-5)
   ellipse(550, EnergyY2-20, EnergyR, EnergyR)
   fill(116, colourMapVocal, 227, EnergyO3)
   ellipse(500, EnergyY3-50, EnergyR+10, EnergyR+10)
   ellipse(250, EnergyY3, EnergyR-5, EnergyR-5)
   EnergyY1 = EnergyY1 - 3 // rate of change for Y pos of emminating energy
   EnergyY2 = EnergyY2 - 4
   EnergyY3 = EnergyY3 - 2.2
   EnergyO1 = EnergyO1 + 0.5 // rate of change for opacity of emminating energy
   EnergyO2 = EnergyO2 + 0.2
   EnergyO3 = EnergyO3 + 0.3

   if(EnergyY1 < -200){ // resets the opacity and Y pos of emminating energy
   EnergyY1 = 750
   EnergyO1 = 0
   }
   if(EnergyY2 < -200){
   EnergyY2 = 750
   EnergyO2 = 0
   }
   if(EnergyY3 < -200){
   EnergyY3 = 750
   EnergyO3 = 0
   }
}