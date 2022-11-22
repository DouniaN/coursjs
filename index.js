const express = require("express")
const app = express()

const contacts = [{
  nom:"Nougaoui",
  telephone :"Dounia"

},

{nom : "manal",
telephone :"Dounia" }

]

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/api/contacts', function (req, res) {
    res.status(200).json(contacts)
})
  
app.listen(3000)