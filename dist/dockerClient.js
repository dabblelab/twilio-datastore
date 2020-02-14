"use strict";
/** @module @dabblelab/twilio-datastore */

const {TwilioDatastoreApiClient} = require("./client");

class TwilioDatastoreDockerApiClient extends TwilioDatastoreApiClient {
    constructor(config){

        if(!config.hasOwnProperty("dbName"))
            config["dbName"] = "twilio-datastore";
        super(config, true);
    }

}

exports.TwilioDatastoreDockerApiClient = TwilioDatastoreDockerApiClient;