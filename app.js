const wordList = [
  {
    word: "guitar",
    hint: "A musical instrument with strings.",
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life.",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    word: "painting",
    hint: "An art form using colors on a surface to create images or expression.",
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  {
    word: "football",
    hint: "A popular sport played with a spherical ball.",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa beans.",
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings and a slender body.",
  },
  {
    word: "history",
    hint: "The study of past events and human civilization.",
  },
  {
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "camera",
    hint: "A device used to capture and record images or videos.",
  },
  {
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  {
    word: "adventure",
    hint: "An exciting or daring experience.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    word: "bicycle",
    hint: "A human-powered vehicle with two wheels.",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height.",
  },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
  },
  {
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    word: "vacation",
    hint: "A period of time devoted to pleasure, rest, or relaxation.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    word: "theater",
    hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  {
    word: "sunflower",
    hint: "A tall plant with a large yellow flower head.",
  },
  {
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  {
    word: "breeze",
    hint: "A gentle wind.",
  },
  {
    word: "oasis",
    hint: "A fertile spot in a desert where water is found.",
  },
  {
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star and does not produce light of its own.",
  },
  {
    word: "river",
    hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
  },
  {
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    word: "enigma",
    hint: "Something that is mysterious, puzzling, or difficult to understand.",
  },
  {
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  {
    word: "secret",
    hint: "Something kept hidden or unknown to others.",
  },
  {
    word: "curiosity",
    hint: "A strong desire to know or learn something.",
  },
  {
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    word: "unveil",
    hint: "To make known or reveal something previously secret or unknown.",
  },
  {
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  {
    word: "moonlight",
    hint: "The light from the moon.",
  },
  {
    word: "vibrant",
    hint: "Full of energy, brightness, and life.",
  },
  {
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
  {
    word: "brilliant",
    hint: "Exceptionally clever, talented, or impressive.",
  },
];

let hintText = "";
let guess = "";
let guessArray = [];
let remain = 6;
let score = remain;
let number = 0;
let clicked = [];
let correctedlength = 0;

let randomN = Math.floor(Math.random() * wordList.length);
hintText = wordList[randomN].hint;
guess = wordList[randomN].word;
guessArray = guess.split("");
console.log(guessArray);

document.querySelector(".remain").textContent = remain;
document.querySelector(".score").textContent = score;
document.querySelector(".hint--text").textContent = `Hint: ${hintText}`;

for (let index = 0; index < guess.length; index++) {
  const li = document.createElement("li");
  li.textContent = "__";
  document.querySelector(".guess ul").appendChild(li);
}
let liNode = document.querySelectorAll("li");

// window.addEventListener("load", () => {
//   let randomN = Math.floor(Math.random() * wordList.length);
//   hintText = wordList[randomN].hint;
//   guess = wordList[randomN].word;
//   guessArray = guess.split("");

//   document.querySelector(".hint--text").textContent = `Hint: ${hintText}`;

//   for (let index = 0; index < guess.length; index++) {
//     document.querySelector(".guess").textContent += "___ ";
//   }
// });

document.querySelectorAll(".box").forEach((item) =>
  item.addEventListener("click", (e) => {
    if (!clicked.includes(e.target.textContent)) {
      clicked.push(e.target.textContent);
      if (guessArray.includes(`${e.target.textContent.toLowerCase()}`)) {
        e.target.style.backgroundColor = "green";
        const arr = guessArray.reduce((sum, int, i) => {
          if (int === `${e.target.textContent.toLowerCase()}`) sum.push(i);
          return sum;
        }, []);
        console.log(arr);

        for (let k = 0; k < arr.length; k++) {
          liNode[arr[k]].textContent = e.target.textContent;
          correctedlength++;
        }
        if (correctedlength == guessArray.length) {
          setTimeout(() => {
            return Swal.fire({
              title: "Congrats! You Won",
              text: `Your Word is:  ${guess.toUpperCase()}`,
              imageUrl: "./abstract/victory.gif",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Play Again",
            }).then((result) => {
              if (result.isConfirmed) {
                location.reload();
              }
            });
          }, 300);
        }
      } else {
        e.target.style.backgroundColor = "red";
        if (remain > 1) {
          remain--;
          document.querySelector(".remain").textContent = remain;
          number++;
          document.querySelector(
            ".container img"
          ).src = `./abstract/hangman-${number}.svg`;
        } else {
          remain--;
          document.querySelector(".remain").textContent = remain;
          number++;
          document.querySelector(
            ".container img"
          ).src = `./abstract/hangman-${number}.svg`;
          setTimeout(() => {
            return Swal.fire({
              title: "Sorry! You Lost",
              text: `Your Word is:  ${guess.toUpperCase()}`,
              imageUrl: "./abstract/lost.gif",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Play Again",
            }).then((result) => {
              if (result.isConfirmed) {
                location.reload();
              }
            });
          }, 700);
        }
      }
    }
  })
);
