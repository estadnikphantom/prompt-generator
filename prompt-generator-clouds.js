function generatePositivePrompt(options) {
  return `Ultra realistic render of a cute ${options.animal.one} made of a ((${options.colour.one})) powder explosions floating in a bright blue sky with hundreds of (((fluffy white clouds))) over ((${options.place.one})). trending on artstation. Octane render. AND Highly detailed painting of ((psychedelic)) transcendent puffs of smoke explosion and vibrant ((clouds)). cinematic dramatic atmosphere, sharp focus, volumetric lighting, fractals. trending on artstation. highly detailed, concept art. Celebration. ((${options.colour.one})). 3D. (((dramatic shadows)))`;
};


function generateNegativePrompt(options) {
  return `plastic, amateur, poorly drawn, ugly, flat, signature, (((watermark))), blurry, text, ((naked))`;
};


let userChoices = {
  animal: "Capybara",
  colour: "Orange",
  place: "New York",
}


const selects = [
  {
    id: "animal",
    label: "Animal",
    options: [
      {
        id: "cheetah",
        label: "Cheetah",
        prompt: {
          one: "cheetah",
        },
      },
      {
        id: "otter",
        label: "Otter",
        prompt: {
          one: "otter",
        },
      },
      {
        id: "panda",
        label: "Panda",
        prompt: {
          one: "panda bear",
        },
      },
      {
          id: "squirrel",
          label: "Squirrel",
          prompt: {
            one: "squirrel",
          },
      },
      {
          id: "lemur",
          label: "Lemur",
          prompt: {
            one: "lemur",
          },
      },
      {
          id: "pig",
          label: "Pig",
          prompt: {
            one: "pig",
          },
      },
      {
          id: "wombat",
          label: "Wombat",
          prompt: {
            one: "wombat",
          },
      },
      {
          id: "ewok",
          label: "Ewok",
          prompt: {
            one: "ewok",
          },
      },
      {
          id: "capybara",
          label: "Capybara",
          prompt: {
            one: "capybara",
          },
      },
      {
          id: "eagle",
          label: "Eagle",
          prompt: {
            one: "eagle",
          },
        },
    ],
  },
  {
    id: "colour",
    label: "Colour",
    options: [
      {
        id: "pink",
        label: "Pink",
        prompt: {
          one: "pink",
        },
      },
      {
        id: "blue",
        label: "Blue",
        prompt: {
          one: "blue",
        },
      },
      {
        id: "red",
        label: "Red",
        prompt: {
          one: "red",
        },
      },
      {
          id: "green",
          label: "Green",
          prompt: {
            one: "green",
          },
      },
      {
          id: "orange",
          label: "Orange",
          prompt: {
            one: "orange",
          },
      },
      {
          id: "yellow",
          label: "Yellow",
          prompt: {
            one: "yellow",
          },
      },
      {
          id: "purple",
          label: "Purple",
          prompt: {
            one: "purple",
          },
      },
      {
          id: "teal",
          label: "Teal",
          prompt: {
            one: "teal",
          },
      },
      {
          id: "black",
          label: "Black",
          prompt: {
            one: "black",
          },
      },
      {
          id: "white",
          label: "White",
          prompt: {
            one: "white",
          },
        },
    ],
},
{
  id: "place",
  label: "Place",
  options: [
    {
      id: "beach",
      label: "Beach",
      prompt: {
        one: "beach, sand",
      },
    },
    {
      id: "forest",
      label: "Forest",
      prompt: {
        one: "forest, trees",
      },
    },
    {
      id: "sea",
      label: "Sea",
      prompt: {
        one: "sea, ocean, water",
      },
    },
    {
        id: "new york",
        label: "New York",
        prompt: {
          one: "New York City",
        },
    },
    {
        id: "alps",
        label: "Alps",
        prompt: {
          one: "Alps mountains",
        },
    },
    {
        id: "saturn",
        label: "Saturn",
        prompt: {
          one: "Saturn",
        },
    },
    {
        id: "white",
        label: "White",
        prompt: {
          one: "white",
        },
      },
      {
          id: "tulum",
          label: "Tulum",
          prompt: {
            one: "Tulum, Mexico",
          },
      },
      {
          id: "himalayas",
          label: "Himalayas",
          prompt: {
            one: "Himalayas",
          },
      },
      {
          id: "moon",
          label: "Moon",
          prompt: {
            one: "Moon",
          },
      },
  ],
},
  ];


function optionSelector(choices) {
    let userOptions = {
      animal: "Capybara",
      colour: "Black",
      place: "Tulum",
    };

    //animal

    userOptions.animal = (selects.find(obj => {
      return obj.id === "animal"
    })).options.find(obj => {
      return obj.label === choices.animal
    }).prompt

   //colour

   userOptions.colour = (selects.find(obj => {
    return obj.id === "colour"
   })).options.find(obj => {
   return obj.label === choices.colour
   }).prompt

    //place

    userOptions.place = (selects.find(obj => {
       return obj.id === "place"
     })).options.find(obj => {
      return obj.label === choices.place
    }).prompt


    return userOptions

};



 console.log("positive: " + generatePositivePrompt(optionSelector(userChoices)));
 console.log("negative: " + generateNegativePrompt(optionSelector(userChoices)));