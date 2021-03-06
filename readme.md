Twilio Autopilot Datastore
================
A persistent data storage solution designed for use with Twilio Functions and Twilio Autopilot.

# Requirements

## Install twilio-datastore

```
$ npm install @dabblelab/twilio-datastore

```

# Usage

```
const datastore = require('@dabblelab/twilio-datastore');

const client = new datastore.TwilioDatastoreApiClient({
    tableName : '<table-name>',
    accountSid : '<twilio-account-sid>',
    authToken : '<twilio-auth-token>'
});

```

## Find Query

```
client.find({})
    .then((data) => {
        console.log(data);
    })
    .catch(error => console.log(error));

```

Note
> Twilio Autopilot Datastore provides same syntax that are used in [MongoDB find query](https://docs.mongodb.com/manual/reference/method/db.collection.find/)

## Insert Query

```
client.insert(
    { 
        item: "card", 
        qty: 15 
    })
    .then((data) => {
        console.log(data);
    })
    .catch(error => console.log(error));

```

Note
> Twilio Autopilot Datastore provides same syntax that are used in [MongoDB insertOne query](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/)

## Update Query

```
client.update(
    {
        item: "card"
    }, 
    {
        $set : 
        {
            qty: 40
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch(error => console.log(error));

```

Note
> Twilio Autopilot Datastore provides same syntax that are used in [MongoDB updateMany query](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/)

## Remove Query

```
client.remove(
    {
        item: "card"
    })
    .then((data) => {
        console.log(data);
    })
    .catch(error => console.log(error));

```

Note
> Twilio Autopilot Datastore provides same syntax that are used in [MongoDB deleteMany query](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/)