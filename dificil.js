document.addEventListener('DOMContentLoaded', () => {
    const ejerciciosFaciles = [
        { 
            imagen: 'imagenes/EcuDif/Ej1/Ejercicio.png', 
            opciones: [
                'imagenes/EcuDif/Ej1/Paso1A.png', 'imagenes/EcuDif/Ej1/Paso1B.png', 'imagenes/EcuDif/Ej1/Paso1C.png',
                'imagenes/EcuDif/Ej1/Paso2A.png', 'imagenes/EcuDif/Ej1/Paso2B.png', 'imagenes/EcuDif/Ej1/Paso2C.png',
                'imagenes/EcuDif/Ej1/RespuestaA.png', 'imagenes/EcuDif/Ej1/RespuestaB.png', 'imagenes/EcuDif/Ej1/RespuestaC.png'
            ], 
            correctas: [2, 5, 8],
            mensajesIncorrectos: [
                ['Recuerda el exponente lo debes multiplicar por la base', 'Debes restarle solo 1 al exponente '],
                ['Debes derivar U (Lo del parentesis)', 'Debes derivar U (Lo del pararentesis), recuerda la base por el exponente'],
                ['Recuerda, debes multiplicar tus operaciones anteriores', 'No te olvides de los exponentes']
            ]
        },
        { 
            imagen: 'imagenes/EcuDif/Ej2/Ejercicio.png', 
            opciones: [
                'imagenes/EcuDif/Ej2/Paso1A.png', 'imagenes/EcuDif/Ej2/Paso1B.png', 'imagenes/EcuDif/Ej2/Paso1C.png',
                'imagenes/EcuDif/Ej2/Paso2A.png', 'imagenes/EcuDif/Ej2/Paso2B.png', 'imagenes/EcuDif/Ej2/Paso2C.png',
                'imagenes/EcuDif/Ej2/RespuestaA.png', 'imagenes/EcuDif/Ej2/RespuestaB.png', 'imagenes/EcuDif/Ej2/RespuestaC.png'
            ], 
            correctas: [2, 5, 8],
            mensajesIncorrectos: [
                ['Identifica U y deriva correctamente', 'No te olvides de los exponentes'],
                ['No te olvides es base por exponente', 'Aca ya debes derivar' ],
                ['Debes copiar tus operaciones tal y como estan', 'Tienes una derivada mal']
            ]
        },
        { 
            imagen: 'imagenes/EcuDif/Ej3/Ejercicio.png', 
            opciones: [
                'imagenes/EcuDif/Ej3/Paso1A.png', 'imagenes/EcuDif/Ej3/Paso1B.png', 'imagenes/EcuDif/Ej3/Paso1C.png',
                'imagenes/EcuDif/Ej3/Paso2A.png', 'imagenes/EcuDif/Ej3/Paso2B.png', 'imagenes/EcuDif/Ej3/Paso2C.png',
                'imagenes/EcuDif/Ej3/RespuestaA.png', 'imagenes/EcuDif/Ej3/RespuestaB.png', 'imagenes/EcuDif/Ej3/RespuestaC.png'
            ], 
            correctas: [2, 5, 8],
            mensajesIncorrectos: [
                ['Verifica tu exponente', 'Solo debes restar 1 al exponente'],
                ['Recuerda base por exponente', 'Solo debes restar 1 al exponente'],
                ['Revisa tus operaciones anteriores', 'Coloca la derivada correcta']
            ]
        },
        { 
            imagen: 'imagenes/EcuDif/Ej4/Ejercicio.png', 
            opciones: [
                'imagenes/EcuDif/Ej4/Paso1A.png', 'imagenes/EcuDif/Ej4/Paso1B.png', 'imagenes/EcuDif/Ej4/Paso1C.png',
                'imagenes/EcuDif/Ej4/Paso2A.png', 'imagenes/EcuDif/Ej4/Paso2B.png', 'imagenes/EcuDif/Ej4/Paso2C.png',
                'imagenes/EcuDif/Ej4/RespuestaA.png', 'imagenes/EcuDif/Ej4/RespuestaB.png', 'imagenes/EcuDif/Ej4/RespuestaC.png'
            ], 
            correctas: [2, 5, 8],
            mensajesIncorrectos: [
                ['Tu exponente cuando se derivada debe multiplicarse por la base', 'Solo debes restar 1 al exponente'],
                ['Recuerda base por exponente', 'Solo debes restar 1 al exponente, del numero que estas operando'],
                ['Revisa tus operaciones anteriores', 'Coloca la derivada correcta']
            ]
        },
        { 
            imagen: 'imagenes/EcuDif/Ej5/Ejercicio.png', 
            opciones: [
                'imagenes/EcuDif/Ej5/Paso1A.png', 'imagenes/EcuDif/Ej5/Paso1B.png', 'imagenes/EcuDif/Ej5/Paso1C.png',
                'imagenes/EcuDif/Ej5/Paso2A.png', 'imagenes/EcuDif/Ej5/Paso2B.png', 'imagenes/EcuDif/Ej5/Paso2C.png',
                'imagenes/EcuDif/Ej5/RespuestaA.png', 'imagenes/EcuDif/Ej5/RespuestaB.png', 'imagenes/EcuDif/Ej5/RespuestaC.png'
            ], 
            correctas: [2, 5, 8],
            mensajesIncorrectos: [
                ['Verifica tu exponente', 'Solo debes restar 1 al exponente'],
                ['La derivada de la constante es 0', 'Multiplica tu exponente por la base'],
                ['Coloca las opeciones igual a los pasos anteriores', 'Es U por la derivada de U recuerda']
            ]
        }
    ];

    let currentExercise = 0;
    let currentSetIndex = 0;

    function mostrarEjercicio() {
        if (currentExercise < ejerciciosFaciles.length) {
            const ejercicio = ejerciciosFaciles[currentExercise];
            const mainImageDiv = document.getElementById('main-image');
            const responseImagesDiv = document.getElementById('response-images');
            const messageDiv = document.getElementById('message');

            messageDiv.innerHTML = '';
            mainImageDiv.innerHTML = `
                <h2>Selecciona una respuesta</h2>
                <img src="${ejercicio.imagen}" alt="Derivada fácil ${currentExercise + 1}" />
            `;

            const start = currentSetIndex * 3;
            const end = start + 3;
            const opcionesMostrar = ejercicio.opciones.slice(start, end);

            responseImagesDiv.innerHTML = opcionesMostrar.map((opcion, index) => 
                `<div class="response-image" onclick="verificarRespuesta(${index}, ${ejercicio.correctas[currentSetIndex] - start}, ${currentExercise}, ${currentSetIndex})">
                    <img src="${opcion}" alt="Opción ${start + index + 1}" />
                </div>`
            ).join('');
        } else {
            alert('¡Felicidades! Has completado todos los ejercicios.');
            currentExercise = 0; // Reiniciar para que se pueda volver a intentar
            currentSetIndex = 0;
            const mainImageDiv = document.getElementById('main-image');
            const responseImagesDiv = document.getElementById('response-images');
            mainImageDiv.innerHTML = "Selecciona un nivel para empezar";
            responseImagesDiv.innerHTML = "";
        }
    }

    window.verificarRespuesta = (seleccion, correcta, ejercicioIndex, setIndex) => {
        const messageDiv = document.getElementById('message');
        const ejercicio = ejerciciosFaciles[ejercicioIndex];

        if (seleccion === correcta) {
            messageDiv.innerHTML = '<p class="correcto">¡Respuesta correcta! Continuemos...</p>';
            currentSetIndex++;
            if (currentSetIndex * 3 >= ejercicio.opciones.length) {
                currentSetIndex = 0;
                currentExercise++;
            }
            setTimeout(mostrarEjercicio, 2000);
        } else {
            const mensajesIncorrectos = ejercicio.mensajesIncorrectos[setIndex];
            messageDiv.innerHTML = `<p class="incorrecto">${mensajesIncorrectos[seleccion]}</p>`;
        }
    };

    mostrarEjercicio();
});

               


