window.addEventListener('load', init); 

 //Global Variables

let time = 5;
let score = 0;
let isPlaying;

 //DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize Game

function init(){
	//Load word from array
	showWord(words);

	//call countdown every second
	setInterval(countdown, 1000);

	//Check game status
	setInterval(checkStatus, 50);

	//Start Matching on Word Input
	wordInput.addEventListener('input', startMatch);

}

//Start Match
function startMatch(){
	if(matchWords()){
		isPlaying = true;
		time = 6;
		showWord(words);
		wordInput.value = '';
		score++;
	}
	// If score is negative one display zero
	if (score === -1)
	{
		scoreDisplay.innerHTML = 0;
	}
	else
	{
		scoreDisplay.innerHTML = score;
	}
	
}

//Match Currentword to current Input
function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
			message.innerHTML = "Correct!";
			return true;
		}
		else
		{
			message.innerHTML = '';
			return false;
		}
}

// Pick and show Random word

function showWord(words){
	//generate random array index
	const randIndex = Math.floor(Math.random() * words.length);

	//output random word
	currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown(){
	//Make sure time is not run out
	if(time>0){
		//Decrement
		time--;
	}
	else if(time===0){
		// Game is over
		isPlaying = false;
	}

	//Show Time
	timeDisplay.innerHTML = time;
}

//Check Game Status
function checkStatus(){
	if(!isPlaying && time === 0)
	{
		message.innerHTML = 'Game Over!';
		score = -1;
	}
}