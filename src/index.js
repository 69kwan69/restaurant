import './style/reset.css';
import './style/style.css';
import navBar from './tabs/navBar';
import home from './tabs/home';
import menu from './tabs/menu';
import about from './tabs/about';


initializePage();

// Tab-switch logic
const tabWrapper = document.querySelector('.tab-wrapper');

document.body.addEventListener('click', e => {
    const tabData = e.target.dataset.tab;
    const main = document.querySelector('main');

    // Clear and display corresponding content
    if (tabData === 'home') {
        main.innerHTML = '';
        main.insertAdjacentHTML('afterbegin', home());
    } else if (tabData === 'menu') {
        main.innerHTML = '';
        main.insertAdjacentHTML('afterbegin', menu());
    } else if (tabData === 'about') {
        main.innerHTML = '';
        main.insertAdjacentHTML('afterbegin', about());
    }

    // Indicate current tabs
    highlightCurrTab(tabData)
})

function initializePage() {
    document.body.insertAdjacentHTML('afterbegin', navBar());

    const main = document.createElement('main');
    document.body.insertAdjacentElement('beforeend', main);

    main.insertAdjacentHTML('beforeend', home());
}

function highlightCurrTab(tabData) {
    const tabs = tabWrapper.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.dataset.tab === tabData) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

