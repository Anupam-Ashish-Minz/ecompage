<script>
</script>

<form action="" method="GET">
    <input type="" class="search-bar" placeholder="search here..">
    <div class="search-icon">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
    </div>
</form>

<style>
.search-bar {
    background-color: var(--barkColor);
    color: var(--foreColor);
    outline: none;
    border: none;
    height: var(--searchBarSize);
    padding: var(--searchBarSize);
    padding-left: calc(3 * var(--searchBarSize));
    font-size: var(--searchBarFontSize);
}
.search-icon {
    width: var(--searchBarSize);
    height: var(--searchBarSize);
    transform: translate(var(--searchBarSize), calc(2 * calc(0px - var(--searchBarSize))));
    position: absolute;
}
</style>
