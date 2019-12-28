const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const MongoClient = require('mongodb').MongoClient
// const testData = require('./test-data.js')

const app = express()
app.use(bodyParser.json())

var cors = require('cors');
app.use(cors());
// const mongoClient = new MongoClient('mongodb://localhost:27017/', { useUnifiedTopology: true })

// const db;
// const collection;


// mongoClient.connect((err, client) => {
//     if (err)
//         console.log(err)

//     db = client.db('snippetsdb')
//     collection = db.collection("snippets")

//     collection.insertMany(testData)
// })

// app.get('/', (req, res) => {

// })

app.post('/api/snippets', (req, res) => {
    console.log('RECEIVED')
    // console.log(req.body.selectors)
    console.log(req.body)
    res.send(JSON.stringify([1, 1, 1, 1]))
    // const { filename, category, description, startDate, endDate } = { req.body.selectors }

})

app.listen(3030, 'localhost', (err) => {
    if (err)
        console.log(err)

    console.log('server started')
})