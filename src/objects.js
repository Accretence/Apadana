import log from './log.js'

export async function filterKeysByValue(object, condition) {
    try {
        const res = {}

        Object.keys(object).forEach((key) => {
            if (object[key] == condition) res[key] = object[key]
        })

        return res
    } catch (error) {
        log(error, 'Error')
    }
}

export async function removeKeysExcept(object, condition) {
    try {
        const res = {}

        Object.keys(object).forEach((key) => {
            if (key == condition) res[key] = object[key]
        })

        return res
    } catch (error) {
        log(error, 'Error')
    }
}

export async function keepKeysExcept(object, condition) {
    try {
        const res = {}

        Object.keys(object).forEach((key) => {
            if (key != condition) res[key] = object[key]
        })

        return res
    } catch (error) {
        log(error, 'Error')
    }
}

export async function sliceObjectKeysByIndex(object, index) {
    try {
        return Object.keys(object)
            .slice(0, index)
            .reduce((result, key) => {
                result[key] = object[key]

                return result
            }, {})
    } catch (error) {
        log(error, 'Error')
    }
}

export async function removeKeysByStringArray(object, list) {
    try {
        const res = {}

        Object.keys(object).forEach((key) => {
            if (!list.includes(key)) res[key] = object[key]
        })

        return res
    } catch (error) {
        log(error, 'Error')
    }
}

export async function sortObjectKeys(obj) {
    try {
        return Object.keys(obj)
            .sort()
            .reduce((res, key) => ((res[key] = obj[key]), res), {})
    } catch (error) {
        log(error, 'Error')
    }
}
