console.log("The yes/no Quiz")
var score = 0
var readlineSync = require('readline-sync')
var userName= readlineSync.question("your name please!  ")
console.log('welcome '+ userName)
var question1 = readlineSync.question('Have you ever broken your bone? ')
if (question1 === 'yes')
{
  score = score+1
  //console.log('current score is y'+ score)
}
else
{
  score=score-1
 // console.log('current score is '+ score)
}
  console.log('current score is '+ score)
var question2 = readlineSync.question('do you like your hometown? ')
if (question2 === 'yes')
{
  score = score+1
  //console.log('current score is '+ score)
}
else
{
  score=score-1
  //console.log('current score is '+ score)
}
  console.log('current score is '+ score)
var question3= readlineSync.question('have you buried a time capsule? ')
if (question3 === 'yes')
{
  score = score+1
  
}
else
{
  score=score-1
  
}
  console.log('current score is '+ score)

var question4= readlineSync.question(' are you scare of dark? ')
if (question4 === 'yes')
{
  score = score+1
}
else{
  score=score-1

}
  console.log('current score is '+ score)
var question5= readlineSync.question(' have you ever failed a test? ')
console.log(userName +' you have completed the quiz ')
if (question5 === 'yes')
{
  score = score+1

}
else
{
  score=score-1

}
  console.log('total  score is '+ score)
if (score === 5 ) 
 {
   console.log('Congratulations !'+ userName + ' you have accquired the full score ')
 }
else
{
  console.log('')
}