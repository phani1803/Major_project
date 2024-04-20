const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/Wrapasync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn,isOwner,validateListing } = require("../middlware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


router
    .route("/")
    .get(  wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing))
    // .post((req,res) =>{
    //     res.send(req.file);
    // });

//new route 
//make sure the new route is above of show route otherwise we get an error 
//because in show we gave id and itn searches for new and wee get an error
router.get("/new" ,isLoggedIn, listingController.renderNewForm);


router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn,isOwner,upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing))
//index route       
// router.get("/",  wrapAsync(listingController.index));


//show route
// router.get("/:id",wrapAsync(listingController.showListing));

//create route
// router.post("/",isLoggedIn,validateListing, wrapAsync(listingController.createListing));
    // let {title,description,image,proce,loocation,country} = req.body;
    // let listing = req.body.listing;
    // if(!req.body.listing){
    //     throw new ExpressEror(400,"Send valid data for listing");
    // }

    // if(!newListing.title){
    //     throw new ExpressEror(400,"Title is missing");
    // }    
    // if(!newListing.description){
    //     throw new ExpressEror(400,"Description is missing");
    // }    
    // if(!newListing.location){
    //     throw new ExpressEror(400,"Location is missing");
    // }    


//edit route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

//update route
// router.put("/:id",isLoggedIn,isOwner,validateListing, wrapAsync(listingController.updateListing));

// //delete route
// router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

module.exports =  router;