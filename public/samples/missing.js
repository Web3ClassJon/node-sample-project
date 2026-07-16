application.get("/form", (req, res) => {
    res.send(
        `<form action="/request-handler" method="POST" >
            <label>First Name: </label>
            <input name="firstName" />
            <label>Last Name: </label>
            <input name="lastName" />
            <input type="submit" />
        </form>`
    )
})

