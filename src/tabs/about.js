import chefImage from '../images/about/chef.jpeg'

export default function() {
return `
<div class="content about">
    <h1 class="title big-text">About Us</h1>
    <div class="introduction">
        <img src="${chefImage}" alt="A photo of a chef holding a hamburger" width="250">
        <h2>Welcome to <span class="highlight">Fastfood Restaurant!</span></h2>
        <div class="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reprehenderit dicta adipisci modi non,
                eius sint recusandae mollitia quas fugit quidem. Fugiat ea excepturi debitis quo, mollitia reiciendis,
                inventore vero ratione laborum illum iste!
            </p>
            <p>Enim laboriosam incidunt quae ratione reprehenderit voluptatibus, consequuntur libero sapiente quia
                recusandae nemo voluptas, dolorem quod eaque illum, est quam. Repellat ullam amet rerum iusto atque
                praesentium qui quis recusandae, ex perspiciatis, distinctio illo maiores molestiae! Quas nihil nisi
                praesentium explicabo autem qui impedit minima ea.</p>
            <p>Asperiores enim optio voluptatem iure reiciendis mollitia dicta consectetur fugit.</p>
        </div>
    </div>
</div>
`
}