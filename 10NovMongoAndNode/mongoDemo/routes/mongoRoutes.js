const express = require('express');
const router = express.Router();
const db = require('../mongoCx');

router.route('/')
.post(async (req, res) => {
//    let theName = req.body.name;
    let mongo = await db.getDB('cs412');
//    let results = await mongo.collection('names').insert({name: theName});
    let results = await mongo.collection('names').insert(req.body);

    res.send(`Inserted ${req.body.name}`);
})

    .get(async (req, res) => {
        let mongo = await db.getDB('cs412');
        let results = await mongo.collection('names').find({name: 'Bob'}).toArray();
        if (!results.length)  {
            res.send('Not found');
        }
        else {
            res.json(results);
        }
    })
    router.get('/:name', async (req, res) => {
        let mongo = await db.getDB('cs412');
        let results = await mongo.collection('names').find({name: req.params.name}).toArray();
        if (!results.length)  {
            res.send('Not found');
        }
        else {
            res.json(results);
        }
    })

module.exports = router;
