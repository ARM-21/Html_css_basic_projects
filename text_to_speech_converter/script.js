let speakButton = document.querySelector('.input_section button');
let input_section = document.querySelector('.input_section input');

speakButton.addEventListener('click', () => {
    let text = input_section.value;
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
});