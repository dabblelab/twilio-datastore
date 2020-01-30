"use strict";
/** @module @dabblelab/twilio-datastore */

const MongoClient = require('mongodb').MongoClient;

const {getCollection, createCollection} = require('./collections');

function createMongoAdminClient(config){

    MongoClient.connect("mongodb://localhost:27017/twilio_datastore", (err, db) =>{
        if(err)
            throw err;
        return db;
    })
}

class MongoAdminClient {
    constructor(config){

        this.config = config;
        this.mongoAdminClient = createMongoAdminClient(config);
    }

    /**
     * Returns the internally used AdminClient instance used to make mongodb admin query
     * @returns {mongoAdminClient} A Mongodb Client instance.
     */
    getMongoAdminClient(){

        return this.mongoAdminClient;
    }

    /**
     * Returns an array containing list of collections with specified name in database
     * @params {collectionName} name of the collection to be searched
     * @returns [collectionNames] object containing the different collections.
     */
    getCollectionInfo(collectionName){

        try{

            return getCollection(collectionName, this.mongoAdminClient);
        }catch(error){

            throw error;
        }
    }

    /**
     * Returns an object of a created collection
     * @param {collectionName} name of the collection to be created.
     * @returns {collection}
     */
    createDBCollection(collectionName){

        try{

            return createCollection(collectionName, this.mongoAdminClient);
        }catch(error){
            throw error;
        }
    }

}

exports.MongoAdminClient = MongoAdminClient;