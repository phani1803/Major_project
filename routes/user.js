const express = require("express");
const router = express.Router({mergeParams: true});
const User = require("../models/user.js");
const Wrapasync = require("../utils/Wrapasync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlware.js");

const userController = require("../controllers/users.js")

router
    .route("/signup")
    .get(userController.renderSignUpForm)
    .post(Wrapasync(userController.signup));

router.route
    ("/login")
    .get( userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local" , {failureRedirect: '/login' , failureFlash: true }), userController.login);
// router.get("/signup", userController.renderSignUpForm);

// router.post("/signup", Wrapasync(userController.signup));

// router.get("/login", userController.renderLoginForm);

// router.post("/login",saveRedirectUrl, passport.authenticate("local" , {failureRedirect: '/login' , failureFlash: true }), userController.login);

router.get("/logout",userController.logOut);

module.exports = router;