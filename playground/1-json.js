const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

//read the file in getting binary data
const dataBuffer = fs.readFileSync('1-json.json');
//convert the binary data into a js string
const dataJSON = dataBuffer.toString();
//parsed the json data into object and accessed property using dot notation.
const data = JSON.parse(dataJSON);

console.log(data.title);