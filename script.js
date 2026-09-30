const exercises=[
  ["🏋️","Bodyweight Squats","3 sets × 12 reps"],
  ["💪","Push Ups","3 sets × 8 reps"],
  ["🦵","Reverse Lunges","3 sets × 10 each leg"],
  ["🧘","Plank","3 sets × 30 sec"],
  ["🏃","Jumping Jacks","2 sets × 30 sec"]
];

const list=document.getElementById("workoutList");
exercises.forEach((e,i)=>{
  const row=document.createElement("div");
  row.className="exercise";
  row.innerHTML=`<div class="exercise-info"><div class="exercise-icon">${e[0]}</div><div><b>${e[1]}</b><br><small>${e[2]}</small></div></div><input class="check" type="checkbox" onchange="toggleExercise(this)">`;
  list.appendChild(row);
});

function toggleExercise(box){box.closest(".exercise").classList.toggle("done",box.checked)}

const tips=[
 "Take 60–90 seconds rest between strength sets and keep your form controlled.",
 "Add a 5–10 minute warm-up before today's workout.",
 "If you feel sharp pain, stop the exercise and rest rather than pushing through it.",
 "Consistency matters more than doing an extremely hard workout once."
];
function generateRecommendation(){
  document.getElementById("recommendation").textContent=tips[Math.floor(Math.random()*tips.length)];
}

function quickAsk(text){document.getElementById("question").value=text;askAI()}

function askAI(){
  const input=document.getElementById("question"), q=input.value.trim();
  if(!q)return;
  addBubble(q,"user"); input.value="";
  setTimeout(()=>addBubble(aiReply(q),"bot"),350);
}

function addBubble(text,type){
  const chat=document.getElementById("chat");
  const div=document.createElement("div");
  div.className="bubble "+type; div.textContent=text; chat.appendChild(div);
  chat.scrollTop=chat.scrollHeight;
}

function aiReply(q){
  const s=q.toLowerCase();
  if(s.includes("workout")||s.includes("exercise"))
    return "Try 3 rounds: 12 squats, 8 push-ups, 10 lunges per leg, 30-sec plank and 30-sec jumping jacks. Rest for 60–90 seconds between rounds.";
  if(s.includes("water")||s.includes("hydration"))
    return "A simple habit is to drink water regularly through the day and more around exercise. Your needs vary with body size, weather and activity.";
  if(s.includes("food")||s.includes("eat")||s.includes("meal"))
    return "After training, choose a balanced meal with protein plus carbohydrates—for example eggs and rice, paneer with chapati, or curd with oats and fruit.";
  if(s.includes("weight")||s.includes("fat"))
    return "For healthy body-composition changes, focus on consistent activity, balanced meals, adequate sleep and a sustainable calorie intake. Avoid crash diets.";
  return "I can help with workouts, simple meal ideas, hydration, recovery and fitness habits. Try asking: “Give me a 20 minute home workout.”";
}
