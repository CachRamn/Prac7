//Arreglo de las tarjetas de servicios express
const serviciosExpress = [
    {  
        id:1,
        nombre: "Cimentacion Profunda",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/cimentacion.jpg",
        descripcion: "Evaluacion tecnica y refuerzo estructural para grietas criticas en la base de tu construccion",
        tiempo: "2-5 dias",
        precio: "Desde $5,000 MXN"
    },
    {  
        id:2,
        nombre: "Remodelacion de interiores",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/remodelacion.jpg",
        descripcion: "Transforma tus espacios con acabdos modernos y funcionales, adaptados a tu estilo de vida",
        tiempo: "3-7 dias",
        precio: "Desde $10,000 MXN"
    },
    {  
        id:3,
        nombre: "Diseño de planos 3D",
        categoria: "Arquitectura",
        imagen: "img/serviciosExpress/planos.jpg",
        descripcion: "Creacion de planos arquitectonicos en 3D para visualizar tu proyecto antes de construirlo",
        tiempo: "5-10 dias",
        precio: "Desde $8,000 MXN"
    },
    {  
        id:4,
        nombre: "Instalacion Electrica",
        categoria: "Instalaciones",
        imagen: "img/serviciosExpress/electrica.jpg",
        descripcion: "Instalacion electrica segura y eficiente para tu hogar o negocio, cumpliendo con los estandares de calidad",
        tiempo: "1-3 dias",
        precio: "Desde $5,000 MXN"
    },
    {  
        id:5,
        nombre: "Pintura y acabados",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/pintura.jpg",
        descripcion: "Servicio de pintura profesional para interiores y exteriores, con acabados duraderos y de alta calidad",
        tiempo: "2-4 dias",
        precio: "Desde $3,000 MXN"
    },
    {  
        id:6,
        nombre: "Reparacion de techos",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/techos.jpg",
        descripcion: "Reparacion y mantenimiento de techos para garantizar su integridad estructural y resistencia",
        tiempo: "1-3 dias",
        precio: "Desde $7,000 MXN"
    },

    {  
        id: 7,
        nombre: "Impermeabilizacion",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/impermiabilizante.jpeg",
        descripcion: "Aplicacion de membranas y recubrimientos impermeables para proteger tu construccion de filtraciones y humedad",
        tiempo: "1-3 dias",
        precio: "Desde $4,000 MXN"
    },
    {  
        id: 8,
        nombre: "Instalacion Hidraulica",
        categoria: "Instalaciones",
        imagen: "img/serviciosExpress/hidraulico.jpeg",
        descripcion: "Instalacion y reparacion de tuberias, llaves y sistemas de agua potable para tu hogar o negocio",
        tiempo: "1-3 dias",
        precio: "Desde $4,500 MXN"
    },
    {  
        id: 9,
        nombre: "Construccion de muros",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/muros.jpeg",
        descripcion: "Levantamiento de muros de tabique, block o tablaroca con acabado listo para pintar o recubrir",
        tiempo: "3-6 dias",
        precio: "Desde $6,000 MXN"
    },
    {  
        id: 10,
        nombre: "Colocacion de pisos",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/colado.jpeg",
        descripcion: "Instalacion de pisos de ceramica, porcelanato, madera o vinilico con nivelacion y sellado profesional",
        tiempo: "2-5 dias",
        precio: "Desde $5,500 MXN"
    },
    {  
        id: 11,
        nombre: "Instalacion de cocinas integrales",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/cocina.jpeg",
        descripcion: "Diseño, suministro e instalacion de cocinas integrales a medida con materiales de primera calidad",
        tiempo: "4-8 dias",
        precio: "Desde $15,000 MXN"
    },
    {  
        id: 12,
        nombre: "Demolicion y retiro de escombro",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/demolición.jpeg",
        descripcion: "Demolicion controlada de muros, pisos o techos con retiro de escombro incluido y limpieza del area",
        tiempo: "1-2 dias",
        precio: "Desde $3,500 MXN"
    },
    {  
        id: 13,
        nombre: "Colocacion de azulejos",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/azulejo.jpeg",
        descripcion: "Instalacion de azulejos en banos, cocinas y fachadas con nivelado perfecto y rejunteado de alta durabilidad",
        tiempo: "2-4 dias",
        precio: "Desde $4,000 MXN"
    },
    {  
        id: 14,
        nombre: "Instalacion de cancel de baño",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/cancel.jpeg",
        descripcion: "Suministro e instalacion de canceles de vidrio templado para regadera o tina, con herrajes de aluminio o acero inoxidable",
        tiempo: "1-2 dias",
        precio: "Desde $6,500 MXN"
    },
    {  
        id: 15,
        nombre: "Instalacion de sistemas de aire acondicionado",
        categoria: "Instalaciones",
        imagen: "img/serviciosExpress/aire.jpeg",
        descripcion: "Instalacion, mantenimiento y recarga de sistemas de aire acondicionado tipo split o central para cualquier espacio",
        tiempo: "1-2 dias",
        precio: "Desde $5,000 MXN"
    },
    {  
        id: 16,
        nombre: "Herreria y soldadura",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/herreria.jpeg",
        descripcion: "Fabricacion e instalacion de puertas, rejas, escaleras y barandales de herreria con acabado galvanizado o pintado",
        tiempo: "3-7 dias",
        precio: "Desde $7,000 MXN"
    },
    {  
        id: 17,
        nombre: "Diseno de fachadas",
        categoria: "Arquitectura",
        imagen: "img/serviciosExpress/fachada.jpeg",
        descripcion: "Renovacion y diseño arquitectonico de fachadas con recubrimientos, iluminacion y elementos decorativos modernos",
        tiempo: "5-10 dias",
        precio: "Desde $12,000 MXN"
    },
    {  
        id: 18,
        nombre: "Instalacion de paneles solares",
        categoria: "Instalaciones",
        imagen: "img/serviciosExpress/paneles.jpeg",
        descripcion: "Suministro e instalacion de sistemas fotovoltaicos para reducir el consumo electrico de tu hogar o negocio",
        tiempo: "2-4 dias",
        precio: "Desde $20,000 MXN"
    },
    {  
        id: 19,
        nombre: "Carpinteria y muebles a medida",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/carpinteria.jpeg",
        descripcion: "Fabricacion e instalacion de closets, libreros, escritorios y muebles a medida en madera, MDF o melamina",
        tiempo: "5-10 dias",
        precio: "Desde $9,000 MXN"
    },
    {  
        id: 20,
        nombre: "Levantamiento topografico",
        categoria: "Arquitectura",
        imagen: "img/serviciosExpress/topografia.jpeg",
        descripcion: "Medicion y representacion precisa del terreno mediante instrumentos topograficos para planificacion de obra",
        tiempo: "1-2 dias",
        precio: "Desde $3,500 MXN"
    },
];



function mostrarServicios(lista) {
    const contenedor = document.getElementById('contenedor-grid');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';

    lista.forEach(servicio => {
        contenedor.innerHTML += `
            <div class="servicio-card">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
                <div style="padding: 15px;">
                    <h3>${servicio.nombre}</h3>
                    <p>${servicio.categoria}</p>
                    <button onclick="verDetalles(${servicio.id})" class="cta-button">Ver Detalles</button>
                </div>
            </div>
        `;
    });
}

function verDetalles(id) {
    const servicio = serviciosExpress.find(s => s.id === id);
    const modal = document.getElementById('modalServicio');
    const contenido = document.getElementById('modal-body-content');

    contenido.innerHTML = `
        <img src="${servicio.imagen}" class="modal-detalle-img">
        <h2>${servicio.nombre}</h2>
        <p style="color:#f39c12; font-weight:bold;">${servicio.categoria}</p>
        <hr>
        <p style="margin: 20px 0; line-height: 1.6;">${servicio.descripcion}</p>
        <div class="modal-info-extra">
            <span><strong>⏱ Tiempo:</strong> ${servicio.tiempo}</span>
            <span><strong>💰 Inversión:</strong> ${servicio.precio}</span>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <a href="contacto.html" class="cta-button">Ir a Contacto</a>
        </div>
    `;
    modal.style.display = "block";
}

// Inicialización 
mostrarServicios(serviciosExpress);

// Configuración del filtro
const btnFiltrar = document.getElementById('btnFiltrar');
const inputBusqueda = document.getElementById('inputBusqueda');

const filtrarServicios = () => {
    const termino = inputBusqueda.value.toLowerCase();
    const filtrados = serviciosExpress.filter(s => s.nombre.toLowerCase().includes(termino) || s.categoria.toLowerCase().includes(termino));
    mostrarServicios(filtrados);
};

if (btnFiltrar) btnFiltrar.addEventListener('click', filtrarServicios);
if (inputBusqueda) inputBusqueda.addEventListener('keypress', (e) => { if (e.key === 'Enter') filtrarServicios(); });

// Eventos para cerrar el Modal
const closeBtn = document.querySelector('.close-btn');
if (closeBtn) closeBtn.onclick = () => document.getElementById('modalServicio').style.display = "none";

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modalServicio');
    if (modal && event.target === modal) modal.style.display = "none";
});
