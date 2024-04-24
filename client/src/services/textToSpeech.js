
let synthesis;

function textToSpeech(text, onSpeechEnd) {
  stopSpeech();
  if ('speechSynthesis' in window) {
    synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
    utterance.volume = 1;
    utterance.onend = () => {
      onSpeechEnd();
    };
    // utterance.onerror = (error) => {
      // console.error('Speech synthesis error:', error);
    // };
    synthesis.speak(utterance);
  } else {
    console.error('Text to speech is not supported in this browser.');
  }
}

export function stopSpeech() {
  if (synthesis && synthesis.speaking) {
    synthesis.cancel();
  }
}



export default textToSpeech;
