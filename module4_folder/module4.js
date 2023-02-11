/*Hello speaker function*/
const helloSpeak = {
	speakWord: 'Hello',	
};
//This to say Hello
(function () {
	helloSpeak.speak = function (userName) {
		return (helloSpeak.speakWord + " " + userName);
	}
}());


//2
/*Goodbye speaker function*/
const byeSpeaker = {
	speakWord: 'Good Bye'
};

(function () {
	byeSpeaker.speak = function (userName) {
		return (byeSpeaker.speakWord + " " + userName);
	}
}());

//3
//This choose the names
(function () {
	var names = ['Oluwabunmi', 'James', 'Jenifer', 'Jacob', 'Paul', 'Grace', 'Lauren', 'Mae', 'Karin', 'Kerissa'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.speak(name));
			document.write(byeSpeaker.speak(name) + '<br>');
		} else {
			console.log(helloSpeak.speak(name));
			document.write(helloSpeak.speak(name + '<br>'));
		}
	}
})();

