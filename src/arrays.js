import log from './log.js'

export async function shuffleArray(array) {
    try {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    } catch (error) {
        log(error, 'Error')
    }
}
