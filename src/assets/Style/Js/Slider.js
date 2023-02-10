let img_slider = document.getElementsByClassName('img_slider')
let etape = 0;

let nbr_img = img_slider.length;

function removeActiveImage(){
    for(let i = 0; i <  nbr_img; i++){
        img_slider[i].classList.remove('active');
    }
}