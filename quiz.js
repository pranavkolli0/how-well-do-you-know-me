var readlinesync=require('readline-sync')
var score=0
function play(question,answer){
  var userAnswer=readlinesync.question(question)
  if(userAnswer.toLowerCase()==answer.toLowerCase()){
    console.log("You are right!!!")
    score+=1
  }
  else{
    console.log("You are wrong :( ")
    score-=1
  }
}

questions=[{question:"Where do I live?? ",answer:"hyderabad"},{question:"Where do I work? ",answer:"TCS"},{question:"What is my age? ",answer:"21"},{question:"What is the month I was born in? ",answer:"February"}]

var userName=readlinesync.question("Hey! What is your name??")
console.log("Hi "+userName+"! Let's play how well do you know pranav....")
for(i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
console.log("Your final score: "+score)