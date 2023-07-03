import heroImage from '../images/home/hamburger.jpg';

export default function () {
    return `
<div class="content home">
    <img src="${heroImage}" alt="Hamburger">
    <div class="text">
        <h1>Put a catchphrase <span class="big-text">to draw people's attention</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam ea aliquid temporibus veniam nam.</p>
        <button data-tab='menu'>Let's go!</button>
    </div>
</div>
`
}