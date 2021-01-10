const yo = require('yo-yo');
//ESTA LIBRERÍA NOS PERMITE MODIFICAR LA HORA RELATIVA DESDE EL TIEMPO EN QUE SE PUBLICÓ
/* const moment = require('moment'); */
const IntlRelativeFormat = require('intl-relativeformat');
/* const translate = require('../translate'); */
//CONTINUAMOS CREANDO UN ARCHIVO INDEX EN DONDE COLOCAREMOS LA LÓGICA DE NUESTRO PROYECTO CON REFERENCIA A LAS IMÁGENES SUBIDAS

let rf = new IntlRelativeFormat('es');

//LUEGO CREAMOS UNA FUNCION QUE NOS PERMITA RENDERIZAR LA IMAGEN CADA VEZ HAYA CAMBIOS
module.exports = function pictureCards(pic) { 
  let el;
  function render(picture) {
    return yo`<div class="card ${picture.liked ? 'liked' : ''}">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${picture.url}">
    </div>
    <div class="card-content">
      <a href="/${picture.user.username}" class="card-title">
        <img src="${picture.user.avatar}" class="avatar" />
        <span class="username">${picture.user.username}</span>
      </a>
      <small class="right time">hace 1 día</small>
      <p>
        <a class="left" href="#" onclick=${like.bind(null, true)}><i class="material-icons blue100">star_border</i></a>
        <a class="left" href="#" onclick=${like.bind(null, false)}><i class="material-icons yellow200">star</i></a>
        <span class="left likes">${picture.likes} me gusta</span>
      </p>
    </div>
  </div>`;
  };

  function like(liked) {
    //SE TOMA EL ARRAYS Y SE LE AGREGA LA PROPIEDAD.
    pic.liked = liked;
    //SE LE INDICA A EL OBJETO CON SU PROPIEDAD pic.likes LA SUMA O LA RESTA
    pic.likes += liked ? 1 : -1;
    //SE CREA LA NUEVA VARIABLE QUE SE VA A ENCARGAR DE GUARDAR LOS NUEVOS CAMBIOS
    let newEl= render(pic);
    //Y SE UTILIZA EL MÉTODO DE "yo.update()" COLOCANDO COMO PARÁMETRO EL ELEMENTO VIEJO Y EL NUEVO ELEMENTO ACTUALIZADO.
    yo.update(el, newEl);
    //ESTE RETURN ME PERMITE EVITAR QUE SE VUELVA A REPETIR LA MISMA SENTECIA
    return false;
  };

  el = render(pic);
  return el;

};