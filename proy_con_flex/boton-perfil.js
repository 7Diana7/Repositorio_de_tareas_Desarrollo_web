// Obtén una referencia a los elementos relevantes
var imageInput = document.getElementById('image-input');
var profileImage = document.getElementById('profile-image');

// Agrega un event listener para el cambio de imagen
imageInput.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    profileImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

// Agrega un event listener para el botón de cambio de imagen
var changeImageButton = document.getElementById('change-image-button');
changeImageButton.addEventListener('click', function() {
  imageInput.click();
});