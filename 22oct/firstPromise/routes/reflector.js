const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/fetchConfigs');

router.route('/:inputValue') //matches localhost:3000/reflector/someInputValue
    .get(async (req, res) => {
        //first call
        const rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url + req.params.inputValue);
        const cleanReturnValue = await rawReturnValue.json();

        //second call
        let secondRawValue = await fetch(FETCHCONFIG.fetchOptions.url + cleanReturnValue.args.test+ '456' );
        let secondCleanValue = await secondRawValue.json();

        //send a response back to the client
        res.json({value: secondCleanValue.args.test, method: req.method});
    })
    .post(async (req, res) => {
        let rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url + req.body.inputValue);
        let cleanReturnValue = await rawReturnValue.json();

        //second call
        let secondRawValue = await fetch(FETCHCONFIG.fetchOptions.url + cleanReturnValue.args.test+ '456' );
        let secondCleanValue = await secondRawValue.json();

        //send a response back to the client
        res.json({value: secondCleanValue.args.test, method: req.method});
    })

module.exports = router;

//async/await really just wraps Promises for us to make the code look more synchronous

