const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playToSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
//------------------------------------------------------
p1Button.addEventListener('click', function() {
	if(!isGameOver){
	p1Score++; //Add score to player one
	}

	if(p1Score === winningScore){ //Ends game if player 1 score == score selected in drop down window
		isGameOver = true;
		p1Display.classList.add('has-text-success');
		p2Display.classList.add('has-text-danger');

		p1Button.disabled = true
		p2Button.disabled = true
	}
	p1Display.textContent = p1Score; //updates score
})
//-----------------------------------------------------
p2Button.addEventListener('click', function() {
	if(!isGameOver)
	p2Score++;

	if(p2Score === winningScore){
		isGameOver = true;
		p2Display.classList.add('has-text-success');
		p1Display.classList.add('has-text-danger');

		p1Button.disabled = true
		p2Button.disabled = true
	}
	p2Display.textContent = p2Score;
})
//----------------------------------------------------
playToSelect.addEventListener('change', function() {
	winningScore = parseInt(this.value)
	reset();
})

//----------------------------------------------------
resetButton.addEventListener('click', reset)
//----------------------------------------------------
function reset() {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('has-text-success', 'has-text-danger');
	p2Display.classList.remove('has-text-danger', 'has-text-success');
	p1Button.disabled = false
	p2Button.disabled = false
}

console.log("Hey get outta here!");