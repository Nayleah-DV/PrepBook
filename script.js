let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let students = [
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7785.jpg?v=1585170078608",
    name:"Leah D.",
    quote:"'The fear of loss is a path to the Dark Side' - Yoda",
    superlative:"Biggest Star Wars Fan"
  },
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7787.jpg?v=1585170112606",
    name:"Brandon R.",
    quote:"Sometimes you will never know the value of a moment until it becomes a memory",
    superlative:"Silent Killer"
  },
    {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7788.jpg?v=1585170118451",
    name:"Eric A.J.C.",
    quote:"High school was just like a poem. Confusing, eyeopening, and short.",
    superlative:"Shy Singer"
  },
    {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7790.jpg?v=1585170127947",
    name:"Mahel Napo",
    quote:"You think you caught time but time has in its grasp.",
    superlative:"Buff Nerd"
  },
    {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-0776.JPG?v=1585166703257",
    name:"Mayhelly",
    quote:"Be the change you want to see in the world ",
    superlative:"Best Confident"
  },
    {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7792.jpg?v=1585170137283",
    name:"Edison Rayes",
    quote:"Platano power!",
    superlative:"Best Chancla Power"
  },
    {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7791.jpg?v=1585170131609",
    name:"Lisondro V.",
    quote:"It takes time to achieve a goal, it doesn't happen over night. Don't give up on your goal.",
    superlative:"Best cook"
  },
    {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7786.jpg?v=1585170109419",
    name:"Lesroy R.",
    quote:"Fortune favors those who are patient",
    superlative:"Best Potato Farmers"
  },
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7917.JPG?v=1585589228327",
    name:"Amadou",
    quote:"There is no point of complaning about shit that is alredy happening",
    superlative:"Best Listener"
  },
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7926-Original.jpg?v=1585589463985",
    name:"Aisatou",
    quote:"Hope for the Best,Prepare for the Worst",
    superlative:"Big Man"
  },
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7923-Original.jpg?v=1585589242965",
    name:"Britney",
    quote:"Rock bottom will teach you lessons and truths that mountain tops never will.",
    superlative:"Captan Only 3s"
  },
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7916.jpg?v=1585589225586",
    name:"Nayeli",
    quote:"Sometimes you will never know the value of a moment until it becomes a memory",
    superlative:"Quite Cat"
  },
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7913.jpg?v=1585589212678",
    name:"Daniela",
    quote:"Remember to smile, it's a look that fits great on anyone. ",
    superlative:"Dance Girl"
  },
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7158-Original.jpg?v=1585589196447",
    name:"DaShawn",
    quote:"You're life is the lens thorugh which you choose to view it",
    superlative:"Camera Man"
  },
  {
    profileImage:"https://cdn.glitch.com/3a6575cd-8104-4525-a162-bfd966756fc7%2FIMG-7435-Original.jpg?v=1585589209182",
    name:"Daniel",
    quote:"Llege con la pampara prendida, Ahora toy coronando...",
    superlative:"Car Lover"
  },
]
let count = 0
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
 document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative

  
nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  if(count==15){
    count=0
  }
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  if(count==-1){
    count=15
  }
  console.log(count) 
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})
