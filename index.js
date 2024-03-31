const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let button = document.getElementById("button")
let firstColorBox = document.getElementById("first-color-box")
let secondColorBox = document.getElementById("second-color-box")
let thirdColorBox = document.getElementById("third-color-box")
let firstHexCode = document.getElementById("first-hex-color")
let secondHexCode = document.getElementById("second-hex-code")
let thirdHexCode = document.getElementById("third-hex-code")


 function generateRandomNumber(){
     //generates a random number between 0 and the length of the array 
   let randomNumber = Math.floor( Math.random() * hexadecimalNumberSystem.length)
   return randomNumber;  
 }



 function hexCodeAndColorGenerator(colorbox, hexCode){
  button.addEventListener("click", function(){
    let hexCodeForBox = "#"
  for (let x = 0; x < 6; x++){
    hexCodeForBox += hexadecimalNumberSystem[generateRandomNumber()]
  }
  colorbox.style.backgroundColor = hexCodeForBox
  hexCode.innerHTML = hexCodeForBox
  })
 }

 hexCodeAndColorGenerator(firstColorBox, firstHexCode)
 hexCodeAndColorGenerator(secondColorBox, secondHexCode)
 hexCodeAndColorGenerator(thirdColorBox, thirdHexCode )



  
  




//  button.addEventListener("click", function(){
//   let hexCodeForFirstBox = "#"
//   for (let x = 0; x < 6; x++){
//     hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
//   }
//   firstColorBox.style.backgroundColor =hexCodeForFirstBox
//   firstHexCode.innerHTML = hexCodeForFirstBox
// })



