const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static("public"))
app.use(bodyParser.json())

express.static.mime.define({'text/css': ['css']});
express.static.mime.define({'text/javascript': ['js']})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/time_page.html")
})

app.listen(8080, (error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("Server is running on port", 8080)
})

module.exports = app

