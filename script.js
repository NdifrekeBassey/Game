'use strict'
// console.log(document.querySelector('.message').textContent);
// (document.querySelector('.message').textContent) = 'Correct Number'

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function(){

    console.log(document.querySelector('.guess').value);
    
let guess = Number(document.querySelector('.guess').value);
console.log(guess);

if (!guess)
  document.querySelector('.message').textContent = 'Enter a number'

else if (guess === secretNumber){
  document.querySelector('.message').textContent = 'Correct number';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}

else if (guess > secretNumber) {
  if(score>0){
  document.querySelector('.message').textContent = 'too high';
  --score;
  document.querySelector('.score').textContent = score;
      }
    else{
    document.querySelector('.message').textContent = 'game over';
}      
}

else if (guess < secretNumber) {
  if(score<0);
  document.querySelector('.message').textContent = 'too low';
  --score;
  document.querySelector('.score').textContent = score;
      }

else{
        document.querySelector('.message').textContent = 'game over';
    }  
})
