let SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.maxAlternatives = 1;
recognition.interimResults = false;
recognition.continuous = true;

recognition.onerror = console.error;

recognition.onresult = (event) => {
  document.querySelector("div").innerText =
    event.results[event.resultIndex][0].transcript;
};

recognition.start();
