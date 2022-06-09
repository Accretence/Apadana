import log from './log.js'

export async function getRandomIntegerInRange(min, max) {
    try {
        return Math.floor(Math.random() * (max - min) + min)
    } catch (error) {
        log(error, 'Error')
    }
}
