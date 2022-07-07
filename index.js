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

const Terracotta = {
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
    arrays: {
        shuffleArray,
    },
    getDecimalPlaces,
    getIPCheck,
    log,
    writeFile,
}

export default Terracotta
