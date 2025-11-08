function cambiarTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form-content');
    
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));
    
    if (tab === 'login') {
        tabs[0].classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        tabs[1].classList.add('active');
        document.getElementById('registro-form').classList.add('active');
    }
}

function mostrarMensaje(elementId, mensaje, tipo) {
    const elemento = document.getElementById(elementId);
    elemento.textContent = mensaje;
    elemento.className = `mensaje ${tipo}`;
    elemento.style.display = 'block';
    
    setTimeout(() => {
        elemento.style.display = 'none';
    }, 3000);
}

function iniciarSesion(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const usuarioGuardado = localStorage.getItem('usuario_' + email);
    
    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        if (usuario.password === password) {
            localStorage.setItem('usuarioActual', JSON.stringify(usuario));
            mostrarMensaje('login-mensaje', '¡Inicio de sesión exitoso! Redirigiendo...', 'exito');
            setTimeout(() => {
                window.location.href = 'vista-previa.html';
            }, 1500);
        } else {
            mostrarMensaje('login-mensaje', 'Contraseña incorrecta', 'error');
        }
    } else {
        mostrarMensaje('login-mensaje', 'Usuario no encontrado', 'error');
    }
}

function registrar(e) {
    e.preventDefault();
    const nombre = document.getElementById('reg-nombre').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    
    if (localStorage.getItem('usuario_' + email)) {
        mostrarMensaje('reg-mensaje', 'Este correo ya está registrado', 'error');
        return;
    }
    
    const usuario = {
        nombre: nombre,
        email: email,
        password: password,
        progreso: {}
    };
    
    localStorage.setItem('usuario_' + email, JSON.stringify(usuario));
    mostrarMensaje('reg-mensaje', '¡Cuenta creada exitosamente! Cambiando a inicio de sesión...', 'exito');
    
    setTimeout(() => {
        cambiarTab('login');
        document.getElementById('login-email').value = email;
    }, 1500);
}

function entrarInvitado() {
    const invitado = {
        nombre: 'Invitado',
        email: 'invitado@temp.com',
        esInvitado: true,
        progreso: {}
    };
    
    localStorage.setItem('usuarioActual', JSON.stringify(invitado));
    window.location.href = 'vista-previa.html';
}

window.onload = function() {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    if (!usuarioActual) {
        window.location.href = 'index.html';
        return;
    }
    document.getElementById('nombre-usuario').textContent = usuarioActual.nombre;
};

function comenzarCurso() {
    window.location.href = 'curso.html';
}

function cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('usuarioActual');
        window.location.href = 'index.html';
    }
}

function mostrarUnidad1() {
    
}