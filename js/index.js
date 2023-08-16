const contenido = [
  { image:"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810", description: "Coco es una película de animación por ordenador producida por Pixar Animation Studios y distribuida por Walt Disney Studios Motion Pictures." ,titulo: "Coco", genero: "Suspenso", trailer: "https://www.youtube.com/embed/awzWdtCezDo" , tipo : 'Pelicula'},
  { image:"https://cdn.colombia.com/cine/2022/9/sonrie-41404.jpg" , description: "Tras presencia el dramático incidente sufrido por un paciente, la Dra. Cotter empieza a experimentar hechos aterradores sin explicación aparente. A medida que el horror se adueña de su vida, comprende que la respuesta está en su propio pasado." ,titulo: "Sonríe" ,genero: "Terror", trailer: "https://www.youtube.com/embed/a-JrjnT_678" , tipo : 'Pelicula'},
  { image:"https://th.bing.com/th/id/R.ae5df6650838bfe80d0de5d7627225fd?rik=z35tBNTONL0ovw&pid=ImgRaw&r=0", description: "es una película estadounidense de superhéroes basada en el equipo de antihéroes de DC Comics, " ,titulo: "El Escuadrón Suicida", genero: "Accion", trailer: "https://www.youtube.com/embed/IblLmbGxw1Q", tipo:'Pelicula'},
  { image:"https://i0.wp.com/nodonueve.com/wp-content/uploads/2013/11/machete-kills-poster.jpg?fit=620%2C906&ssl=1" , description: "Machete es una película de 2010 dirigida por Robert Rodríguez y Ethan Maniquis, protagonizada por Danny Trejo, la cual narra las andanzas de Isador Cortez Machete un exagente federal mexicano que tiene que emigrar a Estados Unidos para buscarse la vida y que se verá implicado en el intento de asesinato de un senador corrupto.", titulo: "Machete ", genero: "Suspenso", trailer: "https://www.youtube.com/embed/SkSU6Qrvo6c",tipo:'Pelicula' },
  { image:"https://play-lh.googleusercontent.com/Blg6kbAHzlYhthr1ZmxAMKnN4UzOjwuesfLgPJExU6Cd0YRMd9WttohuBV4fEmVmdkJK",description:"Xander Cage es XXX, un hombre que se gana la vida comerciando con vídeos de sus escalofriantes y disparatados logros. ",titulo: "xXx", genero: "CienciaFiccion", trailer: "https://www.youtube.com/embed/-ziu6JzJTZ0" ,tipo:'Pelicula'},
  { image:"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2002/7/w1280/2v2q8W7L5FoAYeY10vNkQnx9UCV.jpg",description:"Hero es un film del género wuxia. Comienza con Jet Li como protagonista anónimo, vagamente basado en el legendario Jing Ke. Un grupo de asesinos.",titulo: "'Hero' (Zhang Yimou, 2002)", genero: "Accion", trailer: "https://www.youtube.com/embed/_USDk5jaGek" ,tipo:'Pelicula'},
    { image:"https://es.web.img3.acsta.net/c_310_420/pictures/21/12/01/12/07/0243323.jpg",description:"es una película estadounidense de superhéroes basada en el personaje Spider-Man, de Marvel Comics, coproducida por Columbia Pictures y Marvel Studios, y distribuida por Sony Pictures Releasing.",titulo: "Spider-Man: No Way Home", genero: "CienciaFiccion", trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",tipo:'Pelicula' },
     {image: "https://images2.alphacoders.com/117/1178893.jpg",description:"Dicen que nadie puede salvar el mundo. Se equivocan ¿Cuál es la mejor parte de estar muerto? No se trata de escapar de tu jefe, de tu ex, de borrar tu historial criminal. La mejor parte de estar muerto es la libertad.",titulo: "underground 6", genero: "Accion", trailer: "https://www.youtube.com/embed/umy5STfwMj0",tipo:'Pelicula' },
    { image:"https://www.aceprensa.com/wp-content/uploads/2019/12/263115-0-scaled.jpg",description:"En el año 2029, los mutantes dejaron de nacer desde hace 25 años, quedando al borde de la extinción. Los X-Men han muerto y Wolverine, ahora conocido simplemente como James Howlett, ha envejecido, debido a que su factor de curación se ha debilitado, esto también provoca que sus heridas no sanen del todo.",titulo: "Logan", genero: "CienciaFiccion", trailer: "https://www.youtube.com/embed/Div0iP65aZo",tipo:'Pelicula' },
    { image:" https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0e5837fbbef83d6274bff7e85f69456bd9599f4b05ebb0ffd6c280825ee71501._RI_TTW_.jpg",description:"Después de su exitoso golpe en Río de Janeiro, Brasil, de los $100.000.000 del narcotraficante y mafioso brasileño, Hernán Reyes (Joaquim de Almeida), Dominic Dom Toretto (Vin Diesel) y Brian O'Conner (Paul Walker) están en una carrera en las Islas Canarias, España, hasta llegar a un hospital, ya que el hijo de Brian está a punto de nacer.",titulo: "Fast & Furious 6", genero: "Suspenso", trailer: "https://www.youtube.com/embed/yY6JUPCgDxU" ,tipo:'Pelicula'},
    { image:"https://play-lh.googleusercontent.com/7ZBTD2cPxWeAWXmcaDVUw28IHBv2NRjgT_fULfR0XyNw1eeScTqX9cDbkoDvDk68ZBPH",description:"Un veterano agente secreto inglés (Colin Firth) debe entrenar a un joven sin refinar (Taron Egerton), pero que promete convertirse en un competitivo agente gracias a un ultra-programa de entrenamiento, al mismo tiempo que una amenaza global emerge procedente de un genio retorcido.",titulo: "Kingsman: Servicio secreto", genero: " Acción"  ,trailer: "https://www.youtube.com/embed/Rs5J8kh62yo" ,tipo:'Pelicula'},
    { image:"https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg",description:"Al intentar encontrar una cura para una extraña enfermedad en su sangre, un doctor se transforma en un vampiro.",titulo: "Morbius", genero: "CienciaFiccion ", trailer: "https://www.youtube.com/embed/C4XP8FSqTTE",tipo:'Pelicula' },
    { image:"https://i1.wp.com/www.verepeliculas.com/wp-content/uploads/2019/11/Dia-de-muertos-HD-1080p.jpg?fit=693%2C1024&ssl=1",description:"En Santa Clara, México, habita Salma, una huérfana de 16 años que nunca conoció a sus padres biológicos. Salma pasa su vida buscando pistas sobre la identidad y el paradero de sus progenitores. Encuentra un libro que contiene historias de los habitantes de la ciudad y se embarca en una aventura para encontrar a sus padres.",titulo: "Día de muertos", genero: "Familia", trailer: "https://www.youtube.com/embed/QePzy_YDLSA",tipo:'Pelicula' },
    { image:"https://image.tmdb.org/t/p/original/5n3jwXdrNs1gVjmLC4eIj7QI310.jpg",description:"Un detective de la policía con problemas degradado al servicio de operador del 911 se apresura a salvar a una persona durante un día de revelaciones y ajustes de cuentas.",titulo: "Culpable", genero: "Drama", trailer: "https://www.youtube.com/embed/Se-sQCcyEbE" ,tipo:'Pelicula'},
    { image:"https://m.media-amazon.com/images/S/pv-target-images/11dc8611d9168adc544ba48b961ddc9c74d2dd3bf7ca024ffaa7de6fbdae3512._UR1920,1080_.jpg",description:"Atrapado en un trabajo sin sentido y luchando contra el alcoholismo, un exatleta de secundaria recibe una oportunidad de redención cuando se convierte en el entrenador de baloncesto de su alma máter.",titulo: "El camino de regreso", genero: "Familia", trailer: "https://www.youtube.com/embed/TWvtJY7uyJc",tipo:'Pelicula' },
    { image:"https://hips.hearstapps.com/hmg-prod/images/historias-de-miedo-para-contar-en-la-oscuridad-pelicula-poster-1559633183.jpg?resize=320:*",description:"Un grupo de adolescentes debe resolver el misterio que rodea a una serie de muertes macabras en la lúgubre mansión de la familia Bellows, un lugar que en el pueblo todos saben que está maldito.",titulo: "Historias de miedo para contar en la oscuridad", genero: "Terror", trailer: "https://www.youtube.com/embed/FY8Yq4TZrX0", tipo: 'Serie' },
    { image:"https://upload.wikimedia.org/wikipedia/en/e/ec/Saw_V_New_Poster.jpg",description:"El discípulo de Jigsaw, Joffaw Hoffman, tiene que atar cabos sueltos para proteger su secreto.",titulo: "El juego del miedo V", genero: "Crimen", trailer: "https://www.youtube.com/embed/88pB8m-ZxrM", tipo: 'Serie'  },
    { image:"https://i.blogs.es/cb60a7/gotham2/450_1000.jpg",description:"El detective James Gordon se desenvuelve por el mundo peligrosamente corrupto de Gotham City, mientras que un joven Bruce Wayne encuentra su camino para convertirse en un héroe.",titulo: "Gotham", genero: "Accion", trailer: "https://www.youtube.com/embed/_KKn4Gr09TE" , tipo: 'Serie' },
    { image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9267565fb416053e2ba1ce57893d71a91546734624a5a97b6578f2aea00ca7c3._RI_TTW_SX720_FMjpg_.jpg",description:"We Bare Bears es una serie animada estadounidense creada por Daniel Chong para Cartoon Network. La serie trata sobre tres osos hermanos, Pardo, Panda y Polar, y sus intentos de integrarse en la sociedad del Área de la Bahía de San Francisco.",titulo: "Escandalosos", genero: "Animacion", trailer: "https://www.youtube.com/embed/QYSrCLZ1ofs", tipo: 'Serie'  },
    { image:"https://th.bing.com/th/id/OIP.Jnb8Px9jIPYMsURsHfNdNQHaLj?pid=ImgDet&rs=1",description:"Bob, una esponja cuadrada y amarilla que junto a su mejor amigo Patricio tienen muchas aventuras en el Fondo de Bikini, la ciudad en la que viven, en el fondo del mar.",titulo: "Bob Esponja", genero: "Animacion", trailer: "https://www.youtube.com/embed/BUFKUy_c5Tw" , tipo: 'Serie' },
    { image:"https://i0.wp.com/carlosjeguren.com/wp-content/uploads/2021/08/his-dark-materials-hbo.jpg?ssl=1",description:"Durante la búsqueda de una amiga secuestrada, una joven valiente de otro mundo revela un plan siniestro que involucra a niños desaparecidos y un fenómeno misterioso llamado Dust.",titulo: "His Dark Materials - La Materia Oscura", genero: "Fantasia", trailer: "https://www.youtube.com/embed/dnO1Pkw0YgA" , tipo: 'Serie' },
    { image:"https://i.ytimg.com/vi/NeFo8yybnjI/hqdefault.jpg",description:"El capitán Charles Boone lleva a sus tres hijos a su antiguo hogar en Maine, luego de que su esposa muera en el mar.",titulo: "Chapelwaite", genero: "Terror", trailer: "https://www.youtube.com/embed/vhf8xNoZJn0" , tipo: 'Serie' },
    { image:"https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" ,description:"La historia de la familia Targaryen, 200 años antes de los eventos que tuvieron lugar en Game of Thrones.",titulo: "House of the Dragon", genero: "Fantasia", trailer: "https://www.youtube.com/embed/DotnJ7tTA34" , tipo: 'Serie' },
    { image:"https://images.justwatch.com/poster/301568865/s718/temporada-2.%7Bformat%7D",description:"Un vistazo a las andanzas de diferentes empleados y huéspedes de un exclusivo resort a lo largo de una trágica semana.",titulo: "The White Lotus", genero: "Romance", trailer: "https://www.youtube.com/embed/TGLq7_MonZ4", tipo: 'Serie'  },
    { image:"https://flxt.tmsimg.com/assets/p16885116_b_h9_aj.jpg",description:"Se sigue las vidas de tres generaciones de famosos televangelistas con una tradición de trabajo caritativo, pero también de desviación y codicia.",titulo: "Los honestos Gemstones", genero: "Serie, Comedia", trailer: "https://www.youtube.com/embed/PbFxi6K8lfY", tipo: 'Serie'  },
    { image:"https://m.media-amazon.com/images/I/91nGR50RTpL._AC_UF894,1000_QL80_.jpg",description:"Después del abuso de drogas y de tener un comportamiento insano autodestructivo y molesto, el ex lanzador de las ligas mayores Kenny Power termina arruinando su carrera y se retira a su ciudad natal en Carolina del Norte, él consigue un trabajo en educación física en la escuela secundaria que estudió.",titulo: "Eastbound and Down", genero: "Comedia", trailer: "https://www.youtube.com/embed/cn6UHgJEZEk" , tipo: 'Serie' },
    { image:"https://resizing.flixster.com/xzpz4DtqJtEQ5vBjTpWRh-PFKjs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyMDU2Ny53ZWJw",description:"El co-creador de Seinfeld, Larry David interpreta el papel de una versión de él mismo en la serie improvisada. Él enfrenta los contratiempos de las cosas insignificantes y algo molestas de la vida diaria, en las que David algunas veces de buena intención asume cambiarlas de forma torpe y terminan en un asunto exagerado con consecuencias negativas.",titulo: "Curb Your Enthusiasm", genero: "Documental", trailer: "https://www.youtube.com/embed/zRCMPMGDN00", tipo: 'Serie'  },
    { image:"https://cdn.culturagenial.com/es/imagenes/los-soprano-cartel-cke.jpg",description:"Tony Soprano intenta equilibrar los problemas de su familia disfuncional con otra familia muy diferente - la mafia. Acude a un terapeuta para tratar sus problemas profesionales y personales, que causan ataques de pánico.",titulo: "Los Soprano", genero: "Accion", trailer: "https://www.youtube.com/embed/MkOK-Ecu-Xo" , tipo: 'Serie' },
    { image:"https://m.media-amazon.com/images/I/81POokA775L._RI_.jpg",description:"Un joven vástago de una familia conservadora se embarca en una misión para infiltrarse en el clan vecino, dominado por el despiadado magnate ferroviario George Russell, su libertino hijo, Larry, y su ambiciosa esposa, Bertha.",titulo: "The Gilded Age", genero: "Drama", trailer: "https://www.youtube.com/embed/wKj1cMz3yfI" , tipo: 'Serie' },
    { image:"https://polacocina.com/wp-content/uploads/2021/08/Los-cheesesteaks-de-Mare-of-Easttown.jpg",description:"Una detective de un pequeño pueblo de Pensilvania investiga un asesinato mientras intenta evitar que su vida se derrumbe.",titulo: "mare of easttown", genero: "Aventura", trailer: "https://www.youtube.com/embed/Ntc25_YgpXk" , tipo: 'Serie' },
    { image:"https://es.web.img2.acsta.net/pictures/21/01/29/17/36/5477264.jpg",description:"En Luisiana, en 1995, dos detectives investigan el atroz asesinato de una joven que fue sometida a un ritual pagano. En el año 2012, unos policías interrogan a estos dos detectives, dado que sospechan que el asesino de 1995 ha regresado.",titulo: "True Detective", genero: "CienciaFiccion", trailer: "https://www.youtube.com/embed/fVQUcaO4AvE" , tipo: 'Serie' },
]
  
  
  const tipoSelect = document.getElementById('tipo');
  const generoSelect = document.getElementById('genero');
  const busquedaInput = document.getElementById('busqueda');
  const contenidoFiltradoDiv = document.getElementById('contenedorFiltrado');
  
  // probando
  function filtrarContenido() {
    
    const tipoSeleccionado = tipoSelect.value;
    const generoSeleccionado = generoSelect.value;
    const busquedaTexto = busquedaInput.value.toLowerCase();
  
    let contenidoFiltrado = contenido;
  
    if (tipoSeleccionado !== 'Todos') {
      contenidoFiltrado = contenidoFiltrado.filter(item => item.tipo === tipoSeleccionado);
      if(tipoSeleccionado  === 'Pelicula' || tipoSeleccionado === 'Serie' ){
        contenidoFiltrado = contenidoFiltrado.filter(item => item.tipo === tipoSeleccionado);

      }
    }
  
    if (generoSeleccionado !== 'Todos') {
      contenidoFiltrado = contenidoFiltrado.filter(item => item.genero === generoSeleccionado);
        
        if  (generoSeleccionado === 'Drama' || 
        generoSeleccionado === 'Accion' || 
        generoSeleccionado === 'Comedia' ||
        generoSeleccionado === 'Terror' ||
        generoSeleccionado === 'CienciaFiccion' ||
        generoSeleccionado === 'Fantasia' ||
        generoSeleccionado === 'Romance' ||
        generoSeleccionado === 'Animacion' ||
        generoSeleccionado === 'Familia' ||
        generoSeleccionado === 'Crimen' ||
        generoSeleccionado === 'Suspenso' ||
        generoSeleccionado === 'Misterio' ||
        generoSeleccionado === 'Documental' ||
        generoSeleccionado === 'Historico' ||
        generoSeleccionado === 'Guerra' ||
        generoSeleccionado === 'Musical' ||
        generoSeleccionado === 'Crimen' ||
        generoSeleccionado === 'Deportes' ||
        generoSeleccionado === 'Biografico') {
            contenidoFiltrado = contenidoFiltrado.filter(item => item.genero === generoSeleccionado);
        
        }
    }
  
    if (busquedaTexto !== '') {
      contenidoFiltrado = contenidoFiltrado.filter(item => item.titulo.toLowerCase().includes(busquedaTexto));
    }
  
    mostrarContenido(contenidoFiltrado);
  }

  function mostrarContenido(contenidoAMostrar) {
    contenidoFiltradoDiv.innerHTML = '';
  
    contenidoAMostrar.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.textContent = `${item.tipo}: ${item.titulo}`;
      contenidoFiltradoDiv.appendChild(itemDiv);

    });
  }
 
  
  tipoSelect.addEventListener('change', filtrarContenido);
  generoSelect.addEventListener('change', filtrarContenido);
  busquedaInput.addEventListener('input', filtrarContenido);
  
  // Inicializar la visualización con el contenido completo
  mostrarContenido(contenido);
  
  
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitulo = document.getElementById('modalTitulo');
const modalTipoGenero = document.getElementById('modalTipoGenero');
const modalDescripcion = document.getElementById('modalDescripcion');
const modalImg = document.getElementById('modalImg')

function crearBotonMostrarInfo(info) {
  const boton = document.createElement('button');
  boton.textContent = 'Ver info';
  boton.addEventListener('click', () => {
    mostrarModal(info);
  });
  return boton;
}

function mostrarContenido(contenidoAMostrar) {
  contenidoFiltradoDiv.innerHTML = '';

  contenidoAMostrar.forEach(item => {
    const itemDiv = document.createElement('div');
    
    // Crear elementos HTML para el tipo y el título
    const tipoElement = document.createElement('p');
    tipoElement.textContent = item.tipo;
    
    const tituloElement = document.createElement('h1');
    tituloElement.textContent = item.titulo;

    const imgPelicula = document.createElement('img');
    imgPelicula.src = item.image;  

    // Agregar los elementos al div del item
    itemDiv.appendChild(tipoElement);
    itemDiv.appendChild(tituloElement);
    itemDiv.appendChild(imgPelicula);

    const botonMostrarInfo = crearBotonMostrarInfo(item);
    itemDiv.appendChild(botonMostrarInfo);
    
    contenidoFiltradoDiv.appendChild(itemDiv);
  });
}





function mostrarModal(info) {
  modalTitulo.textContent = info.titulo;
  modalTipoGenero.textContent = `${info.tipo} - ${info.genero}`;
  modalVideo.src =`${info.trailer}`;
  modalDescripcion.textContent = `${info.description}`;
  modalImg.src = `${info.image}`;
  modal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

contenidoFiltradoDiv.addEventListener('click', event => {
  const clickedItem = event.target.textContent.split(': ')[1];
  const info = contenido.find(item => item.titulo === clickedItem);
  if (info) {
    mostrarModal(info);
  }
});
