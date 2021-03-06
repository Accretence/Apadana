import {
    removeKeysByStringArray,
    filterKeysByValue,
    keepKeysExcept,
    removeKeysExcept,
    sliceObjectKeysByIndex,
    sortObjectKeys,
} from './src/objects.js'
import { getRandomIntegerInRange, getDecimalPlaces } from './src/numbers.js'
import { shuffleArray } from './src/arrays.js'
import { getIPCheck } from './src/getIPCheck.js'
import { getUniqueCombinations } from './src/getUniqueCombinations.js'
import log from './src/log.js'
import { writeFile } from './src/writeFile.js'
import { generateVoucher } from './src/generators.js'

export default {
    arrays: {
        shuffleArray,
    },
    generators: {
        generateVoucher,
    },
    objects: {
        removeKeysByStringArray,
        filterKeysByValue,
        keepKeysExcept,
        removeKeysExcept,
        sliceObjectKeysByIndex,
        sortObjectKeys,
    },
    numbers: {
        getRandomIntegerInRange,
        getUniqueCombinations,
    },
    getDecimalPlaces,
    getIPCheck,
    log,
    writeFile,
}
