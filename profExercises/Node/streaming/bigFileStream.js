/**
 * create the checksum for the file without reading all file. It use stream to read part of it and create the hash
 */

const fs = require("fs");
const crypto = require("crypto");
const {pipeline} = require('stream');

const hash = crypto.createHash('sha256');
hash.setEncoding('base64');

const inputStream = fs.createReadStream('file.txt');
const outStream = fs.createWriteStream('checksumBigFileStream.txt');

//inputStream.pipe(hash).pipe(outStream);

pipeline(inputStream, hash, outStream, (err)=>{
  if (err != null){
    console.log(err);
  }
})