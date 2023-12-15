class Transaction {
    constructor(fromAddress, toAddress, amount) {
        console.log(`Transact ${amount} from ${fromAddress} to ${toAddress}`);
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

module.exports = Transaction;