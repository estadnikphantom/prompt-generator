import {promptWords} from "./promptInputs.js";

let userChoices = [
]

for (let i = 0; i < promptWords.length; i++) {
  userChoices.push({
    id: promptWords[i].id,
    words: promptWords[i].words.replace(/ /g, "").split("\n")
  });
  
}

function findWordsById(id) {
  const words = (userChoices.find(obj => {
    return obj.id === id
  }).words)
  return words
}

//console.log(findWordsById("colour"))

function generatePositivePrompt(i) {
  return `Ultra realistic render of a cute ${findWordsById("animal")[i]} made of a ((${findWordsById("colour")[i]})) powder explosions floating in a bright blue sky with hundreds of (((fluffy white clouds))) over ((${findWordsById("place")[i]})). trending on artstation. Octane render. AND Highly detailed painting of ((psychedelic)) transcendent puffs of smoke explosion and vibrant ((clouds)). cinematic dramatic atmosphere, sharp focus, volumetric lighting, fractals. trending on artstation. highly detailed, concept art. Celebration. ((${findWordsById("colour")[i]})). 3D. (((dramatic shadows)))`;
};

function generateNegativePrompt(i) {
  return `plastic, amateur, poorly drawn, ugly, flat, signature, (((watermark))), blurry, text, ((naked))`;
};

export const positivePrompts = []

for (let i = 0; i < promptWords[0].words.length; i++) {
  positivePrompts.push(
  {
    id: i,
    positive: generatePositivePrompt(i),
    negative: generateNegativePrompt(i)
  }
  )
   
}

console.log(positivePrompts)
