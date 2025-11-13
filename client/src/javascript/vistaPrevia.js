function comenzarCurso() {
    window.location.href = '/curso';
}

function cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.clear();
        window.location.href = '/';
    }
}

// Acá se carga el nombre del usuario en la parte superior derecha de la pantalla
const $userName =  document.getElementById('nombre-usuario')
const userName = JSON.parse(localStorage.getItem('user'))
$userName.innerHTML = userName[0].name
