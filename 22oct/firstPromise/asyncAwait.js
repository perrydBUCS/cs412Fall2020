//async / await = syntactic sugar (it's really a Promise)
//also, we'll look at config objects

const fetch = require('node-fetch');
const FETCHCONFIG = require('config/fetchConfigs');

const doRequest = async value => {
    let rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url + value);
    let cleanReturnValue = await rawReturnValue.json();
    return cleanReturnValue; //looks like calling a resolve function
};

// const fetchOptions = {
//     method: 'GET',
//     url: 'https://postman-echo.com/get?test=',
//     secretKey: 'a439857sfh9w84r2ihfwdsfh83r' //do NOT PUSH this line to github
// };

// const doRequest = async value => {
//     let rawReturnValue = await fetch(fetchOptions.url + value);
//     let cleanReturnValue = await rawReturnValue.json();
//     return cleanReturnValue; //looks like calling a resolve function
// };

doRequest('123')
    .then(cleanReturnValue => {
        console.log(`Rcvd: ${cleanReturnValue}, now calling again!`);
        doRequest(cleanReturnValue.args.test + '456')
            .then(cleanReturnValue => {
                console.log(`Rcvd: ${cleanReturnValue} from the second call`);
            });
    });


