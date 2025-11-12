function comenzarCurso() {
    window.location.href = '/curso';
}

function cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('usuarioActual');
        window.location.href = '/';
    }
}

const $userName =  document.getElementById('nombre-usuario')
const userName = JSON.parse(localStorage.getItem('userName'))
$userName.innerText = userName