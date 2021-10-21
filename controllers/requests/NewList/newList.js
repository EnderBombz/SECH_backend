const { User } = require("../../../schema/schemas")

exports.NewList = async(user_id, list) => {

    console.log(user_id, list)
    const user = await User.findOne({ _id: user_id })
    console.log(user)

    let i = 0
    let cont = 0
    let newList = []
    user.equipments.forEach((item, index) => {
        for (i = 0; i < list.length; i++) {
            if (item._id != list[i]._id) {
                newList[cont] = item
                cont++;
            }
        }
    })
    console.log(newList)
    return newList;
}