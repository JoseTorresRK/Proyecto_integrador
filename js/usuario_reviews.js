/**
 * tieneResenas checa si el trabajador/usuario tiene reseñas de clientes
 * @param {objet} user es un usuario del localStorage.Trabajador
 * @returns boolean false-> si el usuario aun no tiene reseñas, true-> si tiene mas de una reseña
 */
function tieneResenas(user) {
  if (user.clientReviews.length >= 1) {
    renderReviews(user, true);
  } else if (user.clientReviews.length === 0) {
    renderReviews(user, false);
  }
}

/**
 * renderCard()
 */
function renderReviews(user, bandera) {
  let resena = document.getElementById("tab01");
  if (bandera) {
    resena.innerHTML = `
        <div class="tab-pane-item">
            <h5>Mostrando ${
              user.clientReviews.length
            } reseña(s) de trabajos concluidos. </h5>
            <p>Pública tu perfil y miles de personas podrán ver.</p>
            </br>
        </div>
        
        <div class="tab-pane-item">
        ${cardDeReviews(user)}
        </div>
        `;
  } else if (bandera === false) {
    resena.innerHTML += `
                <div class="tab-pane-item">
                    <h5>Aún no tienes reseñas</h5>
                    <p>Pública tu perfil y miles de personas podrán ver.</p>
                    </br>
                </div>`;
  }
}

function cardDeReviews(usuario) {
  let cards = "";
  usuario.clientReviews.forEach((review) => {
    cards += plantilla(review);
  });
  return cards;
}

/**
 *
 * @param {array} subCategories es el arreglo lleno de subcategorias que desempeña el trabajador
 * @returns {string} retorna un elementos HTML de tipo li–lista
 */
function subCategoryGenerator(subCategories) {
  let listaSubCat = "";
  subCategories.forEach((element) => {
    listaSubCat += `<li class="list-inline-item p-2">${element}</li>`;
  });
  return listaSubCat;
}

/**
 * @function añade datos personales del detalle del trabajo con toda la infromacion hacia un div
 * @param {object} resena_cliente contiene toda la informacion del Trabajador.clientReviews[0]
 * @returns {string} es un div
 */
function plantilla(resena_cliente) {
  return `
  <div class="row">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="nombre col-lg-7 col-sm-12">
                        <h5 class="card-title fw-bold">${
                          resena_cliente.jobTitle
                        }</h5>
                        <i class="bi bi-star-fill colorrojo fs-6"></i>
                        <!-- ESTRELLA COMPLETA -->
                        <i class="bi bi-star-fill colorrojo fs-6"></i>
                        <!-- ESTRELLA COMPLETA -->
                        <i class="bi bi-star-fill colorrojo fs-6"></i>
                        <!-- ESTRELLA a la MITAD -->
                        <i class="bi bi-star colorrojo fs-6"></i>
                        <!-- ESTRELLA VACIA -->
                            <span class="p-1">(${
                              resena_cliente.starsForJob
                            } Estrellas )</span>
                            <i class="bi bi-pin-map-fill p-5 fs-6">
                              <!--MAPA-->
                              <span class="p-2 fs-6">${
                                resena_cliente.jobLocation.municipality
                              }</span> –
                              <span>${resena_cliente.jobLocation.city}</span>
                            </i>

                            <br />
                            <p class="card-text">
                              <span class="fw-bold">
                                Opinión del trabajo:
                              </span>
                              ${resena_cliente.clientJobReview}
                            </p>
                            <ul class="list-inline">
                              <li class="list-inline-item p-2">
                                <strong>${subCategoryGenerator(
                                  resena_cliente.jobCategories
                                )}</strong>
                              </li>
                              ${subCategoryGenerator(
                                resena_cliente.jobSubcategories
                              )}
                            </ul>
                          </div>
                          <div class="mapa col-lg-5 col-sm-12">
                            <div id=${resena_cliente.idMapa} style="height:400px;width:100%"></div>
                          </div>
                        </div>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="row">
                            <div class="col-6">
                              Cliente: ${resena_cliente.clientName}
                            </div>
                            <div class="col-6">
                              <i class="bi bi-star-fill colorrojo fs-6"></i>
                              <!-- ESTRELLA COMPLETA -->
                              <i class="bi bi-star-fill colorrojo fs-6"></i>
                              <!-- ESTRELLA COMPLETA -->
                              <i class="bi bi-star-fill colorrojo fs-6"></i>
                              <!-- ESTRELLA a la MITAD -->
                              <i class="bi bi-star colorrojo fs-6"></i>
                              <!-- ESTRELLA VACIA -->
                              <span
                                >(${resena_cliente.starsForJob} estrellas
                                )</span
                              >
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br>
    `;
}

let resenas = [
  {
    jobId: 10,
    starsForJob: 4,
    jobTitle: "Instalacion de tuberia",
    jobLocation: {
      city: "CDMX",
      municipality: "GAM",
    },
    clientName: "Angel Martinez Hernandez",
    clientPhoto: "./../images/profile_mute.png",
    clientJobReview:
      "Excelente trabajo y comunicacion, definitivamente recomiendo a esta persona para trabajar un proyecto personal",
    jobCategories: ["Plomería", "Carpintería"],
    jobSubcategories: [
      "Fregaderos",
      "Lavabos",
      "Tuberías",
      "instalaciones sanitarias",
      "Caños atascados ",
    ],
    clientStars: 5,
  },
  {
    jobId: 11,
    starsForJob: 4,
    jobTitle: "Fregaderos",
    jobLocation: {
      city: "CDMX",
      municipality: "Benito Juarrez",
    },
    clientName: "Sofia Lomeli Ramirez",
    clientPhoto: "./../images/profile_mute.png",
    clientJobReview: "El trabajo se realizó muy bien, y lo recomiendo mucho",
    jobCategories: ["Plomería", "Carpintería"],
    jobSubcategories: [
      "Fregaderos",
      "Lavabos",
      "Tuberías",
      "instalaciones sanitarias",
      "Caños atascados ",
    ],
    clientStars: 5,
  },
];

let solicitudes_pendientes = [
  {
    jobId: 55,
    starsForJob: null,
    jobTitle: "Instalacion de tuberia",
    jobLocation: {
      city: "CDMX",
      municipality: "GAM",
    },
    clientName: "Angel Martinez Hernandez",
    clientJobDescription:
      "Requiero un plomero que haga la instalacion de una tuberia para gas estacionario",
    jobCategories: ["Plomeria", "Jardinería"],
    jobSubcategories: [
      "Fregaderos",
      "Lavabos",
      "Tuberías",
      "instalaciones sanitarias",
      "Caños atascados ",
    ],
    clientStars: 5,
  },
];

/**
 * Función Crea Mapa de google
 */
function initMapaGoogle(latbyResena, lngbyResena, idMapa) {
  // The location of Uluru
  const uluru = { lat: latbyResena, lng: lngbyResena };
  console.log(
    "uluru",
    uluru,
    "idmapa",
    idMapa,
    document.getElementById(idMapa)
  );
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById(idMapa), {
    zoom: 12,
    center: uluru,
  });
  console.log("Genere mapa " + idMapa);
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
/**
 * traemos de aqui a las bases de datos de los trabajadores
 */
let db_user = JSON.parse(window.localStorage.Trabajador);
// let db_user = JSON.parse(window.localStorage.Trabajador)[0].clientReviews;
// db_user = [];
let ubicacionDataQuery;
// url (required), options (optional)
fetch("http://localhost:8081/api/ubicacion/").then(async function (response) {
  let res = await response.json();
  ubicacionDataQuery = res;
  console.log("Query Ubicacion", res);
  return res;
});
let usuariosDataQuery;
let usertest = fetch("http://localhost:8081/api/users/").then(async function (
  response
) {
  let res = await response.json();
  usuariosDataQuery = res;
  console.log("Query Usuarios", res);
  return res;
});

// url (required), options (optional)
fetch("http://localhost:8081/api/resenas/")
  .then(function (response) {
    let res = response.json();
    
  })
  async function fetchAllData(){
    const ubicacionResp = await fetch("http://localhost:8081/api/ubicacion/")
    const ubicacion = await ubicacionResp.json();
    
    const usersResp = await fetch("http://localhost:8081/api/users/")
    const usuarios = await usersResp.json();
    
    const resenasResp = await fetch("http://localhost:8081/api/resenas/")
    const resenas = await resenasResp.json();
    
    return {
        resenas: resenas,
        ubicacion: ubicacion,
        usuarios: usuarios,
      };
  }
  fetchAllData().then(function (resenas) {
    // Yay, `j` is a JavaScript object
    console.log("Ubicacion", resenas.ubicacion);
    console.log("Usuarios", resenas.usuarios);
    let ubicacion = resenas.ubicacion;
    let usuarios = resenas.usuarios;
    let allResenasObj = resenas.resenas.map((uniResena, index) => {
      let idMapa = "map" + Math.random().toString(36).slice(2);
      let tempresenas = {
        jobId: index,
        starsForJob: uniResena.estrellas,
        jobTitle: uniResena.nombre_trabajo,
        jobLocation: {
          city: ubicacion[index].estado,
          municipality: ubicacion[index].municipio,
        },
        clientName: usuarios[index].nombre,
        clientPhoto: "./../images/profile_mute.png",
        clientJobReview: uniResena.descripcion,
        jobCategories: ["Plomería", "Carpintería"],
        jobSubcategories: [
          "Fregaderos",
          "Lavabos",
          "Tuberías",
          "instalaciones sanitarias",
          "Caños atascados ",
        ],
        clientStars: uniResena.estrellas,
        idMapa: idMapa,
        lat: ubicacion[index].latitud,
        long: ubicacion[index].longitud,
      };
      return tempresenas;
    });
    console.log("ResenasWithFormat", allResenasObj);
    return allResenasObj;
  })
  .then(function (allResenas) {
    console.log("Resenas Agregadas al Trabajador = ", db_user[0].clientReviews);
    db_user[0].clientReviews = [...allResenas];
    console.log("Resenas Agregadas al Trabajador = ", db_user[0].clientReviews);
    tieneResenas(db_user[0]);
    return allResenas;
  }).then(function (resenastoMap){
    resenastoMap.forEach((unireview) => {
        initMapaGoogle(unireview.lat, unireview.long, unireview.idMapa);
      });
  })
  .catch(function (err) {
    // Error :(
    console.log("Error", err);
  });

//db_user[0].clientReviews.push(resenas[1]);

window.addEventListener("load", (e) => {
  console.log("Termino de cargar la página");
  window.localStorage.Trabajador = JSON.stringify(db_user);
});
