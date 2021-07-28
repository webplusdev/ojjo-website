export function tabCreate() {

    const tab_option = document.querySelectorAll('.tabs__tab-option');
    const tab_content = document.querySelectorAll('.tabs__tab-content');
    const tab_selection = document.querySelector('.tabs__tab-top_mobile');

    tab_option.forEach((tab, index) => {
        tab.onclick = () => {

            tabChange(tab_option, index);

            tabChange(tab_content, index);
        }
    });

    tab_selection.onchange = () => {
        console.log(tab_selection.value);
        for (let opt of tab_content) {
            if (Array.from(tab_content).indexOf(opt) === parseInt(tab_selection.value)) {
                tabChange(tab_content, tab_selection.value);
            }
        }
    }


    function tabChange(arr, index) {
        for (let el of arr) {
            el.classList.remove('active');
        }
        arr[index].classList.add('active');
    }
}

