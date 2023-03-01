function generatePositivePrompt(options) {
  return `${options.style.one} of a ${options.material.one} bottle of (((phntmsdonjulio))) tequila, made out of ${options.material.two} packaging, ${options.design.one}, with a (((don julio logo))), in a ${options.place}, ${options.style.two}`;
};


function generateNegativePrompt(options) {
  return `distorted text, illegible text, hand, body part, human hand, (((people))), aroma sticks, vase, ${options.style.neg}, ${options.design.neg}, ${options.material.neg}`;
};


let userChoices = {
  place: "Future",
  material: "Metal",
  design: "Minimal",
  style: "Painting",
}


const selects = [
    {
      id: "place",
      label: "Place",
      options: [
        {
          id: "bar",
          label: "Bar",
          prompt: "(((bar environment))), with a (((bar backdrop)))",
        },
        {
          id: "studio",
          label: "Studio",
          prompt: "(((studio environment)))",
        },
        {
          id: "nature",
          label: "Nature",
          prompt: "(((nature environment, flowers, garden, jungle environment))), nature backdrop",
        },
        {
          id: "future",
          label: "Future",
          prompt: "(((a futuristic lab))), with a (((futuristic lab backdrop)))",
        },
      ],
    },
    {
      id: "material",
      label: "Material",
      options: [
        {
          id: "glass",
          label: "Glass",
          prompt: {
            one: "(((glass)))",
            two: "(((glass)))",
            neg: "",
          },
        },
        {
          id: "sustainable",
          label: "Sustainable",
          prompt: {
            one: "(((wooden and paper)))",
            two: "(((wood, mycelium, paper, biodegradable)))",
            neg: "(((glass bottle))), (((mushrooms))), (((mushroom))), (((lamp)))",
          },
        },
        {
          id: "ceramic",
          label: "Ceramic",
          prompt: {
            one: "(((ceramic)))",
            two: "(((ceramic)))",
            neg: "(((glass bottle)))",
          },
        },
        {
          id: "metal",
          label: "Metal",
          prompt: {
            one: "(((metal)))",
            two: "(((metal)))",
            neg: "(((glass bottle)))",
          },
        },
      ],
    },
    {
      id: "design",
      label: "Design",
      options: [
        {
          id: "ornate",
          label: "Ornate",
          prompt: {
            one: "(ornate, colourful portuguese, mexican, mayan, geometric patterns, ornament)",
            neg: "",
          },
        },
        {
          id: "minimal",
          label: "Minimal",
          prompt: {
            one: "(((minimalist, minimalist product design, simple design))), (((in the style of John Ive, in the style of MUJI)))",
            neg: "(((detail))), (((detailed))), (((crowded))), (((ornament))), pattern",
          },
        },
        {
          id: "futuristic",
          label: "Futuristic",
          prompt: {
            one: "(((streamlined, futuristic, zaha hadid design)))",
            neg: "",
          },
        },
        {
          id: "abstract",
          label: "Abstract",
          prompt: {
            one: "(abstract geometric sculpture in the style of Henry Moore)",
            neg: "",
          },
        },
      ],
    },
    {
      id: "style",
      label: "Style",
      options: [
        {
          id: "realistic",
          label: "Realistic",
          prompt: {
            one: "A cinematic photograph",
            two: "octane render, highly detailed, depth of field",
            neg: "",
          },
        },
        {
          id: "graphic",
          label: "Graphic",
          prompt: {
            one: "An (((illustration graphic)))",
            two: "(((cartoon))), (((sketch)))",
            neg: "(((photorealistic))), (((render))), (((3d)))",
          },
        },
        {
          id: "sketch",
          label: "Sketch",
          prompt: {
            one: "A dynamic (((concept sketch)))",
            two: "(((line drawing))), (((line art, line drawing))), dynamic angle, (((product design sketch))), (((scribble))), messy sketch",
            neg: "(((photorealistic))), (((render)))",
          },
        },
        {
          id: "painting",
          label: "Painting",
          prompt: {
            one: "A (((painting)))",
            two: "(((oil painting)))",
            neg: "(((photorealistic))), (((render)))",
          },
        },
      ],
    },
  ];


function optionSelector(userChoices) {
    let userOptions = {
      place: "Nature",
      material: "Metal",
      design: "Ornate",
      style: "Painting",
      
    };

    //place

    userOptions.place = (selects.find(obj => {
      return obj.id === "place"
    })).options.find(obj => {
     return obj.label === userChoices.place
    }).prompt

   //material

   userOptions.material = (selects.find(obj => {
    return obj.id === "material"
   })).options.find(obj => {
   return obj.label === userChoices.material
   }).prompt

    //design

    userOptions.design = (selects.find(obj => {
       return obj.id === "design"
     })).options.find(obj => {
      return obj.label === userChoices.design
    }).prompt


    //style

    userOptions.style = (selects.find(obj => {
      return obj.id === "style"
    })).options.find(obj => {
     return obj.label === userChoices.style
   }).prompt




    return userOptions

};


console.log("positive: " + generatePositivePrompt(optionSelector(userChoices)));
console.log("negative: " + generateNegativePrompt(optionSelector(userChoices)));