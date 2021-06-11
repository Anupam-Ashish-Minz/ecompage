<script>
export let id;
$: fetch(`/api/products/${id}`)
    .then(data => data.json())
    .then(data => [product] = data);
let product;

import { onMount } from 'svelte';
import SearchBar from "../components/SearchBar.svelte";
import CardBox from '../components/CardBox.svelte';

onMount(()=>{
    fetch(`/api/products/${id}`)
    .then(data => data.json())
    .then(data => [product] = data);
});

</script>

<SearchBar />
<div class="product-container">
    <h1>{product?.name}</h1>
    <img src={product?.image} alt="" class="product-image">
    <div class="product-container-right">
        <p class="product-descp">{product?.descp}</p>
        <p class="product-price">INR. {product?.price}</p>
        <button class="add-to-cart-button">Add to Cart</button>
    </div>
</div>
<CardBox />

<style>
.product-container {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    margin-top: 0;
}
.product-container h1 {
    margin-top: 0;
}
.product-image {
    flex-grow: 1;
    border: rgba(255, 255, 255, 0.2) 2px solid;
    border-radius: 5px 5px;
}
.product-container-right {
    display: grid;
    grid-template-columns: auto auto;
}
.product-descp {
    grid-column: span 2;
}
.add-to-cart-button {
}
@media (min-width: 600px) {
    .product-container {
        display: grid;
        grid-template-rows: auto auto;
    }
    .product-container h1 {
        grid-column: span 2;
    }
    .product-image {
        width: 80%;
    }
}
</style>
