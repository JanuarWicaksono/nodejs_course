//CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// shorthands
const {
    MongoClient,
    ObjectID
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

// console.log(id.id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Januar',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Wicaksono',
    //         age: 28
    //     },
    //     {
    //         name : 'Shodiq',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Beli Makanan',
    //         completed: true
    //     },
    //     {
    //         description: 'Beli Minuman',
    //         completed: false
    //     },
    //     {
    //         description: 'Olahraga Pagi',
    //         completed: true
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5d468c9446b6211e20cd1040")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 27 }).count((error, users) => {
    //     console.log(users)
    // })

    db.collection('users').updateOne({
        _id : new ObjectID("5d467e7dd59a1f20dca8d7a0")
    }, {
        $set: {
            name: "Januarrrr hahaha"
        },
        $inc: {
            age : -1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})