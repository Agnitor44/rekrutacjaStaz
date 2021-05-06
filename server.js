const express = require('express')
const fs = require('fs')
const cors = require('cors')



const app = express()
app.use(express.json());
app.use(cors())


app.post('/api/savingData', (req, res) => {
   
  console.log(req.body)
    fs.writeFileSync(`./saved/${req.body.name}.json`, JSON.stringify(req.body.txt) )
    res.end()
    
    
    })


app.get('/api/loadingData', (req, res) => {
    console.log(req.body)
})
app.listen(5000, () => {
    console.log('serwer słucha')
})