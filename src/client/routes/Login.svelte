<script>
import { Link } from 'svelte-routing';
</script>
<section class="form-section">
    <form action="/login" method="POST" class="form-container">
        <label for="email" class="">email</label>
        <input type="email" name="email" class="">
        <label for="password" class="">password</label>
        <input type="password" name="password" class="">
        <Link to="/register"><span class="signup-link">Don't have a password sign up</span></Link>
        <button type="submit" class="">Login</button>
    </form>
</section>

<style>
.form-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.form-container {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 5rem;
    align-content: center;
    width: 100%;
}
.form-container label {
    margin-bottom: 1rem;
}
.form-container input {
    margin-bottom: 1rem;
    height: 2rem;
    border: none;
    outline: none;
    border-radius: 0.5rem 0.5rem;
}
.form-container .signup-link {
    text-decoration: underline;
}
.form-container button {
    margin-top: 2rem;
    height: 2.75rem;
    color: white;
    /*background-color: #0a0a0a;*/
    background-color: hsl(250, 100%, 60%);
    outline: none;
    border: none;
    font-size: 20px;
    border-radius: 0.5rem 0.5rem;
    width: 50%;
}
@media (min-width: 600px) {
    .form-container {
        width: 350px;
    }
}
</style>
