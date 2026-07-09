const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    //res.send(x);
    //throw new Error("Some Error");
    next(new Error("Some other new error"));
    return;
})



// Error handler
app.use((error, req, res, next) => {
    console.log("Error!!!!");
    console.log(req.path);
    console.log(error);
    res.status(500).send("An error occurred.");
})

const server = app.listen(8080, () => {
    console.log("Waiting for requests on port 8080");
})