const { lookupService } = require("dns")
const fs = require("fs")

// create reference to big.txt, open a stream
const file = fs.createWriteStream("./big.txt")

// add this text, little by little, in the file
for (let index = 0; index < 1e6; index++) {
    file.write("hello! ")
}

file.end()