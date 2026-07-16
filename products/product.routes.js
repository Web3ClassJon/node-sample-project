const router = require("express").Router();

// router.use((req, res, next) => {
//     console.log("This is a product middleware function");
//     next();
// })

const {someProductMiddleware} = require("./product.middleware");
router.use(someProductMiddleware);

router.get("/", (req, res) => {
    res.send("This is a products home page");
})

router.get("/widgets", (req, res) => {
    res.send("This is the widgets page");
})

module.exports = router;