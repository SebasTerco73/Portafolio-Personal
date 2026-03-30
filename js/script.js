const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav a');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// cerrar menú al hacer click en un link
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const btnArriba = document.getElementById('btn-arriba');
const btnAbajo = document.getElementById('btn-abajo');

// subir 
btnArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// bajar 
btnAbajo.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// Ocultar botones al hacer scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const alturaPantalla = window.innerHeight;
    const alturaTotal = document.body.scrollHeight;
    // boton subir
    if (window.scrollY > 50) {
        btnArriba.style.opacity = "1";
    } else {
        btnArriba.style.opacity = "0";
    }

    // boton bajar
    if (scrollY + alturaPantalla >= alturaTotal - 10) {
        btnAbajo.style.opacity = "0"; // estás abajo del todo
    } else {
        btnAbajo.style.opacity = "1";
    }
});
