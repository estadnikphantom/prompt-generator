import {promptWords} from "./promptInputs.js";
import {prompts} from "./promptOutputs.js";



let userChoices = [
]

for (let i = 0; i < promptWords.length; i++) {
  userChoices.push(
    {
    }

  );
}



function generatePositivePrompt(options) {
  return `Ultra realistic render of a cute ${options.animal} made of a ((${options.colour})) powder explosions floating in a bright blue sky with hundreds of (((fluffy white clouds))) over ((${options.place})). trending on artstation. Octane render. AND Highly detailed painting of ((psychedelic)) transcendent puffs of smoke explosion and vibrant ((clouds)). cinematic dramatic atmosphere, sharp focus, volumetric lighting, fractals. trending on artstation. highly detailed, concept art. Celebration. ((${options.colour})). 3D. (((dramatic shadows)))`;
};


function generateNegativePrompt(options) {
  return `plastic, amateur, poorly drawn, ugly, flat, signature, (((watermark))), blurry, text, ((naked))`;
};


console.log(prompts)

//  console.log("positive: " + generatePositivePrompt(userChoices) + "\n");
//  console.log("negative: " + generateNegativePrompt(userChoices));

 console.log(promptWords[0].words.replace(/ /g, "").split("\n"));