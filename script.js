// ======================
// MENÚ DE NAVEGACIÓN
// ======================

const secciones = document.querySelectorAll("section");

function ocultarSecciones() {
secciones.forEach(seccion => {
seccion.style.display = "none";
});
}

function mostrarSeccion(id) {
ocultarSecciones();
document.getElementById(id).style.display = "block";
}

mostrarSeccion("inicio");

const botones = document.querySelectorAll(".menu button");

botones[0].addEventListener("click", () => mostrarSeccion("inicio"));
botones[1].addEventListener("click", () => mostrarSeccion("conceptos"));
botones[2].addEventListener("click", () => mostrarSeccion("caracteristicas"));
botones[3].addEventListener("click", () => mostrarSeccion("funciones"));
botones[4].addEventListener("click", () => mostrarSeccion("tabla"));
botones[5].addEventListener("click", () => mostrarSeccion("examen"));

// ======================
// PREGUNTAS DEL EXAMEN
// ======================

const preguntas = [
{
pregunta:"¿Qué permite almacenar información en JavaScript?",
opciones:["Evento","Función","Variable","Alert"],
correcta:2
},
{
pregunta:"¿Qué son las funciones en JavaScript?",
opciones:[
"Programas antivirus",
"Bloques de código que realizan una tarea específica",
"Imágenes",
"Navegadores"
],
correcta:1
},
{
pregunta:"¿Para qué sirven los eventos?",
opciones:[
"Para guardar archivos",
"Para responder a acciones del usuario",
"Para crear carpetas",
"Para instalar programas"
],
correcta:1
},
{
pregunta:"¿Qué permiten hacer los condicionales?",
opciones:[
"Crear imágenes",
"Tomar decisiones según una condición",
"Abrir navegadores",
"Guardar videos"
],
correcta:1
},
{
pregunta:"¿Qué hace la función alert()?",
opciones:[
"Elimina archivos",
"Muestra mensajes emergentes",
"Cierra la página",
"Crea imágenes"
],
correcta:1
},
{
pregunta:"¿Qué es JavaScript?",
opciones:[
"Un lenguaje de programación",
"Un sistema operativo",
"Un navegador",
"Una base de datos"
],
correcta:0
},
{
pregunta:"¿Dónde se ejecuta JavaScript?",
opciones:[
"En el navegador web",
"En la impresora",
"En el teclado",
"En el monitor"
],
correcta:0
},
{
pregunta:"¿Con qué tecnologías trabaja JavaScript?",
opciones:[
"Word y Excel",
"Paint y Bloc de notas",
"HTML y CSS",
"Windows y Linux"
],
correcta:2
},
{
pregunta:"¿Para qué sirve JavaScript en una página web?",
opciones:[
"Para hacerla interactiva",
"Para apagar el computador",
"Para imprimir documentos",
"Para crear carpetas"
],
correcta:0
},
{
pregunta:"¿Qué permite hacer JavaScript?",
opciones:[
"Responder a las acciones del usuario",
"Formatear discos",
"Reparar hardware",
"Instalar sistemas operativos"
],
correcta:0
}
];

// ======================
// VARIABLES
// ======================

let indicePregunta = 0;
let puntaje = 0;
let tiempo = 600;
let temporizador;

const btnIniciar = document.getElementById("btnIniciar");
const btnSiguiente = document.getElementById("btnSiguiente");

const inicioExamen = document.getElementById("inicioExamen");
const areaExamen = document.getElementById("areaExamen");
const resultado = document.getElementById("resultado");

const contenedorPregunta = document.getElementById("contenedorPregunta");
const tiempoTexto = document.getElementById("tiempo");
const nombreEstudiante = document.getElementById("nombreEstudiante");

// ======================
// INICIAR EXAMEN
// ======================

btnIniciar.addEventListener("click", () => {

```
const nombre = document.getElementById("nombre").value.trim();
const apellidos = document.getElementById("apellidos").value.trim();

if(nombre === "" || apellidos === ""){
    alert("Debes escribir nombre y apellido.");
    return;
}

inicioExamen.style.display = "none";
areaExamen.style.display = "block";

nombreEstudiante.textContent =
"Estudiante: " + nombre + " " + apellidos;

mostrarPregunta();
iniciarTemporizador();
```

});

// ======================
// MOSTRAR PREGUNTA
// ======================

function mostrarPregunta(){

```
const pregunta = preguntas[indicePregunta];

let html = `
    <h3>Pregunta ${indicePregunta + 1} de ${preguntas.length}</h3>
    <p>${pregunta.pregunta}</p>
`;

pregunta.opciones.forEach((opcion,index)=>{

    html += `
    <label>
        <input type="radio"
        name="respuesta"
        value="${index}">
        ${opcion}
    </label>
    <br><br>
    `;
});

contenedorPregunta.innerHTML = html;
```

}

// ======================
// SIGUIENTE
// ======================

btnSiguiente.addEventListener("click",()=>{

```
const respuesta =
document.querySelector('input[name="respuesta"]:checked');

if(!respuesta){
    alert("Selecciona una respuesta.");
    return;
}

if(parseInt(respuesta.value) === preguntas[indicePregunta].correcta){
    puntaje++;
}

indicePregunta++;

if(indicePregunta < preguntas.length){
    mostrarPregunta();
}else{
    finalizarExamen();
}
```

});

// ======================
// TEMPORIZADOR
// ======================

function iniciarTemporizador(){

```
temporizador = setInterval(()=>{

    tiempo--;

    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    tiempoTexto.textContent =
    `Tiempo restante: ${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`;

    if(tiempo <= 0){
        finalizarExamen();
    }

},1000);
```

}

// ======================
// RESULTADO FINAL
// ======================

function finalizarExamen(){

```
clearInterval(temporizador);

areaExamen.style.display = "none";
resultado.style.display = "block";

const nombre =
document.getElementById("nombre").value;

const apellidos =
document.getElementById("apellidos").value;

document.getElementById("resultadoNombre").textContent =
nombre + " " + apellidos;

document.getElementById("resultadoPuntaje").textContent =
"Puntaje: " + puntaje + " / 10";

let mensaje = "";

if(puntaje >= 9){
    mensaje = "🌟 Excelente";
}
else if(puntaje >= 6){
    mensaje = "👍 Bueno";
}
else{
    mensaje = "📚 Debes estudiar más";
}

document.getElementById("mensajeFinal").textContent =
mensaje;
```

}
