
// compteur d'image, sert à changer l'image par la suivante 
let currentImage_1_Index = 0;
let currentImage_2_Index = 0;

// permet de selectionner la classe à modifier 
const images_1 = document.querySelectorAll('.slider-img_1');
const images_2 = document.querySelectorAll('.slider-img_2');




// slider image 1
function showImage_1(index) {
    images_1.forEach((img, i) => {
        if (i === index) {
            img.classList.remove('hidden')
            img.classList.add('active');
        } else {
            img.classList.remove('active');
            img.classList.add('hidden')
        }
    });
}
// changer l'image 1
function nextImage_1() {
    currentImage_1_Index = (currentImage_1_Index + 1) % images_1.length;
    showImage_1(currentImage_1_Index);
}
function prevImage_1() {
    currentImage_1_Index = (currentImage_1_Index - 1 + images_1.length) % images_1.length;
    showImage_1(currentImage_1_Index);
}



// slider image 2
function showImage_2(index) {
    images_2.forEach((img, i) => {
        if (i === index) {
            img.classList.remove('hidden')
            img.classList.add('active');
        } else {
            img.classList.remove('active');
            img.classList.add('hidden')
        }
    });
}
// changer l'image 2
function nextImage_2() {
    currentImage_2_Index = (currentImage_2_Index + 1) % images_2.length;
    showImage_2(currentImage_2_Index);
}
function prevImage_2() {
    currentImage_2_Index = (currentImage_2_Index - 1 + images_2.length) % images_2.length;
    showImage_2(currentImage_2_Index);
}