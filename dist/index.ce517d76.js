//carousel
const imgs = document.querySelectorAll(".imgs img");
// O indece 0 [ e a seta pra esquerda]
const arrowsCarousel = document.querySelectorAll(`.arrows-carousel i`);
const pictures = [
    `./assets/imgsCarousel/Rectangle 18.png`,
    `./assets/imgsCarousel/Group 44.png`,
    `./assets/imgsCarousel/unsplash_519_90ncAds.png`
];
arrowsCarousel[0].addEventListener("click", ()=>{
    for(let i = 0; i < pictures.length; i++)imgs[i].src = pictures[i];
    pictures.unshift(pictures.pop());
});
arrowsCarousel[1].addEventListener("click", ()=>{
    for(let i = 0; i < pictures.length; i++)imgs[i].src = pictures[i];
    pictures.push(pictures.shift());
});

//# sourceMappingURL=index.ce517d76.js.map
