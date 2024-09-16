document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    contrasena();
}

function contrasena(){
    document.getElementById('togglePassword').addEventListener('click', function () {
        var passwordField = document.getElementById('password');
        var passwordFieldType = passwordField.getAttribute('type'); // Obtiene el atributo type del elemento password
        if (passwordFieldType === 'password') {
            passwordField.setAttribute('type', 'text'); // Si el tipo de campo es password, lo cambia a text 
            this.textContent = 'Ocultar'; // Cambia el texto del elemento togglePassword a "Ocultar"
        } else {
            passwordField.setAttribute('type', 'password'); // Si el tipo de campo es text, lo cambia a password 
            this.textContent = 'Mostrar'; // Cambia el texto del elemento togglePassword a "Mostrar"
        }
    });
}
