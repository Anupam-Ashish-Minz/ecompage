<script>
import { Link } from 'svelte-routing';
</script>

<nav class="navbar">
    <Link to="/">
        <div class="logo">
        logo
        </div>
    </Link>
    <div class="navbar-right">
        <Link to="#">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
            </div>
        </Link>
        <Link to="/login">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </Link>
    </div>
</nav>

<style>
.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: var(--navbarSize);
    padding: 1rem;
}
.navbar-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
}
.navbar .logo {
    font-weight: bold;
    font-size: 16px;
}
.navbar .icon {
    width: var(--navbarSize);
    height: var(--navbarSize);
}
</style>
