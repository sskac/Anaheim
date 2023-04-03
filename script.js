var factList = [
  "tohr E, what nik?",
  "ahleesun zenngh",
   "anne jell A changh",
   "sell est. nawton",
   "key our a flare it E",
   "clah rah chungh",
   "Eee lizz ah-buth sooooong",
   "emh uhl E Hanne sin",
   "M ill E Roob N steen",
   "M Uh Loo",
   "EM ah (Oh Neel!)",
   "grayce Gugh",
   "grraes yowh",
   "hayzul river uh",
   "jenn uh Goo",
   "joohl E uh fohrt AY",
   "care N chehn",
   "ka therRe N Lee",
  "ihn G",
   "mah reeh ugh pirsahd fir nan dezh",
   "nikohlus sheygh",
   "rayh chill mill R",
   "vik tor E ugh wit L",
  ];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
  
}