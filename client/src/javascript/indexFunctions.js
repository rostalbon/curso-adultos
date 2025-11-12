import {
    $registerButton,    
    $loginEmail,    
    $loginPassword, 
    $registerName,  
    $registerEmail, 
    $registerPassword,  
    $tabs,  
    $forms, 
} from './domElements.js'

function mostrarMensaje(elementId, mensaje, tipo) {
    const elemento = document.getElementById(elementId);
    elemento.textContent = mensaje;
    elemento.className = `mensaje ${tipo}`;
    elemento.style.display = 'block';
    
    setTimeout(() => {
        elemento.style.display = 'none';
    }, 4000);
}

const iniciarSesion = async (e) => {
    e.preventDefault();
    const email = $loginEmail.value
    const password = $loginPassword.value

    const body = {
        email: email,
        password: password
    }
    
    try {
      const res = await fetch('/user/login', {
          headers: {
              "Content-Type": "application/json",
          },
          method: 'post',
          body: JSON.stringify(body)
      })
  
      if (res.ok) {
        const data = await res.json()
        localStorage.setItem('userName', JSON.stringify(data?.name))
        window.location.href = '/vista-previa'
      } else {
        mostrarMensaje('login-mensaje', 'El usuario no existe, cree uno o pruebe con otras credenciales', 'error')
      }
    } catch (e) {
      mostrarMensaje('login-mensaje', 'Las credenciales no son válidas o el usuario no existe. Pruebe de nuevo o cree un nuevo usuario en caso de no tener uno', 'error')
    }
}

$registerButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const nombre = $registerName.value
    const email = $registerEmail.value
    const password = $registerPassword

    const body = {
        name: nombre,
        email: email,
        password: password
    }

    const regis = await fetch('/user/create-user', {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'post',
        body: JSON.stringify(body)
    })
    
    const statusCode = regis.status
    
    if (statusCode === 200) {
        mostrarMensaje('reg-mensaje', 'Este correo ya está registrado', 'error');
        return;
    }

    mostrarMensaje('reg-mensaje', '¡Cuenta creada exitosamente! Cambiando a inicio de sesión...', 'exito');
    
    setTimeout(() => {
        cambiarTab('login');
        document.getElementById('login-email').value = email;
    }, 3500);
})

function entrarInvitado() {
    const invitado = {
        nombre: 'Invitado',
        email: 'invitado@temp.com',
        esInvitado: true,
        progreso: {}
    };
    
    window.location.href = '/vista-previa';
}

function cambiarTab(tab) {
    $tabs.forEach(t => t.classList.remove('active'));
    $forms.forEach(f => f.classList.remove('active'));

    
    if (tab === 'login') {
        $tabs[0].classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        $tabs[1].classList.add('active');
        document.getElementById('registro-form').classList.add('active');
    }
}