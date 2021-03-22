function initMap() {

  const moldavanka = {
      lat: 46.47350931915817,
      lng: 30.72300357618998
    },
    buninaStreet = {
      lat: 46.4812119407931,
      lng: 30.7336293332433
    },
    babelStreet = {
      lat: 46.47350931915817,
      lng: 30.72300357618998
    },
    bazarnaStreet = {
      lat: 46.47482453697549,
      lng: 30.740556523505195
    },
    stepovaStreet = {
      lat: 46.463155934599776,
      lng: 30.7138150658686
    },
    pivdennaStreet = {
      lat: 46.48022136360817,
      lng: 30.71877368737316
    },
    seminarskaStreet = {
      lat: 46.4627279914847,
      lng: 30.743833952316884
    },
    mechnikovaStreet = {
      lat: 46.46300661951986,
      lng: 30.726700766297466
    },
    bugaivskaStreet = {
      lat: 46.47513871686005,
      lng: 30.703200374378905
    };


  const map = new google.maps.Map(document.getElementById("map"), {
    center: moldavanka,
    zoom: 15,
    mapId: 'c9b9a9f20654610a',
    streetViewControl: false,
    disableDefaultUI: true
  });


  const markerIcon = '../icons/map-icon.svg',
    markerIconInfo = '../icons/map-icon-info.svg',
    markerIconBig = '../icons/map-icon-big.svg';

  const buninaMarker = new google.maps.Marker({
    position: buninaStreet,
    map: map,
    icon: markerIcon,
    animation: google.maps.Animation.DROP
  });

  const babelMarker = new google.maps.Marker({
    position: babelStreet,
    map: map,
    icon: markerIcon
  });

  const bazarnaMarker = new google.maps.Marker({
    position: bazarnaStreet,
    map: map,
    icon: markerIcon
  });

  const stepovaMarker = new google.maps.Marker({
    position: stepovaStreet,
    map: map,
    icon: markerIcon
  });

  const pivdennaMarker = new google.maps.Marker({
    position: pivdennaStreet,
    map: map,
    icon: markerIcon
  });

  const seminarskaMarker = new google.maps.Marker({
    position: seminarskaStreet,
    map: map,
    icon: markerIcon
  });

  const mechnikovaMarker = new google.maps.Marker({
    position: mechnikovaStreet,
    map: map,
    icon: markerIcon
  });

  const bugaivskaMarker = new google.maps.Marker({
    position: bugaivskaStreet,
    map: map,
    icon: markerIcon
  });

  const buninaMarkerInfo =
    '<div id="content" class="marker-card">' +
    '<div id="card-top" class="card-top">' +
    '<a href="#" id="card-top-link" class="card-top__link">' +
    '<img id="card-top-img" src="../img/card-img.jpg" alt="Info card image" class="card-top__img">' +
    '</a>' +
    '</div>' +
    '<div id="card-info" class="card-info">' +
    '<h3 id="card-info-title" class="card-info__title">' +
    '<a href="#" id="card-info-title-link" class="card-info__title-link">Новый берег</a>' +
    '</h3>' +
    '<div id="card-rating" class="card-rating">' +
    '<div id="card-rating-item" class="card-rating__item">' +
    '<svg class="card-rating__star">' +
    '<use xlink:href="icons/sprite.svg#rating-star-yellow"></use>' +
    '</svg>' +
    '</div>' +
    '<div id="card-rating-item" class="card-rating__item">' +
    '<svg class="card-rating__star">' +
    '<use xlink:href="icons/sprite.svg#rating-star-yellow"></use>' +
    '</svg>' +
    '</div>' +
    '<div id="card-rating-item" class="card-rating__item">' +
    '<svg class="card-rating__star">' +
    '<use xlink:href="icons/sprite.svg#rating-star-yellow"></use>' +
    '</svg>' +
    '</div>' +
    '<div id="card-rating-item" class="card-rating__item">' +
    '<svg class="card-rating__star">' +
    '<use xlink:href="icons/sprite.svg#rating-star-yellow"></use>' +
    '</svg>' +
    '</div>' +
    '<div id="card-rating-item" class="card-rating__item">' +
    '<svg class="card-rating__star">' +
    '<use xlink:href="icons/sprite.svg#rating-star-yellow"></use>' +
    '</svg>' +
    '</div>' +
    '</div>' +
    '<p id="card-info-text" class="card-info__text">Жилой комплекс "Новый Берег" имеет 24 этажей (+ тех. этаж) и обеспечен подземным паркингом.' +
    '</p>' +
    '<a href="#" id="card-info-more-link" class="card-info__more-link">Подробнее</a>' +
    '</div>' +
    '</div>';

  const infoWindow = new google.maps.InfoWindow({
    content: buninaMarkerInfo,
  });

  const openInfoWindow = function (marker) {
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
      marker.setIcon(markerIconInfo);
    });
  };
  
  openInfoWindow(buninaMarker);
  
}