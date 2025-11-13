const unidades = [
    {
        id: 1,
        titulo: "Introducción a las Herramientas Digitales",
        icono: "💻",
        duracion: "45 min",
        descripcion: "Conoce el mundo digital, sus conceptos fundamentales y las herramientas básicas que utilizarás en tu día a día.",
        lecciones: [
            {
                titulo: "¿Qué son las herramientas digitales?",
                contenido: "Las herramientas digitales son programas, aplicaciones y servicios que nos permiten realizar tareas de manera más eficiente en el mundo digital. Incluyen software de productividad, comunicación, almacenamiento y más.",
                puntos: ["Definición de herramientas digitales", "Importancia en el mundo actual", "Clasificación de herramientas", "Beneficios de su uso"]
            },
            {
                titulo: "El ecosistema digital",
                contenido: "El ecosistema digital está formado por dispositivos, software, servicios en la nube y conexiones de red que trabajan juntos para facilitar nuestras actividades diarias.",
                puntos: ["Dispositivos: computadoras, tablets, smartphones", "Software: aplicaciones y programas", "Internet y conectividad", "Servicios en la nube"]
            },
            {
                titulo: "Seguridad básica digital",
                contenido: "La seguridad digital es fundamental para proteger tu información personal y profesional en línea.",
                puntos: ["Contraseñas seguras", "Autenticación de dos factores", "Identificar amenazas comunes", "Mejores prácticas de seguridad"]
            }
        ]
    },
    {
        id: 2,
        titulo: "Correo Electrónico y Comunicación",
        icono: "📧",
        duracion: "50 min",
        descripcion: "Aprende a gestionar tu correo electrónico de manera efectiva y a comunicarte profesionalmente en línea.",
        lecciones: [
            {
                titulo: "Gestión de correo electrónico",
                contenido: "El correo electrónico es una herramienta esencial de comunicación profesional y personal. Aprende a organizarlo eficientemente.",
                puntos: ["Crear y configurar cuentas", "Organización con carpetas y etiquetas", "Filtros y reglas automáticas", "Gestión de spam"]
            },
            {
                titulo: "Comunicación profesional por email",
                contenido: "La comunicación por correo requiere etiqueta y profesionalismo. Aprende las mejores prácticas.",
                puntos: ["Estructura de un email profesional", "Asuntos claros y concisos", "Tono apropiado", "Firmas electrónicas"]
            },
            {
                titulo: "Herramientas de mensajería",
                contenido: "Explora las diferentes plataformas de mensajería instantánea y videoconferencia para trabajo y estudio.",
                puntos: ["WhatsApp, Telegram, Slack", "Zoom, Google Meet, Teams", "Etiqueta en videollamadas", "Compartir pantalla y archivos"]
            }
        ]
    },
    {
        id: 3,
        titulo: "Procesadores de Texto",
        icono: "📝",
        duracion: "60 min",
        descripcion: "Domina herramientas como Word y Google Docs para crear documentos profesionales y colaborativos.",
        lecciones: [
            {
                titulo: "Introducción a procesadores de texto",
                contenido: "Los procesadores de texto son herramientas esenciales para crear documentos. Conoce sus funciones básicas.",
                puntos: ["Microsoft Word vs Google Docs", "Interfaz y herramientas básicas", "Crear y guardar documentos", "Formatos de archivo"]
            },
            {
                titulo: "Formato y estilo de documentos",
                contenido: "Aprende a dar formato profesional a tus documentos con estilos, fuentes y diseño.",
                puntos: ["Fuentes, tamaños y colores", "Estilos de párrafo y título", "Márgenes y orientación", "Encabezados y pies de página"]
            },
            {
                titulo: "Colaboración en tiempo real",
                contenido: "Descubre cómo trabajar en equipo en un mismo documento simultáneamente.",
                puntos: ["Compartir documentos", "Control de cambios y comentarios", "Versionado de documentos", "Resolver conflictos"]
            }
        ]
    },
    {
        id: 4,
        titulo: "Hojas de Cálculo",
        icono: "📊",
        duracion: "70 min",
        descripcion: "Aprende a organizar datos, crear fórmulas y generar gráficos con Excel y Google Sheets.",
        lecciones: [
            {
                titulo: "Fundamentos de hojas de cálculo",
                contenido: "Las hojas de cálculo son poderosas herramientas para organizar y analizar datos numéricos.",
                puntos: ["Estructura: filas, columnas, celdas", "Tipos de datos", "Introducción a Excel y Sheets", "Navegación básica"]
            },
            {
                titulo: "Fórmulas y funciones básicas",
                contenido: "Aprende a realizar cálculos automáticos y usar funciones para análisis de datos.",
                puntos: ["Operadores matemáticos", "Funciones SUMA, PROMEDIO, MAX, MIN", "Referencias de celdas", "Copiar fórmulas"]
            },
            {
                titulo: "Visualización de datos",
                contenido: "Transforma tus datos en gráficos y tablas comprensibles y atractivas.",
                puntos: ["Tipos de gráficos", "Crear gráficos efectivos", "Tablas dinámicas", "Formato condicional"]
            }
        ]
    },
    {
        id: 5,
        titulo: "Presentaciones Digitales",
        icono: "🎨",
        duracion: "55 min",
        descripcion: "Crea presentaciones impactantes con PowerPoint, Google Slides y otras herramientas visuales.",
        lecciones: [
            {
                titulo: "Diseño de presentaciones efectivas",
                contenido: "Una buena presentación combina contenido claro con diseño visual atractivo.",
                puntos: ["Principios de diseño", "Elección de colores y fuentes", "Uso de plantillas", "Menos es más: simplicidad"]
            },
            {
                titulo: "Contenido multimedia",
                contenido: "Enriquece tus presentaciones con imágenes, videos y elementos interactivos.",
                puntos: ["Insertar imágenes y videos", "Animaciones y transiciones", "Audio y narración", "Enlaces e interactividad"]
            },
            {
                titulo: "Presentación efectiva",
                contenido: "Aprende técnicas para presentar con confianza y captar la atención de tu audiencia.",
                puntos: ["Preparación y práctica", "Lenguaje corporal", "Manejo de preguntas", "Uso del presentador"]
            }
        ]
    },
    {
        id: 6,
        titulo: "Almacenamiento en la Nube",
        icono: "☁️",
        duracion: "40 min",
        descripcion: "Descubre cómo guardar, compartir y colaborar en archivos usando servicios en la nube.",
        lecciones: [
            {
                titulo: "¿Qué es la nube?",
                contenido: "El almacenamiento en la nube permite guardar y acceder a tus archivos desde cualquier dispositivo con internet.",
                puntos: ["Concepto de cloud computing", "Ventajas del almacenamiento en nube", "Servicios populares: Google Drive, Dropbox, OneDrive", "Sincronización entre dispositivos"]
            },
            {
                titulo: "Organización y compartición",
                contenido: "Organiza tus archivos en la nube y compártelos de manera segura con otros usuarios.",
                puntos: ["Estructura de carpetas", "Compartir archivos y carpetas", "Permisos de acceso", "Enlaces compartidos"]
            },
            {
                titulo: "Seguridad y respaldo",
                contenido: "Protege tus datos en la nube y asegura tener respaldos de información importante.",
                puntos: ["Privacidad de datos", "Copias de seguridad automáticas", "Recuperación de archivos", "Buenas prácticas de seguridad"]
            }
        ]
    }
    ];

const preguntasEvaluacion = [
{
    pregunta: "¿Cuál es la principal ventaja de usar herramientas digitales?",
    opciones: ["Son gratuitas", "Aumentan la eficiencia", "No requieren internet", "Son difíciles de usar"],
    correcta: 1
},
{
    pregunta: "¿Qué característica es esencial en una contraseña segura?",
    opciones: ["Debe ser corta", "Debe tener mayúsculas, minúsculas y números", "Debe ser tu fecha de nacimiento", "Debe ser fácil de recordar"],
    correcta: 1
},
{
    pregunta: "¿Cuál es la mejor práctica para organizar el correo electrónico?",
    opciones: ["Dejar todo en la bandeja de entrada", "Usar carpetas y etiquetas", "Eliminar todos los correos", "No leer los correos"],
    correcta: 1
},
{
    pregunta: "En un procesador de texto, ¿para qué sirven los estilos?",
    opciones: ["Dar formato consistente", "Aumentar el tamaño del archivo", "Dificultar la lectura", "Eliminar texto"],
    correcta: 0
},
{
    pregunta: "¿Qué función de Excel suma todos los valores de un rango?",
    opciones: ["PROMEDIO", "SUMA", "MAX", "CONTAR"],
    correcta: 1
},
{
    pregunta: "En presentaciones, ¿cuál es un principio de diseño importante?",
    opciones: ["Usar muchos colores", "Simplicidad y claridad", "Mucho texto en cada diapositiva", "Animaciones en todo"],
    correcta: 1
},
{
    pregunta: "¿Qué permite el almacenamiento en la nube?",
    opciones: ["Acceder desde cualquier dispositivo", "Solo guardar imágenes", "No compartir archivos", "Usar solo en un dispositivo"],
    correcta: 0
},
{
    pregunta: "¿Qué es una tabla dinámica en hojas de cálculo?",
    opciones: ["Una tabla que no se puede editar", "Una herramienta para analizar datos", "Un tipo de gráfico", "Una función matemática"],
    correcta: 1
},
{
    pregunta: "¿Cuál es la ventaja de Google Docs sobre Word tradicional?",
    opciones: ["Es más caro", "Permite colaboración en tiempo real", "Solo funciona offline", "No se puede compartir"],
    correcta: 1
},
{
    pregunta: "¿Qué es el formato condicional en hojas de cálculo?",
    opciones: ["Un tipo de fórmula", "Formato que cambia según el valor de la celda", "Una función de texto", "Un gráfico especial"],
    correcta: 1
}
];

const usuarioGuardado = JSON.parse(localStorage.getItem('user'))
const nombreUsuarioActual = usuarioGuardado[0].name
const emailUsuarioActual = usuarioGuardado[0].email

const cargarProgreso = async () => {
    try {
        const usuarioProgreso = await fetch(`/user/get-progress/${nombreUsuarioActual}`)
        
        if (!usuarioProgreso.ok) return

        return await usuarioProgreso.json()
    } catch (e) {
        return e
    }
}

// Esto es una promesa a resolver, por lo que hay que usar un async await para trabajar con progresoActual
const progresoActual = cargarProgreso()


function guardarProgreso(unidad) {
    // el nuevo progreso es el número de la unidad completada, en el backend el mismo número se calcula para poder dar un porcentaje de completado un poco exacto.
    const body = {
        email: emailUsuarioActual,
        newProgress: unidad,
    }

    fetch(`/user/update-progress`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(body)
    })
    .catch(e => console.log(e))
}

const setUserProgress = async () => {
    const actualProgressResolved = await progresoActual
    return `unidad_${actualProgressResolved.progress}`
}

const progresoUsuario = setUserProgress()

const supuestoProgresoUsuario = progresoActual.then(res => {
return {
    unidad_1: res.progress >= 16,
    unidad_2: res.progress >= (16 * 2),
    unidad_3: res.progress >= (16 * 3),
    unidad_4: res.progress >= (16 * 4),
    unidad_5: res.progress >= (16 * 5),
    unidad_6: res.progress === 100,
}
})

const unidadesCompletas = supuestoProgresoUsuario.then(r => Object.values(r).filter(isCompleted => isCompleted).length)

async function generarMenu() {
    const menuContainer = document.getElementById('menu-unidades');
    menuContainer.innerHTML = ''
    unidades.forEach(async (unidad) => {
        const item = document.createElement('div');
        item.className = 'unidad-item';
        if (await unidadesCompletas >= unidad.id) {
            item.classList.add('completada');
        }
        item.innerHTML = `
            <div class="unidad-titulo">${unidad.icono} ${unidad.titulo}</div>
            <div class="unidad-duracion">${unidad.duracion}</div>
        `;
        item.onclick = () => mostrarUnidad(unidad.id);
        menuContainer.appendChild(item);
    });
}

const mostrarUnidad = async (id) => {
    const unidad = unidades.find(u => u.id === id);
    const contenido = document.getElementById('contenido-curso');

    document.querySelectorAll('.unidad-item').forEach((item, index) => {
        item.classList.remove('active');
        if (index === id - 1) item.classList.add('active');
    });

    let html = `
        <div class="contenido-unidad active">
            <div class="unidad-header">
                <h2>${unidad.icono} ${unidad.titulo}</h2>
                <p>${unidad.descripcion}</p>
            </div>
    `;

    unidad.lecciones.forEach((leccion, index) => {
        html += `
            <div class="leccion">
                <h3>Lección ${index + 1}: ${leccion.titulo}</h3>
                <p>${leccion.contenido}</p>
                <ul>
                    ${leccion.puntos.map(punto => `<li>${punto}</li>`).join('')}
                </ul>
            </div>
        `;
    })

    // const completada = supuestoProgresoUsuario['unidad_' + id]
    const completada = await unidadesCompletas >= id

    html += `
        <button class="btn-completar" onclick="completarUnidad(${id})" ${completada ? 'disabled' : ''}>
            ${completada ? '✓ Unidad Completada' : 'Marcar como Completada'}
        </button>
        </div>
    `;

    contenido.innerHTML = html
}



async function actualizarProgresoGeneral() {
    const totalUnidades = unidades.length;
    // const completadas = Object.keys(supuestoProgresoUsuario).filter(k => k.startsWith('unidad_')).length;
    document.getElementById('progreso-porcentaje').textContent = [await progresoActual][0].progress + '%';

    const evaluacionBtn = document.getElementById('menu-evaluacion');
    if (await unidadesCompletas === totalUnidades) {
        evaluacionBtn.removeAttribute('disabled')
        evaluacionBtn.classList.remove('bloqueada');
    } else {
        evaluacionBtn.setAttribute('disabled', true)
        evaluacionBtn.classList.add('bloqueada');
    }
}

function completarUnidad(id) {
    guardarProgreso(id);
    actualizarProgresoGeneral();
    generarMenu();
    mostrarUnidad(id);
    const $btnCompletar = document.querySelector('.btn-completar')
    $btnCompletar.innerHTML = "Guardando progreso..."
    setTimeout(() => {
        location.reload()
    }, 3000);
}

const mostrarEvaluacion = async () => {
    const contenido = document.getElementById('contenido-curso');
    let html = `
        <div class="evaluacion-container">
            <h2>🏆 Evaluación Final</h2>
            <p>Responde las siguientes preguntas. Necesitas 70% o más para aprobar.</p>
            <form id="form-evaluacion" onsubmit="evaluarExamen(event)">
    `;

    preguntasEvaluacion.forEach((pregunta, index) => {
        html += `
            <div class="pregunta">
                <h4>${index + 1}. ${pregunta.pregunta}</h4>
                <div class="opciones">
                    ${pregunta.opciones.map((opcion, i) => `
                        <label class="opcion">
                            <input type="radio" name="pregunta${index}" value="${i}" required>
                            ${opcion}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += `
            <button type="submit" class="btn-completar">Enviar Evaluación</button>
            </form>
        </div>
    `;

    contenido.innerHTML = html;
}

function evaluarExamen(e) {
    e.preventDefault();
    let correctas = 0;

    preguntasEvaluacion.forEach((pregunta, index) => {
        const respuesta = document.querySelector(`input[name="pregunta${index}"]:checked`).value;
        if (parseInt(respuesta) === pregunta.correcta) {
            correctas++;
        }
    });

    const porcentaje = Math.round((correctas / preguntasEvaluacion.length) * 100);
    const aprobado = porcentaje >= 70;

    supuestoProgresoUsuario.evaluacion = {
        completada: true,
        puntuacion: porcentaje,
        aprobado: aprobado
    };

    const ultimaUnidad = 6

    guardarProgreso(ultimaUnidad)

    mostrarResultado(correctas, preguntasEvaluacion.length, porcentaje, aprobado);
}

function mostrarResultado(correctas, total, porcentaje, aprobado) {
    const contenido = document.getElementById('contenido-curso');
    contenido.innerHTML = `
        <div class="resultado ${aprobado ? 'aprobado' : 'reprobado'}">
            <h2>${aprobado ? '🎉 ¡Felicitaciones!' : '😔 No aprobaste'}</h2>
            <p>${aprobado ? 'Has completado exitosamente el curso' : 'Necesitas repasar el contenido'}</p>
            <div class="puntuacion">${porcentaje}%</div>
            <p>Respondiste correctamente ${correctas} de ${total} preguntas</p>
            <p>${aprobado ? '¡Has obtenido tu certificado de finalización!' : 'Repasa las unidades e intenta nuevamente.'}</p>
            <button class="btn-completar" onclick="location.reload()">Volver al Curso</button>
        </div>
    `;
}

const volverVista = () => {
    window.location.href = '/vista-previa';
}

cargarProgreso();
generarMenu();
actualizarProgresoGeneral();
mostrarUnidad(1);