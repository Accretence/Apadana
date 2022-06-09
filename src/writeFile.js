import fs from 'fs'
import log from './log.js'

export async function writeFile(dir, output, fileName) {
    try {
        if (!fs.existsSync(dir)) {
            fs.mkdir(dir, (err) => {
                if (err) {
                    throw err
                }
            })
        }

        fs.writeFile(
            dir + '/' + fileName + `.json`,
            output,
            { flag: 'w' },
            finished
        )
    } catch (error) {
        log(error, 'Error')
    }
}

function finished(error) {
    if (error) {
        log(error, 'Error')
        return
    }
}
