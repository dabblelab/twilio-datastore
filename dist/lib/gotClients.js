const got = require('got');

function createGotClient(config){

    const {accountSid, authToken, tableName} = config || {};

    if(!accountSid)
        throw new Error(`"accountSid" is required!`);

    if(!authToken)
        throw new Error(`"authToken" is required!`);

    if(!tableName)
        throw new Error(`"tableName" is required!`);

    const client = got.extend({
        prefixUrl: 'http://3.90.179.30:3002/twilio-datastore/v1',
        username: accountSid,
        password : authToken,
        headers: {
            'User-Agent': 'twilio-datastore-api',
        },
    });

    return client;
}

function createGotDockerClient(config){

    const {url, tableName} = config || {};

    if(!url)
        throw new Error(`"url" is required!`);

    if(!tableName)
        throw new Error(`"tableName" is required!`);

    const client = got.extend({
        prefixUrl: `${url}/twilio-datastore/v1`,
        headers: {
            'User-Agent': 'twilio-datastore-api',
        },
    });

    return client;
}

module.exports = {
    createGotClient, 
    createGotDockerClient
};