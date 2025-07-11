const express = require("express");
const path = require("path");
const session = require("express-session");
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        secret: "replace_this_with_a_secure_key",
        resave: false,
        saveUninitialized: true,
    })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const USERS = [
    {
        id: 1,
        username: "AdminUser",
        email: "admin@example.com",
        password: 'adminPassword', //Passwords probably shouldn't be stored in plaintext, we should fix that
        role: "admin",
        hasRSVPed: false,
        rsvpTime: null
    },
    {
        id: 2,
        username: "RegularUser",
        email: "user@example.com",
        password: "userPassword",
        role: "user", // Regular user
        hasRSVPed: false,
        rsvpTime: null
    },
];

//Note: These are (probably) not all the required routes, nor are the ones present all completed.
//But they are a decent starting point for the routes you'll probably need

// GET /login - Render login form
app.get("/login", (request, response) => {
    response.render("login");
});

// POST /login - Allows a user to login
app.post("/login", (request, response) => {

});

// GET /signup - Render signup form
app.get("/signup", (request, response) => {
    response.render("signup");
});

// POST /signup - Allows a user to signup
app.post("/signup", (request, response) => {
    
});

// GET / - Render index page or redirect to landing if logged in
app.get("/", (request, response) => {
    if (request.session.user) {
        return response.redirect("/event");
    }
    response.render("index");
});

// POST /event - Handles allowing someone to RSVP to the event
app.post("/event", (request, response) => {
    
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
