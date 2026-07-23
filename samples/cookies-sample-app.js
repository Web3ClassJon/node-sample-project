const express = require('express');
const app = express();

// set up the cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use((req, res, next) => {
    let count = req.cookies?.visitCount;
    if(count >= 0){
        count++;
    }else{
        count = 1;
    }
    res.cookie("visitCount", count, {maxAge: 1000 * 60 * 60 * 24 *365});
    req.visitCount = count;
    next();
});

app.get("/set-cookies", (req, res) => {
    res.cookie("firstCookie", "Hello");

    // To delete all cookies
    for(let key in req.cookies){
        //console.log(key);
        res.clearCookie(key);
    }

    const millisecondsPerHour = 1000* 60 * 60;
    res.cookie("secondCookie", "Hi again", {expire: Date.now() + millisecondsPerHour});

    res.cookie("thirdCookie", "FOO", {maxAge: millisecondsPerHour});

    res.send("Cookies set");
})

app.get("/show-cookies", (req, res) => {
    res.join(req.cookies);
});

app.get("/delete-cookies", (req, res) => {
    res.clearCookie("firstCookie");
    res.send("Cookies Deleted");
})

// Count the visits to this page
// app.get("/some-page", (req, res) => {
//     let count = req.cookies?.visitCount;
//     if(count >= 0){
//         count++;
//     }else{
//         count = 1;
//     }
//     res.cookie("visitCount", count, {maxAge: 1000 * 60 * 60 * 24 *365});
//     res.send(`You have visitied this page ${count} times.`);
// });

app.get("/some-page", (req, res) => {
    res.send("this is some page....");
})


const server = app.listen(8080, () => {
    console.log("Waiting for request on port %s", 8080);
});