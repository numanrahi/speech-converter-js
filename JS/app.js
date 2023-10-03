const textArea = document.getElementById("text");
const speakButton = document.getElementById("speak-button");
const stopButton = document.getElementById("stop-button");

speakButton.addEventListener("click", function () {
  let text = textArea.value;
  let utterance = new SpeechSynthesisUtterance();

  utterance.text = text;
  utterance.voice = window.speechSynthesis.getVoices()[2];
  window.speechSynthesis.speak(utterance);
});
stopButton.addEventListener("click", function () {
  speechSynthesis.cancel();
});
utterance.onpause = function (event) {
  if (event.utterance === utterance) {
    window.speechSynthesis.resume();
  }
};
