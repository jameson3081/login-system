const express = require('express');
const router = express.Router();
const userList = require("../data/users.json")

//route for the users.json
router.get("/api/users", (req, res) => {
    //reads users.json api
    res.send(userList)
})



//ROUTES
router.get("/", (req,res) => {
    res.render('index', {title:'Simply Tasty | Home'})
})



router.get("/login", (req,res) => {
    res.sendFile("login.html", {root:"./public/SimplyTasty"})
})

router.get("/register", (req,res) => {
    res.sendFile("register.html", {root:"./public/SimplyTasty"})
})

router.get("/Cart", (req,res) => {
    res.render('Cart', {title:'Your Cart'})
})

router.get("/Checkout", (req,res) => {
    res.render('Checkout', {title:'Finalize Your Orders'})
})

router.get("/ContanctAndShippingDetails", (req,res) => {
    res.render('ContanctAndShippingDetails', {title:'Enter Contact'})
})

router.get("/CreateAccount", (req,res) => {
    res.render('CreateAccount', {title:'Register Your Account'})
})

router.get("/Desserts", (req,res) => {
    res.render('Desserts', {title:'Choose Your Desserts'})
})

router.get("/EnterNewPassword", (req,res) => {
    res.render('EnterNewPassword', {title:'Create Password'})
})

router.get("/ForgotPassword", (req,res) => {
    res.render('ForgotPassword', {title:'Forgot Password'})
})

router.get("/Meals", (req,res) => {
    res.render('Meals', {title:'Main Dishes'})
})

router.get("/OurMenu", (req,res) => {
    res.render('OurMenu', {title:'Choose Your Food Category'})
})

router.get("/PaymentDetails", (req,res) => {
    res.render('PaymentDetails', {title:'Payment Details'})
})

router.get("/PlaceOrder", (req,res) => {
    res.render('PlaceOrder', {title:'Place Your Order'})
})

router.get("/ResetPassword", (req,res) => {
    res.render('ResetPassword', {title:'Reset Your Password'})
})

router.get("/SendEmail", (req,res) => {
    res.render('SendEmail', {title:'Send Email'})
})

router.get("/Snacks", (req,res) => {
    res.render('Snacks', {title:'Snacks'})
})


router.use((req, res) =>{
    res.status(404).render('404', {title: 'Page not Found'})
})

module.exports = router;