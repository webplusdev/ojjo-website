export function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('.ibg__img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('.ibg__img').getAttribute('src') + ')';
        }
    }
}

