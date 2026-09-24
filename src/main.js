import './style.css';

const form = document.querySelector('#chat-form');
const input = document.querySelector('#chat-input');
const conversation = document.querySelector('#conversation');
const replies = [
  'Locked in. Tell me the game and I’ll help you get ready.',
  'That sounds like a great session. Want a quick loadout or co-op plan?',
  'I can help with spoiler-light hints, strategy, or a lore refresher.'
];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message) return;
  const player = document.createElement('p');
  player.className = 'player';
  player.textContent = message;
  conversation.append(player);
  input.value = '';
  window.setTimeout(() => {
    const reply = document.createElement('p');
    reply.className = 'bot';
    reply.textContent = replies[Math.floor(Math.random() * replies.length)];
    conversation.append(reply);
    conversation.scrollTop = conversation.scrollHeight;
  }, 350);
});
