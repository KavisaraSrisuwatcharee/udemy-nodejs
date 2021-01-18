const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name : 'Chingly',
        age: 20
    },(error,result) => {
        if(error){
            return console.log('Unable to insert user')
        }
        console.log(result.ops);
    })

    db.collection('tasks').insertMany([
        {
            Description: ' HW CSC210',
            complete : true
        }, {
            Description: 'HW CSC220',
            complete : false
        },{
            Description: 'HW CSC102',
            complete : true
        }
    ],(error,result) => {
        if(error){
            return console.log('Unable to insert tasks');
        }
        console.log(result.ops);
    })
})