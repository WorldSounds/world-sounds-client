const nameParser = data => {
    let result = []

    data.map(item => {
        let object = {
            name: item.name,
            popularity: item.pop,
            family: item.family
        }

        result.push(object)
    })
    return result
}

module.exports = nameParser