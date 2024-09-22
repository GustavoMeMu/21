const canvas = document.getElementById('flowerField');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Dimensiones de la cuadrícula
const cols = 180; // Número de columnas
const rows = 90; // Número de filas
const flowerSpacing = 100; // Espaciado entre flores
let rotationAngle = 0; // Ángulo de rotación

// Función para dibujar una flor
function drawFlower(x, y) {
    ctx.save(); // Guardar el estado del contexto
    ctx.translate(x, y); // Mover el origen al centro de la flor
    ctx.rotate(rotationAngle); // Rotar el contexto

    ctx.fillStyle = 'yellow'; // Color del centro de la flor
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2); // Dibujar el centro
    ctx.fill();
    
    // Dibujar los pétalos
    for (let i = 0; i < 5; i++) {
        ctx.fillStyle = 'orange'; // Color de los pétalos
        ctx.beginPath();
        ctx.arc(20 * Math.cos((i * 2 * Math.PI) / 5), 
                20 * Math.sin((i * 2 * Math.PI) / 5), 
                10, 0, Math.PI * 2); // Dibujar pétalos
        ctx.fill();
    }

    ctx.restore(); // Restaurar el estado del contexto
}

// Función para crear un campo de flores alineadas
function createField(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const x = j * flowerSpacing + flowerSpacing / 2; // Calcular posición x
            const y = i * flowerSpacing + flowerSpacing / 2; // Calcular posición y
            drawFlower(x, y);
        }
    }
}

// Función para actualizar la rotación
function updateRotation() {
    rotationAngle += Math.PI / 18; // Aumentar el ángulo de rotación
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el lienzo
    createField(rows, cols); // Redibujar el campo de flores
}

// Crear un campo de flores alineadas
createField(rows, cols);

// Actualizar la rotación cada 5 segundos
setInterval(updateRotation, 50);
