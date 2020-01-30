/**
 * Returns [collections] Object containing list of collections
 * @params collectionName and db instance
 * @returns [collections]
 */
exports.getCollection = (collectionName, db) => {

    return db.collectionNames(collectionName);
}

/**
 * Returns {collection}
 * @params collectionName and db instance
 * @returns {collection}
 */
exports.createCollection = (collectionName, db) => {

    return db.createCollection(collectionName);
}