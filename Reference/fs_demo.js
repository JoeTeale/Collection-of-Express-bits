const fs = require('fs');
const path = require('path');

// Create folder
/*fs.mkdir(path.join(__dirname,'/tests'),{}, stuff =>  {
    if (stuff) throw stuff; 
    console.log('Folder created...')
});*/

fs.appendFile(path.join(
    __dirname, '/test', 'hello.txt'),
    'Hello world\n', 
    err => { 
        if (err) throw err; 
        console.log('File written to');} 
)
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'Goodbye.txt'),
    err => { 
        if (err) throw err; 
        console.log('File renamed');} 
)