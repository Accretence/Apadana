import log from './log.js'

export async function sortObjectKeys(obj) {
    try {
        return Object.keys(obj)
            .sort()
            .reduce((res, key) => ((res[key] = obj[key]), res), {})
    } catch (error) {
        log(error, 'Error')
    }
}
