<script>
import { onMount } from 'svelte';
import { Link } from 'svelte-routing';
export let productId;
let product = {};
onMount(()=>{
    fetch(`/api/products/${productId}`)
    .then(data => data.json())
    .then(data => [product] = data )
});
</script>

<Link to={`/products/${productId}`}>
    <div class="card">
        <img src={product.image} alt="" class="card-image">
        <div class="card-sub">
            <h3 class="card-title">{product.name}</h3>
            <div class="card-price">{product.price}</div>
        </div>
        <div class="card-descp">{product.descp}</div>
    </div>
</Link>

<style>
.card {
    width: var(--cardWidth);
    height: var(--cardHeight);
    background-color: var(--backColor);
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: start;
    border: rgba(255, 255, 255, 0.2) 2px solid;
    border-radius: 5px 5px;
}
.card img {
    width: var(--cardWidth);
    height: var(--cardHeight);
    object-fit: cover;
}
.card-sub {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0.5rem;
}
.card-title {
    margin: 0;
    font-weight: bold;
}
.card-descp {
    display: none;
    overflow: hidden;
    margin-bottom: 0.5rem;
}
.card-title, .card-descp, .card-price {
    margin-left: 1rem;
}
.card:hover .card-image{
    opacity: 0;
}
.card:hover .card-descp {
    display: block;
    width: calc(var(--cardWidth) - 2rem);
    height: calc(var(--cardHeight) - 2rem);
    position: absolute;
    margin-top: 2rem;
    margin-bottom: 2rem;
    overflow: scroll;
}
.card:hover .card-sub {
    display: none;
}
.card:active .card-image{
    opacity: 1;
}
.card:active .card-descp {
    display: none;
    width: calc(var(--cardWidth) - 2rem);
    height: calc(var(--cardHeight) - 2rem);
    position: absolute;
    margin-top: 2rem;
    margin-bottom: 2rem;
    overflow: scroll;
}
.card:active .card-sub {
    display: none;
}
</style>
