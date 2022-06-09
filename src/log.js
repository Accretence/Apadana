import colors from 'colors'

function log(text, color) {
    switch (color) {
        case 'Red':
            console.log(`${text}`.red)
            break
        case 'Blue':
            console.log(`${text}`.blue)
            break
        case 'Cyan':
            console.log(`${text}`.cyan)
            break
        case 'Magenta':
            console.log(`${text}`.magenta)
            break
        case 'Yellow':
            console.log(`${text}`.yellow)
            break
        case 'Green':
            console.log(`${text}`.green)
            break
        case 'Success':
            console.log(`${text}`.blue.inverse)
            break
        case 'Warn':
            console.log(`${text}`.yellow.inverse)
            break
        case 'Error':
            console.log(`${text}`.red.inverse)
            break
        case 'Rainbow':
            console.log(`${text}`.rainbow)
            break

        default:
            console.log(text)
            break
    }
}

export default log
