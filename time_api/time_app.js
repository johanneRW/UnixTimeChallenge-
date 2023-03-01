const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(express.static("public"))
app.use(bodyParser.json());


app.get("/time", (req, res) => {
    res.sendFile(__dirname + "/public/time_page.html")
})

app.listen(8080, (error) => {
    if (error) {
        console.log
        return
    }
    console.log("Server is running on port", 8080)
})

module.exports = app;

