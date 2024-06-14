//carousel

const imgs = document.querySelectorAll(".imgs img");

// O indece 0 [ e a seta pra esquerda]
const arrowsCarousel = document.querySelectorAll(`.arrows-carousel img`);

const pictures = [
  "/Rectangle%2018.a6d2bbec.png",
  "/Group%2044.23c3d097.png",
  "/unsplash_519_90ncAds.39b6dc5d.png",
];

arrowsCarousel[0].addEventListener("click", () => {
  for (let i = 0; i < pictures.length; i++) {
    imgs[i].src = pictures[i];
  }

  pictures.unshift(pictures.pop());
});

arrowsCarousel[1].addEventListener("click", () => {
  for (let i = 0; i < pictures.length; i++) {
    imgs[i].src = pictures[i];
  }
  pictures.push(pictures.shift());
});

imgs[0].src = pictures[0];
imgs[1].src = pictures[1];
imgs[2].src = pictures[2];