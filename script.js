document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text');
  const btnSubmit = document.getElementById('btn');
  const voiceSelect = document.getElementById('voice');
  const volumeInput = document.getElementById('volume');
  const pitchInput = document.getElementById('pitch');
  const rateInput = document.getElementById('rate');

  function populateVoices() {
    voiceSelect.innerHTML = '';
    speechSynthesis.getVoices().forEach((v, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.innerHTML = v.name;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  function speak() {
    const msg = new SpeechSynthesisUtterance(textInput.value);
    msg.voice = speechSynthesis.getVoices()[voiceSelect.value];
    msg.volume = volumeInput.value;
    msg.pitch = pitchInput.value;
    msg.rate = rateInput.value;
    speechSynthesis.speak(msg);
  }

  btnSubmit.addEventListener('click', speak);
  btnSubmit.disabled = false;
});
