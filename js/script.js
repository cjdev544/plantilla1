

// All animations will take exactly 800ms Menu
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: false  // En true todos los scroll duran lo mismo
});


// Animaciones generales

// Nosotros
var waypoint = new Waypoint({
    element: document.getElementById('nosotros'),
    handler: function (direction) {
        let elemento = document.getElementById('nosotros');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
        elementos = elemento.getElementsByClassName('animado2');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
    },
    offset: '60%'
});

// Servicios
var waypoint = new Waypoint({
    element: document.getElementById('servicios'),
    handler: function (direction) {
        let elemento = document.getElementById('servicios');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
        elementos = elemento.getElementsByClassName('animado2');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
    },
    offset: '60%'
});

// paralax
var waypoint = new Waypoint({
    element: document.getElementById('paralax'),
    handler: function (direction) {
        let elemento = document.getElementById('paralax');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
    },
    offset: '60%'
});

// portafolio
var waypoint = new Waypoint({
    element: document.getElementById('portafolio'),
    handler: function (direction) {
        let elemento = document.getElementById('portafolio');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
        elementos = elemento.getElementsByClassName('animado2');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
    },
    offset: '60%'
});

// Testimonios
var waypoint = new Waypoint({
    element: document.getElementById('testimonios'),
    handler: function (direction) {
        let elemento = document.getElementById('testimonios');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
    },
    offset: '60%'
});
var waypoint = new Waypoint({
    element: document.getElementById('testimonio1'),
    handler: function (direction) {
        let elemento = document.getElementById('testimonio1');
        elemento.className += ' animated fadeInRight';
    },
    offset: '60%'
});
var waypoint = new Waypoint({
    element: document.getElementById('testimonio2'),
    handler: function (direction) {
        let elemento = document.getElementById('testimonio2');
        elemento.className += ' animated fadeInLeft';
    },
    offset: '60%'
});

// equipo
var waypoint = new Waypoint({
    element: document.getElementById('equipo'),
    handler: function (direction) {
        let elemento = document.getElementById('equipo');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
        elementos = elemento.getElementsByClassName('animado2');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
    },
    offset: '60%'
});

// contacto
var waypoint = new Waypoint({
    element: document.getElementById('contacto'),
    handler: function (direction) {
        let elemento = document.getElementById('contacto');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
        elementos = elemento.getElementsByClassName('animado2');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
    },
    offset: '60%'
});