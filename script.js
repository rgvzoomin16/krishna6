const loveButton = document.getElementById('loveButton');
const heartbeatMessage = document.getElementById('heartbeatMessage');

const messages = [
  '💗 Every beat says: I love you, Vinni.',
  '🌸 Your happiness is my favorite prayer.',
  '✨ Loving you feels like destiny in bloom.',
  '🫶 You are my calm, my joy, my forever.'
];

let clickCount = 0;

loveButton.addEventListener('click', () => {
  clickCount += 1;
  heartbeatMessage.textContent = messages[clickCount % messages.length];

  loveButton.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(1.08)' },
      { transform: 'scale(1)' }
    ],
    {
      duration: 320,
      easing: 'ease-out'
    }
  );
});
