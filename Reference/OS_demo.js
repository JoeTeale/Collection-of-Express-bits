const os = require('os');

//platform
console.log(os.platform());
// cpu arch
console.log(os.arch());
//cpu core info
//console.log(os.cpus())

//Free memory
console.log(os.freemem())
// Total memory
console.log(os.totalmem())
//home directory
console.log(os.homedir());
//up time
console.log(os.uptime());