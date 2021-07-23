const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const md5 = require("blueimp-md5");
const axios = require("axios");
const { request } = require('http');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log(`---- Server running on port ${port} ----`);
})

// Marvel Route
app.get('/marvel', (req, res) => {
    //host, path, query
    const marvelRoute = 'http://gateway.marvel.com/v1/public/comics';
    const ts = new Date().getTime();

    // params aka query
    const params = {
        apikey: '0999b28381c5f6bc14ce58aa40a8b809',
        ts,
        hash: '',
        limit: 40
    };
    params.hash = md5(params.ts + process.env.MARVEL_PRIVATE_KEY + params.apikey);

    axios.get(marvelRoute, { params })
        .then(r => {
            res.status(200).send({ success: r.data })
        })
        .catch(e => {
            res.status(500).send({ error: e })
        });
})
