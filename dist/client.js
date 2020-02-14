"use strict";
/** @module @dabblelab/twilio-datastore */

const {createGotClient, createGotDockerClient} = require('./lib/gotClients'),
      {findQuery, insertQuery, updateQuery, removeQuery, countQuery} = require('./lib/query');

class TwilioDatastoreApiClient {
    constructor(config, clientType=false){

        this.config = config;
        this.client = !clientType ? createGotClient(config) : createGotDockerClient(config);
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

    count(query = {}, options = {}){
        return countQuery(query, options, this.config, this.client);
    }

}

exports.TwilioDatastoreApiClient = TwilioDatastoreApiClient;