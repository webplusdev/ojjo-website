
const header = document.querySelector('header');

if (window.pageYOffset >= 100) {
    header.style.backgroundColor = '#333333';
}
else {
    header.style.backgroundColor = 'transparent';
}

window.addEventListener('scroll', function () {
    if (this.pageYOffset >= 100) {
        header.style.backgroundColor = '#333333';
    }
    else {
        header.style.backgroundColor = 'transparent';
    }
});




