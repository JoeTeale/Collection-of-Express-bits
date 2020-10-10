const url = require('url');

const myUrl = new URL('http://www.google.com:8000/helloworld.html?id=100&status=active');

//serialised url
console.log(myUrl.href)
console.log(myUrl.toString())
// Host (root domain)
console.log(myUrl.host);
//host name (does not get port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized query
console.log(myUrl.search);
// search params
console.log(myUrl.searchParams);
// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name) => console.log(value, name));