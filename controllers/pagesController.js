import { Travel } from "../models/Travel.js";
import { Review } from "../models/Reviews.js";

const homepage = async (req, res) => { // rep - petition // res - express response
    //consult models 
    try {
        const [travels, reviews] = await Promise.all([Travel.findAll({limit: 3}), Review.findAll({limit: 3}) ])

        res.render("homepage", {
            page: "Homepage",
            clase: "home",
            travels,
            reviews,
        });
    } catch (error) {
        console.log(error);
    }

    
};

//more info
const pageMoreInfo = (req, res) => {
    res.render("moreInfo", {
        page: "More Information",
    });
};

//travels
const pageTravels = async (req, res) => {
    //consult data base
    const travels = await Travel.findAll();

    res.render("travels", {
        page: "Next travels",
        travels,
    });
};

//reviews
const pageReviews = async (req, res) => {
    
    try {
        const reviews = await Review.findAll();
        
        res.render("reviews", {
            page: "Reviews",
            reviews,
        });
    } catch (error) {
        console.log(error);
    }
};

//each travel
const infoEachTravel = async (req, res) => {
    const { slug } = req.params;

    try {
        const travel = await Travel.findOne({ where: { slug } })
        res.render("infoTravel", {
            page: "Travel info",
            travel,
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    homepage,
    pageMoreInfo,
    pageTravels,
    pageReviews,
    infoEachTravel
}