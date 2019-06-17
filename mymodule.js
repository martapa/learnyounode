

const fs = require("fs");

// const path = process.argv[2];
// const extension = process.argv[3];
//let list = undefined;

module.exports = (path, extension, callback) => {
  fs.readdir(path, (err, list) => {
    if (err){
      return callback(err);
    }
    else {
      filtered = list.filter( (str) => { return str.includes(`.${extension}`); });

      callback(null, filtered);
    }
  })
}
