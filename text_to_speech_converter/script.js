let speakButton = document.querySelector('.input_section button');
let input_section = document.querySelector('.input_section input');

speakButton.addEventListener('click', () => {
    if(input_section.value === ''){
        alert('Please enter some text');
        return;

    }
    let text = input_section.value;
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
});

console.dir(input_section)

input_section.addEventListener('focus', (e) => {
input_section.placeholder = '';
console.log('focus')

})
