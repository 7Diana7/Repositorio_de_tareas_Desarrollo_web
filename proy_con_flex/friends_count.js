// Obtén una referencia al elemento del contador de amigos
var friendCountElement = document.getElementById('friend-count');

// Obtén una referencia a la lista de amigos
var friendListElement = document.getElementById('friend-list');

// Actualiza el contador de amigos
function updateFriendCount() {
  var friendCount = friendListElement.children.length;
  friendCountElement.textContent = friendCount;
}

// Llama a la función de actualización inicialmente
updateFriendCount();