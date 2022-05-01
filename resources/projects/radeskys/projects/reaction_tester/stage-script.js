/*jslint browser: true*/
/*global $, jQuery, alert*/

var chardiv = document.getElementById("chardiv");
var character = document.getElementById("character");
var HP = document.getElementById("HP");
var dbz = document.getElementById("dbz");
var naruto = document.getElementById("naruto");
var onepiece = document.getElementById("onepiece");
var stage1title = document.getElementById("stage1-title");
var stage2title = document.getElementById("stage2-title");
var stage3title = document.getElementById("stage3-title");
var stage1img = document.getElementById("stage1-img");
var stage2img = document.getElementById("stage2-img");
var stage3img = document.getElementById("stage3-img");
var stage1div = document.getElementById("stage1div");
var stage2div = document.getElementById("stage2div");
var stage3div = document.getElementById("stage3div");
var clickedTime, createdTime, reactionTime;
var chosenOne, chosenAnime, chosenStage, randomChar, heroHP = 50, enemyHP = 53, HPTitle = "HP: ";
var chosenHero = ['goku', 'naruto', 'luffy', 'gohan', 'sasuke', 'sanji', 'vegeta', 'sakura', 'zoro'];
var chosenEnemy = ['frieza', 'pain', 'buggy', 'cell', 'orochimaru', 'smoker', 'kid-buu', 'kaguya', 'crocodile'];

charobj = {
	"HP": 50,
	"STR": 50,
	"DEF": 50,
	"ABLT": "None",
	"SPD": 50
};

function makeCharacters() {}

$(document).ready(function () {
	$(dbz).click(function () {
		chosenAnime = 1;
		stage1title.innerHTML = "Fight with Frieza";
		stage2title.innerHTML = "Fight with Cell";
		stage3title.innerHTML = "Fight with Kid-Buu";
		stage1img.src = "images/dbz-stage1.jpg";
		stage2img.src = "images/dbz-stage2.jpg";
		stage3img.src = "images/dbz-stage3.jpg";
	});
	$(naruto).click(function () {
		chosenAnime = 2;
		stage1title.innerHTML = "Fight with Pain";
		stage2title.innerHTML = "Fight with Orochimaru";
		stage3title.innerHTML = "Fight with Kaguya";
		stage1img.src = "images/naruto-stage1.jpg";
		stage2img.src = "images/naruto-stage2.jpg";
		stage3img.src = "images/naruto-stage3.jpg";
	});
	$(onepiece).click(function () {
		chosenAnime = 3;
		stage1title.innerHTML = "Fight with Buggy";
		stage2title.innerHTML = "Fight with Smoker";
		stage3title.innerHTML = "Fight with Crocodile";
		stage1img.src = "images/onepiece-stage1.jpg";
		stage2img.src = "images/onepiece-stage2.jpg";
		stage3img.src = "images/onepiece-stage3.jpg";
	});
	$(stage1div).click(function () {
		$('#main-screen').css('display', 'none');
		$('#stage-screen').css('display', 'block');
		if (chosenAnime === 1) {
			$('body').css('background-image', 'url(images/dbz-stage1.jpg)');
			chosenStage = 0;
			makeCharacters();
		} else if (chosenAnime === 2) {
			$('body').css('background-image', 'url(images/naruto-stage1.jpg)');
			chosenStage = 1;
			makeCharacters();
		} else if (chosenAnime === 3) {
			$('body').css('background-image', 'url(images/onepiece-stage1.jpg)');
			chosenStage = 2;
			makeCharacters();
		}
	});
	$(stage2div).click(function () {
		$('#main-screen').css('display', 'none');
		$('#stage-screen').css('display', 'block');
		if (chosenAnime === 1) {
			$('body').css('background-image', 'url(images/dbz-stage2.jpg)');
			chosenStage = 3;
			makeCharacters();
		} else if (chosenAnime === 2) {
			$('body').css('background-image', 'url(images/naruto-stage2.jpg)');
			chosenStage = 4;
			makeCharacters();
		} else if (chosenAnime === 3) {
			$('body').css('background-image', 'url(images/onepiece-stage2.jpg)');
			chosenStage = 5;
			makeCharacters();
		}
	});
	$(stage3div).click(function () {
		$('#main-screen').css('display', 'none');
		$('#stage-screen').css('display', 'block');
		if (chosenAnime === 1) {
			$('body').css('background-image', 'url(images/dbz-stage3.jpg)');
			chosenStage = 6;
			makeCharacters();
		} else if (chosenAnime === 2) {
			$('body').css('background-image', 'url(images/naruto-stage3.jpg)');
			chosenStage = 7;
			makeCharacters();
		} else if (chosenAnime === 3) {
			$('body').css('background-image', 'url(images/onepiece-stage3.jpg)');
			chosenStage = 8;
			makeCharacters();
		}
	});
});

function reDrawCharacter() {}

function makeCharacters() {

    createdTime = Date.now();
    
    var randomChar = Math.random();
    
    if (randomChar < 0.5) {
		HP.innerHTML = HPTitle + heroHP;
		HP.style.color = "blue";
		character.src = "images/" + chosenHero[chosenStage] + ".jpg";
		chosenOne = 1;
	} else {
		HP.innerHTML = HPTitle + enemyHP;
        HP.style.color = "red";
		character.src = "images/" + chosenEnemy[chosenStage] + ".jpg";
		chosenOne = 2;
	}
    
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    var left = Math.random() * width, top = Math.random() * height;
    chardiv.style.top = top + "px";
    chardiv.style.left = left + "px";
    chardiv.style.display = "block";
    reDrawCharacter();
}

function reDrawCharacter() {
    setTimeout(makeCharacters, Math.random() * 5000);
}

reDrawCharacter();

$('#chardiv').click(function () {
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    if (chosenOne === 1) {
        heroHP -= 5;
    } else if (chosenOne === 2) {
        enemyHP -= 3;
    }
    this.style.display = "none";
    document.getElementById("time").innerHTML = reactionTime;
    if (heroHP < 1) {
        alert("Game Over. You've killed the Hero!");
        heroHP = 50;
        enemyHP = 53;
    } else if (enemyHP < 1) {
        alert("You killed the villain! ");
        enemyHP = 53;
    }
    reDrawCharacter();
});