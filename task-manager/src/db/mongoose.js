const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tast-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: 'Januar      ',
//     email: '     wicaksono@gmail.com',
//     password: 'larukulaguku123123',
//     age: 23
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((error) => {
//     console.log('Error !', error)
// })

// --------------------------



// const task = new Task({
//     description: 'Learn the mongoose library lagiiiii',
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })