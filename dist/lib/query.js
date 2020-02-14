/**
 * findQuery returns an array of document objects
 * @params {query} an object of mongodb query
 * @params {projection} a mongodb find query projection object
 * @params {config} an object which has detailed about twilio accountSid & authToken, db and collection
 * @params {client} a mongo rest api instance
 * @returns An array of all document objects that match query.
 */
exports.findQuery = async(query, projection, config, client) => {

    try{

        if(!isObject(query))
            throw new Error(`"${query}" should be an object!`);

        if(!isObject(projection))
            throw new Error(`"${projection}" should be an object!`);

        const resp = await client.post(`/find`, {
            form : {
                query : JSON.stringify(query),
                projection : JSON.stringify(projection),
                tableName : config.tableName,
                dbName : config.dbName
            }
        });
    
        const response = JSON.parse(resp.body)
        if(!response.status)
            throw new Error(response.message);
        return response.data;
        
    }catch(err){
        throw err;
    }
}

/**
 * insertQuery returns an array of document objects
 * @params {query} an insert object of mongodb query
 * @params {options} options
 * @params {config} an object which has detailed about twilio accountSid & authToken, db and collection
 * @params {client} a mongo rest api instance
 * @returns An array of all document objects that match query.
 */
exports.insertQuery = async(query, options, config, client) => {
    try{

        if(!isObject(query))
            throw new Error(`"${query}" should be an object!`);

        if(!Object.keys(query).length)
            throw new Error(`"${query}" should not be empty!`);

        if(!isObject(options))
            throw new Error(`"${options}" should be an object!`);

        const resp = await client.post(`/insert`, {
            form : {
                query : JSON.stringify(query),
                options : JSON.stringify(options),
                tableName : config.tableName,
                dbName : config.dbName
            }
        });
        
        const response = JSON.parse(resp.body)
        if(!response.status)
            throw new Error(response.message);
        return response.data.ops;
    }catch(err){

        throw err;
    }
}

/**
 * updateQuery returns an array of document objects
 * @params {query} query parameters
 * @params {updateDocument} update document
 * @params {options} options
 * @params {config} an object which has detailed about twilio accountSid & authToken, db and collection
 * @params {client} a mongo rest api instance
 * @returns An array of all document objects that match query.
 */
exports.updateQuery = async(query, updateDocument, options, config, client) => {
    try{

        if(!isObject(query))
            throw new Error(`"${query}" should be an object!`);

        if(!isObject(updateDocument))
            throw new Error(`"${updateDocument}" should be an object!`);

        if(!isObject(options))
            throw new Error(`"${options}" should be an object!`);

        const resp = await client.post(`/update`, {
            form : {
                query : JSON.stringify(query),
                updateDocument : JSON.stringify(updateDocument),
                options : JSON.stringify(options),
                tableName : config.tableName,
                dbName : config.dbName
            }
        });

        const response = JSON.parse(resp.body)
        if(!response.status)
            throw new Error(response.message);
        return response.data.result;

    }catch(err){
        throw err;
    }
}

/**
 * Returns an object about sucessfully remove document or not
 * @params {query} remove query
 * @params {options} options
 * @params {config} an object which has detailed about twilio accountSid & authToken, db and collection
 * @params {client} a mongo rest api instance
 * @returns return removed document
 */
exports.removeQuery = async(query, options, config, client) => {
    try{

        if(!isObject(query))
            throw new Error(`"${query}" should be an object!`);

        if(!isObject(options))
            throw new Error(`"${options}" should be an object!`);

        const resp = await client.post(`/remove`, {
            form : {
                query : JSON.stringify(query),
                options : JSON.stringify(options),
                tableName : config.tableName,
                dbName : config.dbName
            }
        });

        const response = JSON.parse(resp.body)
        if(!response.status)
            throw new Error(response.message);
        return response.data.result;

    }catch(err){
        throw err;
    }
}

/**
 * Returns an object about sucessfully remove document or not
 * @params {query} count query
 * @params {options} options
 * @params {config} an object which has detailed about twilio accountSid & authToken, db and collection
 * @params {client} a mongo rest api instance
 * @returns return counted document
 */
exports.countQuery = async(query, options, config, client) => {
    try{

        if(!isObject(query))
            throw new Error(`"${query}" should be an object!`);

        if(!isObject(options))
            throw new Error(`"${options}" should be an object!`);

        const resp = await client.post(`/count`, {
            form : {
                query : JSON.stringify(query),
                options : JSON.stringify(options),
                tableName : config.tableName,
                dbName : config.dbName
            }
        });

        const response = JSON.parse(resp.body)
        if(!response.status)
            throw new Error(response.message);
        return response.data;

    }catch(err){
        throw err;
    }
}

function isObject(arg) {
    return arg !== null && typeof arg === 'object';
  }