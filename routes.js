const express = require("express");
const routes = new express.Router();

routes.get("/", (req, res) => {
    res.render("./index.html");
});

routes.get("/home", (req, res) => {
    res.render("home.html");
});

routes.get("/about", (req, res) => {
    res.render("about.html");
});

routes.get("/grooming", (req, res) => {
    res.render("grooming.html");
});

routes.get("/boarding", (req, res) => {
    res.render("boarding.html");
});

routes.get("/gallery", (req, res) => {
    res.render("gallery.html");
});

routes.get("/testimonials", (req, res) => {
    res.render("testimonials.html");
});

routes.get("/grooming-images", (req, res) => {
    res.render("grooming-images.html");
});

routes.get("/boarding-images", (req, res) => {
    res.render("boarding-images.html");
});

routes.get("/grooming-testimonials", (req, res) => {
    res.render("grooming-testimonials.html");
});

routes.get("/boarding-testimonials", (req, res) => {
    res.render("boarding-testimonials.html");
});

routes.get("/contact", (req, res) => {
    res.render("contact.html");
});

module.exports = routes;
