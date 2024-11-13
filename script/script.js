const agregarBtn = document.getElementById('agregarBtn');
const ListaTareas = document.getElementById('ListaTareas');

agregarBtn.addEventListener('click', function() {
    const tareaInput = document.getElementById('nuevaTarea')
    const nuevaTareaTexto = tareaInput.value;
    const nuevaTarea = document.createElement('li');
    nuevatarea.textContent =nuevaTareaTexto;
    ListaTareas.appendChild(nuevaTarea);
    tareaInput.value = '';
});