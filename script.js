<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const messageInput = document.getElementById('message');
    const commentList = document.getElementById('comment-list');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Vérifie si les champs sont remplis
      if (!firstNameInput.value.trim() || !lastNameInput.value.trim() || !messageInput.value.trim()) {
        errorMessage.style.display = 'block'; // Affiche le message d'erreur
        return;
      }

      errorMessage.style.display = 'none'; // Cache le message d'erreur si les champs sont remplis

      // Crée et ajoute le nouveau commentaire
      const newCommentHtml = `
        <div class="flex space-x-4 text-sm text-gray-500">
          <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstNameInput.value} ${lastNameInput.value}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
              <p>${messageInput.value}</p>
            </div>
          </div>
        </div>
      `

      commentList.insertAdjacentHTML('beforeend', newCommentHtml);

      // Réinitialise les champs du formulaire
      firstNameInput.value = '';
      lastNameInput.value = '';
      messageInput.value = '';
    });
  });
</script>
