"use strict";
/** @module @dabblelab/twilio-datastore */

const got = require('got'),
      {findQuery, insertQuery, updateQuery, removeQuery} = require('./lib/query');

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

class TwilioDatastoreApiClient {
    constructor(config){

        this.config = config;
        this.client = createGotClient(config);
    }

    find(query = {}, projection = {}) {

        return findQuery(query, projection, this.config, this.client);
    }

    insert(query = {}, options = {}){
        return insertQuery(query, options, this.config, this.client);
    }

    update(query = {}, updateDocument = {}, options = {}){
        return updateQuery(query, updateDocument, options, this.config, this.client);
    }

    remove(query = {}, options = {}){
        return removeQuery(query, options, this.config, this.client);
    }

}

exports.TwilioDatastoreApiClient = TwilioDatastoreApiClient;