import logo from '../images/logo/logo.png';

export default function () {
    return `
<nav>
    <div class="logo">
        <img src="${logo}" alt="logo" width="100">
        <h2 class='logo-text'><span class="highlight">Fastfood</span> Restaurant</h2>
    </div>

    <ul class="tab-wrapper">
        <li class="tab active" data-tab="home">Home</li>
        <li class="tab" data-tab="menu">Menu</li>
        <li class="tab" data-tab="about">About Us</li>
    </ul>
</nav>
`
}