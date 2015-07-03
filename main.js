var universalCount = 0 //I am ashamed

function begin() {
	//do nothing...but eventually:
	//prepare the field
	loadInitial()
	setInterval(loadField, 50) //eventually reload the field every five seconds
	//choose a monster
	//prepare health and damage bars
}

function incRed(source) {
	$('#' + source + 'z').empty()
	var width = $('#redInner').width()
	if (width + 10 > 100){
		attack(10)
		width = -10
	} 
	$('#redInner').css('width', width + 10)
}

function incBlue(source) {
	$('#' + source + 'z').empty()
	var width = $('#blueInner').width()
	if (width + 10 > 200) {
		attack(20)
		width = -10
	}
	$('#blueInner').css('width', width + 10)
}

function incGreen(source) {
	$('#' + source + 'z').empty()
	var width = $('#greenInner').width()
	if (width + 10 > 500){
		attack(50)
		width = -10
	}
	$('#greenInner').css('width', width + 10)
}

function attack(damage) {
	var hp = $('#blackInner').width()
	hp -= damage
	if (hp < 0) {
		hp = 300
	}

	$('#blackInner').css('width', hp)
}

// function loadField() {
// 	console.log('LOAD FIELD CALLED')
// 	$(".field").empty()

// 	for (var y = 0; y < 40; y++) {
// 		var rand = Math.floor(Math.random() * 100)
// 		if (rand < 70) {
// 			$(".field").append("<div class='box'></div>")
// 		}
// 		else if (rand < 80) {
// 			$(".field").append("<div class='box' id='" + y + "z'><button class='redButton' onclick='incRed(" + y + ")'></button></div>")
// 		}
// 		else if (rand < 90) {
// 			$(".field").append("<div class='box' id='" + y + "z'><button class='blueButton' onclick='incBlue(" + y + ")'></button></div>")
// 		}
// 		else {
// 			$(".field").append("<div class='box' id='" + y + "z'><button class='greenButton' onclick='incGreen(" + y + ")'></button></div>")
// 		}
// 	}

// }

function loadInitial() {
	for (var x = 1; x <= 4; x++) {
		for (var y = 0; y < 10; y++) {
			$("#column" + x).prepend("<div class='box'></div>")
		}
	}
}


function loadField() {
	console.log('LOAD FIELD CALLED')

	var rand = Math.floor(Math.random() * 100)
	var rand2 = Math.floor(Math.random() * 4) + 1

	$("#column" + rand2 + " > .box").last().remove()
	if (rand < 90) {
		$("#column" + rand2).prepend("<div class='box'></div>")
	}
	else {
		universalCount++
		if (rand < 93) {
			$("#column" + rand2).prepend("<div class='box' id='" + universalCount + "z'><button class='redButton' onclick='incRed(" + universalCount + ")'></button></div>")
		}
		else if (rand < 96) {
			$("#column" + rand2).prepend("<div class='box' id='" + universalCount + "z'><button class='blueButton' onclick='incBlue(" + universalCount + ")'></button></div>")
		}
		else {
			$("#column" + rand2).prepend("<div class='box' id='" + universalCount + "z'><button class='greenButton' onclick='incGreen(" + universalCount + ")'></button></div>")
		}
	}


}