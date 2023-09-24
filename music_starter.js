
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(50)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   noStroke()
   

   fill(50, 150, 240);
   ellipse(500, 700, 4 * vocal, 4 * vocal);
   
   fill(255, 125)
   ellipse(500, 700, 400 + vocal, 400 + vocal) 

   fill(227, 81, 41);
   ellipse(750, 350, 2 * drum, 2 * drum);
   ellipse(500, 150, 2 * bass, 2 * bass);
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

   




   // display "words"
   textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, 550);
}