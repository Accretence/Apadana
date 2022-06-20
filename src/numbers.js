import log from './log.js'

export async function getRandomIntegerInRange(min, max) {
    try {
        return Math.floor(Math.random() * (max - min) + min)
    } catch (error) {
        log(error, 'Error')
    }
}

export async function getDecimalPlaces(num) {
    try {
        let text = num.toString()
        if (text.indexOf('e-') > -1) {
            let [base, trail] = text.split('e-')
            let elen = parseInt(trail, 10)
            let idx = base.indexOf('.')
            return idx == -1 ? 0 + elen : base.length - idx - 1 + elen
        }
        let index = text.indexOf('.')

        return index == -1 ? 0 : text.length - index - 1
    } catch (error) {
        log(error, 'Error')
    }
}
