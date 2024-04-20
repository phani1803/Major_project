const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/Wrapasync.js");
const ExpressEror = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middlware.js");
// const { createReview } = require("../controllers/reviews.js");

const reviewController = require("../controllers/reviews.js");
const review = require("../models/review.js");

//Reviews 
///post review route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewID",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;