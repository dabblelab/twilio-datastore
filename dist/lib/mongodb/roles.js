/**
 * Returns an object of role
 * @params {roleName} the name of role and {db} instance of database.
 * @returns {role}
 */
exports.getRoleInfo = (roleName, db) => {

    return db.getRole(roleName, { showPrivileges: true })
}

/**
 * Returns an object of created role
 * @params {roleObject} a role object with privileges and {db} database instance.
 * @returns {role}
 */
exports.createRole = (roleObject, db) => {

    return db.createRole(roleObject);
}

/**
 * Returns an object of updated role
 * @params {roleName} name of role to be updated, {roleObject} a role object with privileges and {db} database instance.
 * @returns {role}
 */
exports.updateRole = (roleName, roleObject, db) => {

    return db.updateRole(roleName, roleObject);
}