
  (function (window) {
    var names = ["Sachin", "John", "Cena", "Jason", "Ganesh", "Mohan", "Lohit", "Padala", "Rama", "Shyam"];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })(window);