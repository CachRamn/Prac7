//Funciones GLOBALES
//logica de barras de navegacion

const MAPA_SITIO = [
    {   nombre: 'Inicio', 
        url: 'index.html', 
        keywords: [
            'inicio',
            'home',
            'bienvenida', 
            'página principal',
            'portada',
            'landing page',
            'morgon',
            'constructora morgon',
            'index',
            'principal',
            'carousel']}, 
    {   nombre: 'La Empresa', 
        url: 'empresa.html', 
        keywords: [
            'empresa',
            'mision',
            'valores', 
            'vision',
            'historia',]}, 
    {   nombre: 'Servicios', 
        url: 'servicios.html', 
        keywords: [
            'construcción',
            'remodelación',
            'diseño', 
            'proyectos',
            'servicios',
            'creditos',
            'visitas',
            'garantias',]}, 
    {   nombre: 'Servicios Express', 
        url: 'serviciosExpress.html', 
        keywords: [
            'servicios express',
            'rapido',
            'urgente', 
            'pinturas',
            'cimentacion',
            'planos 3D',
            'instalaciones electricas',
            'reparacion de techos',]}, 
    {   nombre: 'Contactanos', 
        url: 'contacto.html', 
        keywords: [
            'telefono',
            'contacto',
            'correo', 
            'direccion',
            'solicitud',
            'consulta',
            'contactanos',
            'email',
            'whatsapp',]}, 
]

function ejecturarBusqueda() {
    const imputBuscar = document.querySelector('.serarch-bar');
    if (!imputBuscar) return alert('Error: No se encontró el campo de búsqueda.');

    const termino = imputBuscar.ariaValueMax.toLocaleLowerCase();
    if (!termino) return alert('Por favor, ingresa un término de búsqueda.');

    const destino = MAPA_SITIO.find(pagina => 
        pagina.nombre.toLocaleLowerCase().includes(termino) || 
        pagina.keywords.some(keyword => keyword.includes(termino))
    );

    if (destino) {
        window.location.href = destino.url;
    } else {
        alert('No se encontraron resultados para tu búsqueda. Por favor, intenta con otro término.');
    }
}

//Asignamos los eventos de click y enter al botón de búsqueda

const btnBuscar = document.querySelector('.search-btn');
if (btnBuscar) btnBuscar.addEventListener('click', ejecturarBusqueda);

const inputBuscar = document.querySelector('.search-bar');
if (inputBuscar) inputBuscar.addEventListener('keypress', (e) => {if (e.key === 'Enter') ejecturarBusqueda();});