const { MongoClient, ObjectID } = require('mongodb');

const connURL = 'mongodb+srv://admin:admin@cluster0.8psuw.mongodb.net/taskManagerDB?retryWrites=true&w=majority';
const dbName = 'task-manager-db'

MongoClient.connect(connURL, { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err, client) => {
        if(err) return console.log('Unable to connect to database');

        const db = client.db(dbName);
        // db.collection('users').insertOne({
        //     name: 'John',
        //     age: 28
        // })
        // .then(result => console.log(result.ops))
        // .catch(err => console.log(err))

        // db.collection('users').insertMany([
        //     {
        //         name: 'Mary',
        //         age: 25
        //     },
        //     {
        //         name: 'Robert',
        //         age: 30
        //     }
        // ])
        // .then(result => console.log(result.ops))
        // .catch(err => console.log(err))

        // db.collection('users').findOne({ name: "John"})
        //     .then(user => console.log(user))
        //     .catch(err => console.log(err))

        // db.collection('users').find({ name: "John"})
        //         .toArray()
        //         .then(user => console.log(user))
        //         .catch(err => console.log(err))
        

        // db.collection('users').updateOne({ _id: new ObjectID("626fe58de2756c7e5e1e4185")},
        // { $set: { name: "John Doe" }})
        // .then(result => console.log(result.modifiedCount))
        // .catch(err => console.log(err))

        // db.collection('users').updateMany({ age: 27 },
        //     { $set: { age: 28 }})
        //     .then(result => console.log(result.modifiedCount))
        //     .catch(err => console.log(err))

        db.collection('users').deleteOne({ _id: new ObjectID("626fe4e0bf3d867e3ef58eb2") })
            .then(result => console.log(result.deletedCount))
            .catch(err => console.log(err))

        db.collection('users').deleteMany({ age: 28 })
            .then(result => console.log(result.deletedCount))
            .catch(err => console.log(err))
    })