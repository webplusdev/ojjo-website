import { ibg } from './_ibg.js';
import { resizeWindow } from './_resize.js';
import { scrollWatch } from './_scrollWatch.js';
import { spoilerCreate } from './_spoiler.js';
import { tabCreate } from './_tabs.js';
import './_fslightbox.js';

function main() {

    resizeWindow();
    ibg();
    scrollWatch();
    spoilerCreate();
    tabCreate();

    const menu_icon = document.querySelector('.icon-menu');
    const menu_body = document.querySelector('.menu__body');

    menu_icon.onclick = () => {
        menu_icon.classList.toggle('active');
        if (menu_icon.classList.contains('active')) {
            menu_body.classList.add('active');
        }
        else {
            menu_body.classList.remove('active');
        }
    }

    const search_action = document.querySelector('.action__search');
    const search_form = document.querySelector('.search-form');

    search_action.onclick = () => {
        search_form.classList.toggle('active');
    }

    const body = document.querySelector('body');

    fsLightboxInstances['gallery_ojjo'].props.onOpen = () => {
        body.style.marginRight = '17px';
    };

    const mailPost = document.querySelector('.mail__btn');
    mailPost.onclick = (event) => {
        event.preventDefault();
    }


}

window.onload = main;

