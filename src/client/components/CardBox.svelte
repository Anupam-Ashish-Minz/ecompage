<script>
import { onMount } from 'svelte';
import Card from '../components/Card.svelte';

let cardItems = [];

onMount(() => {
    fetch(`/api/products`)
    .then(data => data.json())
    .then(data => cardItems = data);
})
</script>

<div class="card-container">
    {#each cardItems as card}
        <Card productId={card.id}/>
    {:else}
        <h1>Loading Please Wait...</h1>
    {/each}
</div>

<style>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 2rem;
    column-gap: 1rem;
    margin-top: 2rem;
}
</style>
