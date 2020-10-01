const photos = document.querySelectorAll('.slider__photo');
for (let i = 0; i < photos.length; i++) {
  const photo = photos[i];
  photo.style.backgroundImage = `url(${photo.getAttribute('data-src')})`;
}