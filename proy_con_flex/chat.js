document.addEventListener('DOMContentLoaded', function() {
    // Conectar con el servidor de chat
    const socket = io('http://localhost:3000'); // Asegúrate de cambiar la URL y el puerto si es necesario
  
    // Obtener elementos del DOM
    const chatContainer = document.getElementById('chat-container');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
  
    // Función para agregar un nuevo mensaje al chat
    function addMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatContainer.appendChild(messageElement);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  
    // Evento para enviar un mensaje cuando se hace clic en el botón
    sendButton.addEventListener('click', function() {
      const message = messageInput.value;
      if (message) {
        socket.emit('message', message);
        messageInput.value = '';
      }
    });
  
    // Evento para enviar un mensaje cuando se presiona Enter
    messageInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        const message = messageInput.value;
        if (message) {
          socket.emit('message', message);
          messageInput.value = '';
        }
      }
    });
  
    // Evento para recibir un mensaje del servidor y mostrarlo en el chat
    socket.on('message', function(message) {
      addMessage(message);
    });
  });
