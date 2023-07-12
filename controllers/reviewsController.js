import { Review } from "../models/Reviews.js";

const saveReview = async (req, res) => {
    //validate
    const { name, email, message } = req.body
    const errors = [];

    if (name.trim() === "") {
        errors.push({ message: "The name is required" })
    }
    if (email.trim() === "") {
        errors.push({ message: "The email is required" })
    }
    if (message.trim() === "") {
        errors.push({ message: "The message is required" })
    }
    console.log(errors);

    if (errors.length > 0) {
        //consult reviews already written
        const reviews = await Review.findAll();

        //show errors
        res.render("reviews", {
            page: "Reviews",
            errors,
            name,
            email,
            message,
            reviews,
        });
    } else {
        //add data to the DB
        try {
            await Review.create({
                name,
                email,
                message,
            });

            res.redirect("/reviews")
        } catch (error) {
            console.log(error);
        }
    }
}



export {
    saveReview,
}