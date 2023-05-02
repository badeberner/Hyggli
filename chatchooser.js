const conversationList = document.querySelector('.sidebar');
const messageCont = document.querySelector('.conversation-list');
const conversationItems = conversationList.querySelectorAll('li');

// Add event listeners to conversation items
conversationItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all conversation items
    const conversationUrl = item.dataset.url;
    window.location.href = conversationUrl;
    });

    // Add active class to clicked conversation item

    // Update message container with messages for selected conversation
    const conversationName = item.querySelector('.name').textContent;
    // Fetch messages for selected conversation and update message container
  });