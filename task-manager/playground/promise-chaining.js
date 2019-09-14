require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5d4a43076626084c69ac8028', {age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age : 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndDelete(id, {age})
    const count = await User.countDocuments({ age })
    return count  
}

updateAgeAndCount('5d4bffab6626084c69aca375', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})