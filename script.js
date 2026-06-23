// Seleccionar todas las secciones
const secciones = document.querySelectorAll("section");

// Ocultar todas las secciones
function ocultarSecciones() {
    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });
}

// Mostrar una sección
function mostrarSeccion(id) {
    ocultarSecciones();
    document.getElementById(id).style.display = "block";
}

// Mostrar Inicio al cargar la página
mostrarSeccion("inicio");

// Botones del menú
const botones = document.querySelectorAll(".menu button");

botones[0].addEventListener("click", () => {
    mostrarSeccion("inicio");
});

botones[1].addEventListener("click", () => {
    mostrarSeccion("conceptos");
});

botones[2].addEventListener("click", () => {
    mostrarSeccion("caracteristicas");
});

botones[3].addEventListener("click", () => {
    mostrarSeccion("funciones");
});

botones[4].addEventListener("click", () => {
    mostrarSeccion("tabla");
});

botones[5].addEventListener("click", () => {
    mostrarSeccion("examen");
});
const btnIniciar = document.getElementById("btnIniciar");

btnIniciar.addEventListener("click", () => {
    alert("La prueba iniciará próximamente.");
});
