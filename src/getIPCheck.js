import axios from 'axios'
import log from './log.js'

const config = {
    endpoint: 'http://ip-api.com/json/',
}

export async function getIPCheck(acceptableCountry) {
    try {
        const {
            data: { country },
        } = await axios.get(config.endpoint)

        if (country != acceptableCountry) {
            console.error(`[UTILITIES] Connecting from ${country}!`)
            process.exit(1)
        }

        console.log(`[UTILITIES] Connecting from ${country}!`)
        return true
    } catch (error) {
        log(error, 'Error')
        process.exit(1)
    }
}
