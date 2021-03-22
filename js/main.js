const filterButton = document.querySelector('.info__btn'),
  about = document.querySelector('.about'),
  info = document.querySelector('.info-inner'),
  infoMin = document.querySelector('.info-inner-minimise'),
  map = document.querySelector('.map'),
  bigCard = document.querySelector('.big-card'),
  header = document.querySelector('.header');

info.style.display = 'block';
infoMin.style.display = 'none';
about.style.display = 'none';
bigCard.style.display = 'none';
map.style.display = 'block';

filterButton.addEventListener('click', function () {

  header.classList.toggle('header-about');
  this.classList.toggle('info__btn-min');

  if (info.style.display == 'block') info.style.display = 'none';
  else info.style.display = 'block';

  if (infoMin.style.display == 'none') infoMin.style.display = 'block';
  else infoMin.style.display = 'none';

  if (about.style.display == 'none') about.style.display = 'flex';
  else about.style.display = 'none';

  if (map.style.display == 'none') map.style.display = 'block';
  else map.style.display = 'none';

});