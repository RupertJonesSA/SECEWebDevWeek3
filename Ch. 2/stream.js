const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws); // More efficient to write data from file to new file