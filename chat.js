const sendButton = document.querySelector('#send-button');
const messageInput = document.querySelector('#message-input');
const messageContainer = document.querySelector('#message-container');

sendButton.addEventListener('click', function() {
  const messageText = messageInput.value;
  const userBubble = document.createElement('div');
  userBubble.classList.add('message-bubble', 'user-bubble');
  userBubble.innerText = messageText;
  messageContainer.appendChild(userBubble);
  messageInput.value = '';

  // Simulate an automated response after 1 second
  setTimeout(function() {
    const automatedBubble = document.createElement('div');
    automatedBubble.classList.add('message-bubble', 'automated-bubble');
    automatedBubble.innerText = 'Thanks for your message! We will get back to you shortly.';
    messageContainer.appendChild(automatedBubble);
  }, 1000);
});



