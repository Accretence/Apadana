import log from './log.js'

export async function keyValuesToArray(data, reduction) {
    try {
        const reduced = {}

        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key]

                reduced[key] = element.map((e) => {
                    const obj = {}
                    return (obj[reduction] = e[reduction])
                })
            }
        }

        return reduced
    } catch (error) {
        log(error, 'Error')
    }
}

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

export async function sliceObject(object, index) {
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

export async function deleteKeysBasedOnList(object, list) {
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
