(function (window) {

  var helloSpeaker = {};
  window.helloSpeaker = helloSpeaker;
  
  var speakWord = "Hello";
  var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;
  
  }) (window);