// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += theWordArray[i];

        // Add a space after unless its the last word in the array, then add an "!"
        if(i == theWordArray.length - 1) {
          buildMeUp += "!";
        } else {
          buildMeUp += " ";
        }

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence);

function addExcitementThirdly(theWordArray) {
  let buildMeUpThirdly = "";

  for (let i = 0; i < theWordArray.length; i++) {
    buildMeUpThirdly += theWordArray[i];

    //Add exclamation after every third word. If not, add a space.
    if (i % 3 === 0 && i != 0) {
      buildMeUpThirdly += "!";
    } else {
      if(i === theWordArray.length - 1) {
        //add nothing
      } else {
        buildMeUpThirdly += " ";
      }
    }
    console.log(buildMeUpThirdly);
  }

}

addExcitementThirdly(sentence);