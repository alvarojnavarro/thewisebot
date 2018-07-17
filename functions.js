var assumFam = [
	"To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.<br> – Buddha",
	"To put the world in order, we must first put the nation in order; to put the nation in order, we must first put the family in order; to put the family in order; we must first cultivate our personal life; we must first set our hearts right.<br> ― Confucius",
];
var assumRom = [
	"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.<br> – Lao Tzu",
	"In our lonliness assumptions turn comfortably into fears. Love is the antidote against being afraid.<br> – Unknown"
];
var assumOther = [
	"In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.<br> – Buddha",
	"Assumptions are the termites of relationships.<br> – Henry Winkler",
	"Truth hurts; Doubt ruins; Lie destroys.<br> – Unknown",
	"To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.<br> – Buddha"
];
var fearRom = [
	"You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.<br> – Buddha",
	"Don't be afraid when love knocks on your heart. Be afraid when your heart does not open to the possibility of loving.<br/> – Unknown"
];
var fearOther = [
	"To dwell is to garden.<br> – Martin Heidegger",
	"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You must do the thing you think you cannot do.<br> – Eleanor Roosevelt",
	"Remembering that I'll be dead soon is the most important tool I've ever encountered to help me make the big choices in life. Because almost everything - all external expectations, all pride, all fear of embarrassment or failure - these things just fall away in the face of death, leaving only what is truly important.<br> – Steve Jobs",
	"No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now.<br> – Alan Watts",
];
var doubtRom = [
	"The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.<br> – Helen Keller",
	"Doubts will always cloud our minds and hide the guiding stars. Luckily we all possess a compass called heart.<br> – Unknown"
];
var doubtOther = [
	"If you search everywhere, yet cannot find what you are seeking, it is because what you seek is already in your possession.<br> – Lao Tzu",
	"Truth hurts; Doubt ruins; Lie destroys.<br> – Unknown",
];
var Others = [
	"At the center of your being you have the answer; you know who you are and you know what you want.<br> – Lao Tzu",
	""
];
var error = [
	"It seems I don't have an answer for that yet.<br/>Please try again.",
	"Could you ask again please?",
	"It seems you are trying to make fun of me.",
	"That's enough."
];
var n = 0;
//create sets of keywords
var wishKey = /(I wish| I hope)/g;
var fearKey = /(I'm afraid|fear)/g;
var doubtKey = /(I don't know|I'm not sure)/g;
var assumKey = /(I think|don't know|assume|I guess|trust|don't trust|doesn't trust)/g;

var famKey = /(sister|mother|mom|father|dad|brother|stepmother|stepmom|stepfather|stepdad)/g;
var romKey = /(partner|spouse|wife|husband|boyfriend|girlfriend|I like someone|I like a girl|I like a boy|date|dating|ex girlfriend|ex boyfriend|love|significant other)/g;
var othKey = /(friend|friends|roommate|roommates|roommy)/g;

$(document).ready(function() { 
	
	$(".button").click(function(){
		//Removing any content in the advice
		$(".advice").empty();
		//Store the textarea value to compare
		problem = $("textarea").val();
		//Append the result
		//if the problem is about wishing
		if ( problem.search(wishKey) >-1 ) {
			$(".advice").append(Others);
		}
		//if the problem is about fear
		else if ( problem.search(fearKey) >-1 ) {
			if ( problem.search(romKey) >-1 ) {
				$(".advice").append(fearRom[Math.floor(Math.random()*fearRom.length)]);
			}
			else {
				$(".advice").append(fearOther[Math.floor(Math.random()*fearOther.length)]);	
			}
		}
		//if the problem is about doubts
		else if ( problem.search(doubtKey) >-1 ) {
			if ( problem.search(romKey) >-1 ) {
				$(".advice").append(doubtRom[Math.floor(Math.random()*doubtRom.length)]);
			}
			else {
				$(".advice").append(doubtOther[Math.floor(Math.random()*doubtOther.length)]);	
			}
		}
		//if the problem is about assumptions
		else if ( problem.search(assumKey) >-1 ) {
			//within family
			if ( problem.search(famKey) >-1 ) {
				$(".advice").append(assumFam[Math.floor(Math.random()*assumFam.length)]);
			}
			//within couple
			else if ( problem.search(romKey) >-1 ) {
				$(".advice").append(assumRom[Math.floor(Math.random()*assumRom.length)]);
			}
			//everybody
			else {
				$(".advice").append(assumOther[Math.floor(Math.random()*assumOther.length)]);	
			}
		}
		//if the problem doesn't fit any category but includes people
		else if( ( problem.search(famKey) >-1 ) || ( problem.search(romKey) >-1 ) || ( problem.search(othKey) >-1 )  ){
			$(".advice").append(Others);
		}
		else {
			$(".advice").append(error[n]);
			n++;
			if (n==4) {
				setTimeout(function() {
					$("article").remove();
				}, 700);
			};
		}
	});

});