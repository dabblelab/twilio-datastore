/**
 * Returns an object of created user.
 * @params {userObject} object to create new user with role and {db} database instance.
 * @returns {user}
 */
exports.createUser = (userObject, db) => {

    return db.createUser(userObject);
}

/**
 * Returns an object of an user.
 * @params {username} name of the user and {db} database instance.
 * @returns {user}
 */
exports.createUser = (username, db) => {

    return db.getUser(username);
}

/**
 * Returns an object of granted collection
 * @params {collectionName} name of collection to be granted, {roleObject} a role object with privileges and {db} database instance.
 * @returns {role}
 */
exports.grantRolesToUser = (collectionName, roleObject, db) => {

    return db.grantRolesToUser(collectionName, roleObject);
}