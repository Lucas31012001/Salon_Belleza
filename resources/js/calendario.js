document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

let selectedDates = [];

function iniciarApp(){
    calendario();
    cargarSelecciones();
    obtenerFechasSeleccionadas();
}

function calendario() {
    const calendar = document.getElementById('calendario');
    if (!calendar) {
        console.error("El elemento con id 'calendario' no se encontró en el DOM.");
        return;
    }
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    
    const currentYear = new Date().getFullYear();

    months.forEach((month, monthIndex) => {
        const monthDiv = document.createElement('div');
        monthDiv.classList.add('month');

        const monthHeader = document.createElement('h3');
        monthHeader.textContent = `${month} ${currentYear}`;
        monthDiv.appendChild(monthHeader);

        const daysDiv = document.createElement('div');
        daysDiv.classList.add('days');

        // Añadir encabezados de los días de la semana
        days.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.classList.add('day', 'header');
            dayHeader.textContent = day;
            daysDiv.appendChild(dayHeader);
        });

        // Obtener el primer día del mes
        let firstDay = new Date(currentYear, monthIndex, 1).getDay(); // Crea un objeto de fecha para el 1 de cada mes de 2024 y luego obtiene el día de la semana que corresponde a esa fecha
        // Ajustar para que lunes sea el primer día de la semana
        firstDay = firstDay === 0 ? 6 : firstDay - 1;
        
        // Añadir celdas vacías para los días antes del primer día del mes
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('day');
            daysDiv.appendChild(emptyCell);
        }

        // Añadir los días del mes
        const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div'); 
            dayCell.classList.add('day');
            dayCell.textContent = day;
            dayCell.addEventListener('click', seleccionarDia);
            daysDiv.appendChild(dayCell);
        }

        monthDiv.appendChild(daysDiv);
        calendar.appendChild(monthDiv);
    });
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 ya que los meses en JavaScript son 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function seleccionarDia(event) {
    const clickedDateElement = event.target;
    const day = parseInt(clickedDateElement.textContent);

    if (isNaN(day)) return; // Ignorar clics en celdas vacías

    // Obtener el mes del calendario contenedor más cercano
    const monthDiv = clickedDateElement.closest('.month');
    const monthHeader = monthDiv.querySelector('h3').textContent;
    // console.log("Encabezado del mes:", monthHeader);

    // Array de nombres de meses en español
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Separar el nombre del mes y el año del encabezado
    const [monthName, year] = monthHeader.split(' ');
    const currentYear = parseInt(year); // Convertir el año a número

    // Buscar el índice del mes
    const monthIndex = months.indexOf(monthName);
    if (monthIndex === -1) {
        console.error("Nombre de mes no encontrado:", monthName);
        return;
    }

    // Crear la fecha usando el año actual, el índice del mes y el día
    const clickedDate = new Date(currentYear, monthIndex, day);
    // console.log("Fecha seleccionada:", clickedDate);

    // Formato de la fecha
    const formattedDate = formatDate(clickedDate); // Usar la nueva función formatDate
    // console.log("Fecha formateada:", formattedDate);

    // Verificar si el elemento ya tiene la clase 'selected'
    if (clickedDateElement.classList.contains('selected')) {
        // Si tiene la clase 'selected', eliminar la clase
        clickedDateElement.classList.remove('selected');
        
        // Remover la fecha de la lista de fechas seleccionadas
        const index = selectedDates.indexOf(formattedDate);
        if (index > -1) {
            selectedDates.splice(index, 1);
        }
    } else {
        // Si no tiene la clase 'selected', añadir la clase
        clickedDateElement.classList.add('selected');
        
        // Añadir la fecha a la lista de fechas seleccionadas
        selectedDates.push(formattedDate);
    }
    // console.log(selectedDates);
    guardarSelecciones(); // Guardar en localStorage
}

function guardarSelecciones() {
    localStorage.setItem('selectedDates', JSON.stringify(selectedDates));
}

function cargarSelecciones() {
    const storedDates = localStorage.getItem('selectedDates');
    if (storedDates) {
        selectedDates = JSON.parse(storedDates);
        // Actualizar el calendario con las fechas almacenadas
        actualizarCalendario();
    }
}

function actualizarCalendario() {
    const monthDivs = document.querySelectorAll('.month');
    monthDivs.forEach(monthDiv => {
        const monthHeader = monthDiv.querySelector('h3').textContent;
        const [monthName, year] = monthHeader.split(' ');
        const currentYear = parseInt(year);
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        const monthIndex = months.indexOf(monthName);
        
        if (monthIndex === -1) return;

        const daysInMonth = monthDiv.querySelectorAll('.day');
        daysInMonth.forEach(dayCell => {
            const day = parseInt(dayCell.textContent);
            if (isNaN(day)) return;

            const date = new Date(currentYear, monthIndex, day);
            const formattedDate = formatDate(date); // Usar la nueva función formatDate
            if (selectedDates.includes(formattedDate)) {
                dayCell.classList.add('selected');
            } else {
                dayCell.classList.remove('selected');
            }
        });
    });
}

function obtenerFechasSeleccionadas() {
    return selectedDates;
}

module.exports = obtenerFechasSeleccionadas;
