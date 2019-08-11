const validate = (data, scheme) => {
    for(i in data){
        res = scheme.indexOf(i)
        if(res != -1){
            scheme.splice(res, 1)
        }
    }
    return new Promise((resolve, reject) => {
        if(scheme.length === 0){
            resolve(true)
        } else {
            reject({fieldRequired: scheme})
        }
    })
}

module.exports = validate