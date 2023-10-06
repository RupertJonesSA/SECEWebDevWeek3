const fs = require('fs');

if (!fs.existsSync('./new')){ // Checks if directory does not exist
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created');
    });
}

if (fs.existsSync('./new')){ 
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed');
    });
}