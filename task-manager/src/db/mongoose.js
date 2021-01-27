const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        varidator() {
            if (!this.varidator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        require: true,
        trim: true,
        varidator() {
            if(value == 0){
                throw new Error('password does not contain ')
            }
            if (value > 6){
                throw new Error('minimum length greater than 6')
            }
           
        }
    },
    age: {
        type: Number,
        default: 0
    }
})

const me = new User({
    name: 'Chingly',
    age: 20,
    email: 'chingly@hotmail.com',
    password : '12345678'

})

me.save().then((me) => {
    console.log(me);
}).catch((error) => {
    console.log('Error', error);
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     complete: {
//         type: Boolean
//     }
// })

// const tasks = new Task({
//     description: 'Read Vocab',
//     complete: false
// })

// tasks.save().then((tasks) => {
//     console.log(tasks);
// }).catch((error) => {
//     console.log('Error',error);
// })