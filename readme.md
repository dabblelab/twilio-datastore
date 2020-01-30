Twilio Autopilot Datastore
================
A module which stores the twilio autopilot data into the mongodb database. We can perform all MongoDB operations on following define methods.

# Requirements

## Install the twilio-datastore

```
$ npm install @dabblelab/twilio-datastore

```

# Usage

```
const datastore = require('@dabblelab/twilio-datastore');

const client = new datastore.TwilioDatastoreApiClient({
    dbName : '<database-name>',
    collectionName : '<collection-name>',
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