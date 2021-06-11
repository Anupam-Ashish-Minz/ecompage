import fs from 'fs';
import path from 'path';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { passportConf, isLoggedIn } from './misc/passportConf';
import { router as productsRouter } from './routes/products';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.use(express.json());
app.use(express.urlencoded());
app.use(session({
    saveUninitialized: false,
    secret: "diox1x2y3z4z5"
}));

app.use(passport.initialize());
app.use(passport.session());

passportConf();

app.use("/api/products/", productsRouter);

app.get("/api", (_req, res) => {
    res.send("api lies here");
});

app.post("/login", passport.authenticate('local', {successRedirect: "/"}));

app.get("/isLoggedIn", (_req, res) => {
    res.send(isLoggedIn)
});

const indexFile = fs.readFileSync(path.join(__dirname, "..", "..", "public", "index.html")).toString();
app.get("*", (_req, res) => {
    res.send(indexFile);
});

app.listen(port, ()=>console.log(`the server is running in http://localhost:${port}`));
