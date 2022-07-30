import log from './log.js'

export async function generateVoucher(batch = 3) {
    try {
        let voucher = ''

        function generate() {
            return Math.random().toString(36).slice(8).toUpperCase()
        }

        voucher = voucher.concat(generate())
        for (let i = 1; i < batch; i++) {
            voucher = voucher.concat('-')
            voucher = voucher.concat(generate())
        }

        return voucher
    } catch (error) {
        log(error)
    }
}
