const photos = document.querySelectorAll('.card__photo');
for (let i = 0; i < photos.length; i++) {
  const photo = photos[i];
  photo.style.backgroundImage = `url(${photo.getAttribute('data-src')})`;
}