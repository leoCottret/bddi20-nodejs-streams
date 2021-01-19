const fs = require('fs')
const http = require('http')

const server = http.createServer()

// nodejs names convetion -> req/res
server.on("request", (req, res) => {

    res.writeHead(200)

    // we load little by little data from file, 
    // and write little by little in the res
    const fileStream = fs.createReadStream("./big.txt")
    fileStream.pipe(res)
    // no need for end, pipe end connection when source is fully sent

})

server.listen(3000)
