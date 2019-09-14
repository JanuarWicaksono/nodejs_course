require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d4a49e46626084c69ac825b').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed : false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: true})
    return count
}

deleteTaskAndCount('5d4bf2a46626084c69aca097').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})