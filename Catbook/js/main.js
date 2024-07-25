const gatos = [
  {
    id: 1,
    nombre: "gato1",
    apodo: "michi1",
    raza: "gato",
    imagen: "gato1p.jpeg",
  },
  {
    id: 2,
    nombre: "gato2",
    apodo: "michi2",
    raza: "gato1",
    imagen: "gato2p.jpeg",
  },
  {
    id: 3,
    nombre: "gato3",
    apodo: "michi3",
    raza: "gato2",
    imagen: "gato3p.jpeg",
  },
];

function renderMichi(gatos) {
  let contenidoHTML = "";

  for (const gato of gatos) {
    const likes = localStorage.getItem(`likes-${gato.id}`) || 0;
    contenidoHTML += `<div class="card col-md-3 m-3 d-flex align-items-center text-center">
            <img class="card-img-top" src="assets/${gato.imagen}" alt="${gato.nombre}">
            <div class="card-body d-flex flex-column align-items-center">
                <h4 class="card-title">${gato.apodo}</h4>
                <p class="card-text">
                <div>
            <button type="button"class="btn btn-secondary"onclick="incrementLikes(${gato.id})">Like</button>
                <span id="likes-${gato.id}">Likes: ${likes}</span></div>
                </p>
            </div>
        </div>
    </div>`;
    document.getElementById("contenido").innerHTML = contenidoHTML;
  }
}

function incrementLikes(id) {
  let likes = localStorage.getItem(`likes-${id}`) || 0;
  likes = parseInt(likes) + 1;
  localStorage.setItem(`likes-${id}`, likes);
  document.getElementById(`likes-${id}`).innerText = `Likes: ${likes}`;
}
renderMichi(gatos);
