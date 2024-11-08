export const questions = {
  easy: [
    {
      id: 1,
      heading: "Planetary Puzzle",
      question: "I am a planet's distance from a star in our galaxy. If you double this distance, add 10 light-years, and then halve it, you’ll measure 15 light-years. How far am I from the star?",
      options: ["10 light-years", "15 light-years", "20 light-years", "25 light-years"],
      correctAnswer: "10 light-years"
    },
    {
      id: 2,
      heading: "Space Timer Challenge",
      question: "You are timing a celestial event with two sand timers—one measures 4 space-minutes, and the other measures 7 space-minutes. Using both, how can you measure exactly 9 space-minutes to perfectly observe the event?",
      options: [
        "Start both timers and wait until the 4-minute timer finishes, then flip it.",
        "Flip the 7-minute timer after 2 minutes.",
        "Flip the 4-minute timer once and the 7-minute timer twice.",
        "Start both timers, and when the 4-minute timer ends, flip it. When the 7-minute timer ends, flip it."
      ],
      correctAnswer: "Start both timers, and when the 4-minute timer ends, flip it. When the 7-minute timer ends, flip it."
    } 
    //,
    // {
    //   id: 3,
    //   heading: "Alien vs. Mice Paradox",
    //   question: "It takes 5 space-cats 5 space-minutes to catch 5 space-mice on Planet X. If we have 100 space-cats, how long would it take them to catch 100 space-mice?",
    //   options: ["5 space-minutes", "10 space-minutes", "20 space-minutes", "100 space-minutes"],
    //   correctAnswer: "5 space-minutes"
    // },
    // {
    //   id: 4,
    //   heading: "Astronaut Photo Mystery",
    //   question: "An astronaut on Mars is looking at a photo of a person on Earth. A fellow astronaut asks, 'Who is that you’re looking at?' The astronaut replies, 'Brothers and sisters, I have none. But that man’s father is my father’s son.' Who is the person in the photo?",
    //   options: ["His nephew", "His son", "His father", "Himself"],
    //   correctAnswer: "His son"
    // },
    // {
    //   id: 5,
    //   heading: "Alien Fibonacci Sequence",
    //   question: "An alien sends you a sequence of signals: 1, 1, 2, 3, _, 8, … What signal should come in the blank to complete the sequence?",
    //   options: ["4", "5", "6", "7"],
    //   correctAnswer: "5"
    // },

    // {
    //   id: 6,
    //   heading: "Galaxy Pen Pricing",
    //   question: "In the Andromeda galaxy, 4 cosmic pens cost 24 space-credits. How much would 6 pens cost on the same planet?",
    //   options: ["30 space-credits", "36 space-credits", "18 space-credits", "40 space-credits"],
    //   correctAnswer: "36 space-credits"
    // },
    // {
    //   id: 7,
    //   heading: "Intergalactic Code",
    //   question: "In a certain intergalactic code, the word 'STAR' is written as 'TUBR'. How is 'MOON' written in that code?",
    //   options: ["NPPN", "MPPN", "LOOO", "NQQO"],
    //   correctAnswer: "MPPN"
    // },
    // {
    //   id: 8,
    //   heading: "Space Crew Ages",
    //   question: "In a spaceship crew, Astronaut A is older than Astronaut B, and Astronaut B is older than Astronaut C. Who is the oldest astronaut on board?",
    //   options: ["Astronaut A", "Astronaut B", "Astronaut C", "Can’t determine"],
    //   correctAnswer: "Astronaut A"
    // },
    // {
    //   id: 9,
    //   heading: "Space-Time Age Puzzle",
    //   question: "A father on Planet X is twice as old as his son. Five light-years ago, the father was three times as old as his son. How old is the son now?",
    //   options: ["10 years", "15 years", "20 years", "25 years"],
    //   correctAnswer: "15 years"
    // },
    // {
    //   id: 10,
    //   heading: "Cosmic Even Number Sequence",
    //   question: "If the sum of three consecutive even cosmic numbers in a star cluster is 48, what is the smallest of these numbers?",
    //   options: ["12", "14", "16", "18"],
    //   correctAnswer: "14"
    // },
    // {
    //   id: 11,
    //   heading: "Galactic Water Measurement",
    //   question: "You have a 5-liter tank and a 3-liter tank on a distant space station. How can you measure exactly 4 liters of cosmic water?",
    //   options: [
    //     "Fill the 3-liter tank and pour it into the 5-liter tank twice.",
    //     "Fill the 5-liter tank and pour it into the 3-liter tank until it’s full, twice.",
    //     "Fill the 5-liter tank, pour 3 liters into the 3-liter tank, leaving 2 liters in the 5-liter tank.",
    //     "Impossible to measure."
    //   ],
    //   correctAnswer: "Fill the 5-liter tank, pour 3 liters into the 3-liter tank, leaving 2 liters in the 5-liter tank."
    // },
    // {
    //   id: 12,
    //   heading: "Planetary Distance Sequence",
    //   question: "The distances between space stations follow a pattern: 2, 4, 8, 16, __. What is the next distance in this sequence?",
    //   options: ["20 light-years", "24 light-years", "32 light-years", "64 light-years"],
    //   correctAnswer: "32 light-years"
    // },
    // {
    //   id: 13,
    //   heading: "Alien’s Journey up a Cosmic Cliff",
    //   question: "An alien starts at the bottom of a 10-meter cosmic cliff. Each space-day, it climbs up 2 meters but slides down 1 meter at night. How many days will it take the alien to reach the top?",
    //   options: ["9 days", "10 days", "8 days", "7 days"],
    //   correctAnswer: "9 days"
    // },
    // {
    //   id: 14,
    //   heading: "First Light in a Space Chamber",
    //   question: "You enter a dark room on a space station with only a match, a solar lamp, a candle, and a cosmic heater. Which do you light first?",
    //   options: ["Lamp", "Candle", "Heater", "Match"],
    //   correctAnswer: "Match"
    // },
    // {
    //   id: 15,
    //   heading: "Detecting the Heaviest Meteorite",
    //   question: "You have 9 identical-looking meteorite samples, but one of them is heavier. You can use a zero-gravity balance scale only twice. How can you identify the heaviest meteorite?",
    //   options: [
    //     "Divide the meteorites into 3 groups of 3, compare two groups, then compare samples from the heaviest group.",
    //     "Weigh all the meteorites at once.",
    //     "Compare 4 meteorites with 4 other meteorites.",
    //     "Weigh each meteorite individually."
    //   ],
    //   correctAnswer: "Divide the meteorites into 3 groups of 3, compare two groups, then compare samples from the heaviest group."
    // },
    // {
    //   id: 16,
    //   heading: "Spaceship Speed Calculation",
    //   question: "A spaceship travels 240 light-kilometers in 3 star hours. How long will it take to travel 400 light-kilometers at the same speed?",
    //   options: ["4 star hours", "5 star hours", "6 star hours", "7 star hours"],
    //   correctAnswer: "5 star hours"
    // },
    // {
    //   id: 17,
    //   heading: "Astronaut's Jogging Route",
    //   question: "A rectangular space station has a length of 120 star meters and a width of 80 star meters. If an astronaut jogs around the station twice, how far does she travel?",
    //   options: ["200 star meters", "400 star meters", "600 star meters", "800 star meters"],
    //   correctAnswer: "800 star meters"
    // },
    // {
    //   id: 18,
    //   heading: "Time Complexity of Alien Device",
    //   question: "What is the time complexity of finding the maximum energy level in an unsorted array of power readings from alien devices of size n?",
    //   options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    //   correctAnswer: "O(n)"
    // },
    // {
    //   id: 19,
    //   heading: "Hyper-Fuel Tank Filling",
    //   question: "If 5 hyper-fuel pipes can fill a starship tank in 30 star minutes, how long will it take 3 hyper-fuel pipes of the same capacity to fill the tank?",
    //   options: ["45 star minutes", "50 star minutes", "60 star minutes", "75 star minutes"],
    //   correctAnswer: "50 star minutes"
    // },
    // {
    //   id: 20,
    //   heading: "Checking Palindromic Artifact ID",
    //   question: "Which of the following is a correct approach to checking whether an alien artifact's ID number is a space palindrome?",
    //   options: [
    //     "Convert the number to a cosmic string and check if the string is the same forwards and backwards",
    //     "Sort the digits of the number and check if they form an increasing sequence",
    //     "Find the sum of the digits and check if it is divisible by 2",
    //     "Convert the number to binary code and check if the binary representation is the same forwards and backwards"
    //   ],
    //   correctAnswer: "Convert the number to a cosmic string and check if the string is the same forwards and backwards"
    // }
  ] ,
 medium :[ {
  id: 3,
  heading: "Planetary Puzzle",
  question: "I am a planet's distance from a star in our galaxy. If you double this distance, add 10 light-years, and then halve it, you’ll measure 15 light-years. How far am I from the star?",
  options: ["10 light-years", "15 light-years", "20 light-years", "25 light-years"],
  correctAnswer: "10 light-years"
},
{
  id: 4,
  heading: "Space Timer Challenge",
  question: "You are timing a celestial event with two sand timers—one measures 4 space-minutes, and the other measures 7 space-minutes. Using both, how can you measure exactly 9 space-minutes to perfectly observe the event?",
  options: [
    "Start both timers and wait until the 4-minute timer finishes, then flip it.",
    "Flip the 7-minute timer after 2 minutes.",
    "Flip the 4-minute timer once and the 7-minute timer twice.",
    "Start both timers, and when the 4-minute timer ends, flip it. When the 7-minute timer ends, flip it."
  ],
  correctAnswer: "Start both timers, and when the 4-minute timer ends, flip it. When the 7-minute timer ends, flip it."
 }
 // ,
// {
//   id: 3,
//   heading: "Alien vs. Mice Paradox",
//   question: "It takes 5 space-cats 5 space-minutes to catch 5 space-mice on Planet X. If we have 100 space-cats, how long would it take them to catch 100 space-mice?",
//   options: ["5 space-minutes", "10 space-minutes", "20 space-minutes", "100 space-minutes"],
//   correctAnswer: "5 space-minutes"
// },
// {
//   id: 4,
//   heading: "Astronaut Photo Mystery",
//   question: "An astronaut on Mars is looking at a photo of a person on Earth. A fellow astronaut asks, 'Who is that you’re looking at?' The astronaut replies, 'Brothers and sisters, I have none. But that man’s father is my father’s son.' Who is the person in the photo?",
//   options: ["His nephew", "His son", "His father", "Himself"],
//   correctAnswer: "His son"
// },
// {
//   id: 5,
//   heading: "Alien Fibonacci Sequence",
//   question: "An alien sends you a sequence of signals: 1, 1, 2, 3, _, 8, … What signal should come in the blank to complete the sequence?",
//   options: ["4", "5", "6", "7"],
//   correctAnswer: "5"
// },

// {
//   id: 6,
//   heading: "Galaxy Pen Pricing",
//   question: "In the Andromeda galaxy, 4 cosmic pens cost 24 space-credits. How much would 6 pens cost on the same planet?",
//   options: ["30 space-credits", "36 space-credits", "18 space-credits", "40 space-credits"],
//   correctAnswer: "36 space-credits"
// },
// {
//   id: 7,
//   heading: "Intergalactic Code",
//   question: "In a certain intergalactic code, the word 'STAR' is written as 'TUBR'. How is 'MOON' written in that code?",
//   options: ["NPPN", "MPPN", "LOOO", "NQQO"],
//   correctAnswer: "MPPN"
// },
// {
//   id: 8,
//   heading: "Space Crew Ages",
//   question: "In a spaceship crew, Astronaut A is older than Astronaut B, and Astronaut B is older than Astronaut C. Who is the oldest astronaut on board?",
//   options: ["Astronaut A", "Astronaut B", "Astronaut C", "Can’t determine"],
//   correctAnswer: "Astronaut A"
// },
// {
//   id: 9,
//   heading: "Space-Time Age Puzzle",
//   question: "A father on Planet X is twice as old as his son. Five light-years ago, the father was three times as old as his son. How old is the son now?",
//   options: ["10 years", "15 years", "20 years", "25 years"],
//   correctAnswer: "15 years"
// },
// {
//   id: 10,
//   heading: "Cosmic Even Number Sequence",
//   question: "If the sum of three consecutive even cosmic numbers in a star cluster is 48, what is the smallest of these numbers?",
//   options: ["12", "14", "16", "18"],
//   correctAnswer: "14"
// },
// {
//   id: 11,
//   heading: "Galactic Water Measurement",
//   question: "You have a 5-liter tank and a 3-liter tank on a distant space station. How can you measure exactly 4 liters of cosmic water?",
//   options: [
//     "Fill the 3-liter tank and pour it into the 5-liter tank twice.",
//     "Fill the 5-liter tank and pour it into the 3-liter tank until it’s full, twice.",
//     "Fill the 5-liter tank, pour 3 liters into the 3-liter tank, leaving 2 liters in the 5-liter tank.",
//     "Impossible to measure."
//   ],
//   correctAnswer: "Fill the 5-liter tank, pour 3 liters into the 3-liter tank, leaving 2 liters in the 5-liter tank."
// },
// {
//   id: 12,
//   heading: "Planetary Distance Sequence",
//   question: "The distances between space stations follow a pattern: 2, 4, 8, 16, __. What is the next distance in this sequence?",
//   options: ["20 light-years", "24 light-years", "32 light-years", "64 light-years"],
//   correctAnswer: "32 light-years"
// },
// {
//   id: 13,
//   heading: "Alien’s Journey up a Cosmic Cliff",
//   question: "An alien starts at the bottom of a 10-meter cosmic cliff. Each space-day, it climbs up 2 meters but slides down 1 meter at night. How many days will it take the alien to reach the top?",
//   options: ["9 days", "10 days", "8 days", "7 days"],
//   correctAnswer: "9 days"
// },
// {
//   id: 14,
//   heading: "First Light in a Space Chamber",
//   question: "You enter a dark room on a space station with only a match, a solar lamp, a candle, and a cosmic heater. Which do you light first?",
//   options: ["Lamp", "Candle", "Heater", "Match"],
//   correctAnswer: "Match"
// },
// {
//   id: 15,
//   heading: "Detecting the Heaviest Meteorite",
//   question: "You have 9 identical-looking meteorite samples, but one of them is heavier. You can use a zero-gravity balance scale only twice. How can you identify the heaviest meteorite?",
//   options: [
//     "Divide the meteorites into 3 groups of 3, compare two groups, then compare samples from the heaviest group.",
//     "Weigh all the meteorites at once.",
//     "Compare 4 meteorites with 4 other meteorites.",
//     "Weigh each meteorite individually."
//   ],
//   correctAnswer: "Divide the meteorites into 3 groups of 3, compare two groups, then compare samples from the heaviest group."
// },
// {
//   id: 16,
//   heading: "Spaceship Speed Calculation",
//   question: "A spaceship travels 240 light-kilometers in 3 star hours. How long will it take to travel 400 light-kilometers at the same speed?",
//   options: ["4 star hours", "5 star hours", "6 star hours", "7 star hours"],
//   correctAnswer: "5 star hours"
// },
// {
//   id: 17,
//   heading: "Astronaut's Jogging Route",
//   question: "A rectangular space station has a length of 120 star meters and a width of 80 star meters. If an astronaut jogs around the station twice, how far does she travel?",
//   options: ["200 star meters", "400 star meters", "600 star meters", "800 star meters"],
//   correctAnswer: "800 star meters"
// },
// {
//   id: 18,
//   heading: "Time Complexity of Alien Device",
//   question: "What is the time complexity of finding the maximum energy level in an unsorted array of power readings from alien devices of size n?",
//   options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
//   correctAnswer: "O(n)"
// },
// {
//   id: 19,
//   heading: "Hyper-Fuel Tank Filling",
//   question: "If 5 hyper-fuel pipes can fill a starship tank in 30 star minutes, how long will it take 3 hyper-fuel pipes of the same capacity to fill the tank?",
//   options: ["45 star minutes", "50 star minutes", "60 star minutes", "75 star minutes"],
//   correctAnswer: "50 star minutes"
// },
// {
//   id: 20,
//   heading: "Checking Palindromic Artifact ID",
//   question: "Which of the following is a correct approach to checking whether an alien artifact's ID number is a space palindrome?",
//   options: [
//     "Convert the number to a cosmic string and check if the string is the same forwards and backwards",
//     "Sort the digits of the number and check if they form an increasing sequence",
//     "Find the sum of the digits and check if it is divisible by 2",
//     "Convert the number to binary code and check if the binary representation is the same forwards and backwards"
//   ],
//   correctAnswer: "Convert the number to a cosmic string and check if the string is the same forwards and backwards"
// }

 ] ,

 hard:[
  {
    id: 5,
    heading: "Planetary Puzzle",
    question: "I am a planet's distance from a star in our galaxy. If you double this distance, add 10 light-years, and then halve it, you’ll measure 15 light-years. How far am I from the star?",
    options: ["10 light-years", "15 light-years", "20 light-years", "25 light-years"],
    correctAnswer: "10 light-years"
  },
  {
    id: 6,
    heading: "Space Timer Challenge",
    question: "You are timing a celestial event with two sand timers—one measures 4 space-minutes, and the other measures 7 space-minutes. Using both, how can you measure exactly 9 space-minutes to perfectly observe the event?",
    options: [
      "Start both timers and wait until the 4-minute timer finishes, then flip it.",
      "Flip the 7-minute timer after 2 minutes.",
      "Flip the 4-minute timer once and the 7-minute timer twice.",
      "Start both timers, and when the 4-minute timer ends, flip it. When the 7-minute timer ends, flip it."
    ],
    correctAnswer: "Start both timers, and when the 4-minute timer ends, flip it. When the 7-minute timer ends, flip it."
  } 
  // ,
  // {
  //   id: 3,
  //   heading: "Alien vs. Mice Paradox",
  //   question: "It takes 5 space-cats 5 space-minutes to catch 5 space-mice on Planet X. If we have 100 space-cats, how long would it take them to catch 100 space-mice?",
  //   options: ["5 space-minutes", "10 space-minutes", "20 space-minutes", "100 space-minutes"],
  //   correctAnswer: "5 space-minutes"
  // },
  // {
  //   id: 4,
  //   heading: "Astronaut Photo Mystery",
  //   question: "An astronaut on Mars is looking at a photo of a person on Earth. A fellow astronaut asks, 'Who is that you’re looking at?' The astronaut replies, 'Brothers and sisters, I have none. But that man’s father is my father’s son.' Who is the person in the photo?",
  //   options: ["His nephew", "His son", "His father", "Himself"],
  //   correctAnswer: "His son"
  // },
  // {
  //   id: 5,
  //   heading: "Alien Fibonacci Sequence",
  //   question: "An alien sends you a sequence of signals: 1, 1, 2, 3, _, 8, … What signal should come in the blank to complete the sequence?",
  //   options: ["4", "5", "6", "7"],
  //   correctAnswer: "5"
  // },

  // {
  //   id: 6,
  //   heading: "Galaxy Pen Pricing",
  //   question: "In the Andromeda galaxy, 4 cosmic pens cost 24 space-credits. How much would 6 pens cost on the same planet?",
  //   options: ["30 space-credits", "36 space-credits", "18 space-credits", "40 space-credits"],
  //   correctAnswer: "36 space-credits"
  // },
  // {
  //   id: 7,
  //   heading: "Intergalactic Code",
  //   question: "In a certain intergalactic code, the word 'STAR' is written as 'TUBR'. How is 'MOON' written in that code?",
  //   options: ["NPPN", "MPPN", "LOOO", "NQQO"],
  //   correctAnswer: "MPPN"
  // },
  // {
  //   id: 8,
  //   heading: "Space Crew Ages",
  //   question: "In a spaceship crew, Astronaut A is older than Astronaut B, and Astronaut B is older than Astronaut C. Who is the oldest astronaut on board?",
  //   options: ["Astronaut A", "Astronaut B", "Astronaut C", "Can’t determine"],
  //   correctAnswer: "Astronaut A"
  // },
  // {
  //   id: 9,
  //   heading: "Space-Time Age Puzzle",
  //   question: "A father on Planet X is twice as old as his son. Five light-years ago, the father was three times as old as his son. How old is the son now?",
  //   options: ["10 years", "15 years", "20 years", "25 years"],
  //   correctAnswer: "15 years"
  // },
  // {
  //   id: 10,
  //   heading: "Cosmic Even Number Sequence",
  //   question: "If the sum of three consecutive even cosmic numbers in a star cluster is 48, what is the smallest of these numbers?",
  //   options: ["12", "14", "16", "18"],
  //   correctAnswer: "14"
  // },
  // {
  //   id: 11,
  //   heading: "Galactic Water Measurement",
  //   question: "You have a 5-liter tank and a 3-liter tank on a distant space station. How can you measure exactly 4 liters of cosmic water?",
  //   options: [
  //     "Fill the 3-liter tank and pour it into the 5-liter tank twice.",
  //     "Fill the 5-liter tank and pour it into the 3-liter tank until it’s full, twice.",
  //     "Fill the 5-liter tank, pour 3 liters into the 3-liter tank, leaving 2 liters in the 5-liter tank.",
  //     "Impossible to measure."
  //   ],
  //   correctAnswer: "Fill the 5-liter tank, pour 3 liters into the 3-liter tank, leaving 2 liters in the 5-liter tank."
  // },
  // {
  //   id: 12,
  //   heading: "Planetary Distance Sequence",
  //   question: "The distances between space stations follow a pattern: 2, 4, 8, 16, __. What is the next distance in this sequence?",
  //   options: ["20 light-years", "24 light-years", "32 light-years", "64 light-years"],
  //   correctAnswer: "32 light-years"
  // },
  // {
  //   id: 13,
  //   heading: "Alien’s Journey up a Cosmic Cliff",
  //   question: "An alien starts at the bottom of a 10-meter cosmic cliff. Each space-day, it climbs up 2 meters but slides down 1 meter at night. How many days will it take the alien to reach the top?",
  //   options: ["9 days", "10 days", "8 days", "7 days"],
  //   correctAnswer: "9 days"
  // },
  // {
  //   id: 14,
  //   heading: "First Light in a Space Chamber",
  //   question: "You enter a dark room on a space station with only a match, a solar lamp, a candle, and a cosmic heater. Which do you light first?",
  //   options: ["Lamp", "Candle", "Heater", "Match"],
  //   correctAnswer: "Match"
  // },
  // {
  //   id: 15,
  //   heading: "Detecting the Heaviest Meteorite",
  //   question: "You have 9 identical-looking meteorite samples, but one of them is heavier. You can use a zero-gravity balance scale only twice. How can you identify the heaviest meteorite?",
  //   options: [
  //     "Divide the meteorites into 3 groups of 3, compare two groups, then compare samples from the heaviest group.",
  //     "Weigh all the meteorites at once.",
  //     "Compare 4 meteorites with 4 other meteorites.",
  //     "Weigh each meteorite individually."
  //   ],
  //   correctAnswer: "Divide the meteorites into 3 groups of 3, compare two groups, then compare samples from the heaviest group."
  // },
  // {
  //   id: 16,
  //   heading: "Spaceship Speed Calculation",
  //   question: "A spaceship travels 240 light-kilometers in 3 star hours. How long will it take to travel 400 light-kilometers at the same speed?",
  //   options: ["4 star hours", "5 star hours", "6 star hours", "7 star hours"],
  //   correctAnswer: "5 star hours"
  // },
  // {
  //   id: 17,
  //   heading: "Astronaut's Jogging Route",
  //   question: "A rectangular space station has a length of 120 star meters and a width of 80 star meters. If an astronaut jogs around the station twice, how far does she travel?",
  //   options: ["200 star meters", "400 star meters", "600 star meters", "800 star meters"],
  //   correctAnswer: "800 star meters"
  // },
  // {
  //   id: 18,
  //   heading: "Time Complexity of Alien Device",
  //   question: "What is the time complexity of finding the maximum energy level in an unsorted array of power readings from alien devices of size n?",
  //   options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
  //   correctAnswer: "O(n)"
  // },
  // {
  //   id: 19,
  //   heading: "Hyper-Fuel Tank Filling",
  //   question: "If 5 hyper-fuel pipes can fill a starship tank in 30 star minutes, how long will it take 3 hyper-fuel pipes of the same capacity to fill the tank?",
  //   options: ["45 star minutes", "50 star minutes", "60 star minutes", "75 star minutes"],
  //   correctAnswer: "50 star minutes"
  // },
  // {
  //   id: 20,
  //   heading: "Checking Palindromic Artifact ID",
  //   question: "Which of the following is a correct approach to checking whether an alien artifact's ID number is a space palindrome?",
  //   options: [
  //     "Convert the number to a cosmic string and check if the string is the same forwards and backwards",
  //     "Sort the digits of the number and check if they form an increasing sequence",
  //     "Find the sum of the digits and check if it is divisible by 2",
  //     "Convert the number to binary code and check if the binary representation is the same forwards and backwards"
  //   ],
  //   correctAnswer: "Convert the number to a cosmic string and check if the string is the same forwards and backwards"
  // }

 ]


};
