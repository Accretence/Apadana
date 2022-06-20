import log from './log.js'

export async function getUniqueCombinations(data) {
    try {
        const burntCombos = {},
            uniqueCombos = []

        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const first = key

                for (const key in data) {
                    if (Object.hasOwnProperty.call(data, key)) {
                        const second = key
                        if (
                            first != second &&
                            !burntCombos[first + second] &&
                            !burntCombos[second + first]
                        ) {
                            burntCombos[first + second] = true
                            burntCombos[second + first] = true

                            const uniquePair = {}

                            uniquePair[first] = data[first]
                            uniquePair[second] = data[second]

                            uniqueCombos.push(uniquePair)
                        }
                    }
                }
            }
        }

        return uniqueCombos
    } catch (error) {
        log(error, 'Error')
    }
}
