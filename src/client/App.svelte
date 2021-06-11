<script>
import { Router, Route } from 'svelte-routing';
import Navbar from './components/Navbar.svelte';
import About from './routes/About.svelte';
import Login from './routes/Login.svelte';
import Home from './routes/Home.svelte';
import Products from './routes/Products.svelte';
</script>

<main class="container-fluid">
    <Router>
        <Navbar />
        <Route path="/about"> 
            <About /> 
        </Route>
        <Route path="/login"> 
            <Login /> 
        </Route>
        <Route path="/products/:id" let:params> 
            <Products id={params.id}/> 
        </Route>
        <Route path="/"> 
            <Home />
        </Route>
    </Router>
</main>

<style>
</style>
