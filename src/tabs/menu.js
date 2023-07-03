import hamburgerImage from '../images/menu/hamburger.jpg';
import sandwichImage from '../images/menu/sandwich.jpg';
import tacoImage from '../images/menu/taco.png';
import chickenWingsImage from '../images/menu/chicken-wings.jpg';
import pizzaImage from '../images/menu/pizza.jpg';
import drinksImage from '../images/menu/drinks.jpg';

export default function () {
    return `
    <div class="content menu">
        <h1 class="title big-text">Menu</h1>
        <ul class="menu-list">
            <li class="card">
                <img src="${hamburgerImage}" alt="A photo of hamburger">
                <h2>Hamburger</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, omnis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, omnis?</p>
            </li>
            <li class="card">
                <img src="${sandwichImage}" alt="A photo of sandwich" width="300">
                <h2>Sandwich</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, omnis?</p>
            </li>
            <li class="card">
                <img src="${tacoImage}" alt="A photo of taco" width="300">
                <h2>Taco</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, omnis?</p>
            </li>
            <li class="card">
                <img src="${chickenWingsImage}" alt="A photo of chicken wings" width="300">
                <h2>Chicken wings</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, omnis?</p>
            </li>
            <li class="card">
                <img src="${pizzaImage}" alt="A photo of pizza" width="300">
                <h2>Pizza</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, omnis?</p>
            </li>
            <li class="card">
                <img src="${drinksImage}" alt="A photo of drinks" width="300">
                <h2>Drinks</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, omnis?</p>
            </li>
        </ul>
    </div>
    `
}