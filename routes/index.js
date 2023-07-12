import express from 'express';
import { homepage, pageMoreInfo, pageTravels, pageReviews, infoEachTravel } from '../controllers/pagesController.js';
import { saveReview } from '../controllers/reviewsController.js';

const router = express.Router();

router.get("/", homepage);

router.get("/moreInfo", pageMoreInfo);

router.get("/travels", pageTravels);

router.get("/travels/:slug", infoEachTravel);

router.get("/reviews", pageReviews);
router.post("/reviews", saveReview);



export default router;