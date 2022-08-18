/**
 * Create the checksum of the file reading all the big file (problem on resources)
 */

const fs = require("fs");
const crypto = require("crypto");
 
fs.readFile("file.txt", (readErr, data) => {
  if (readErr) return console.log(readErr);
  const hash = crypto.createHash("sha256").update(data).digest("base64");
  fs.writeFile("./checksumBigFile.txt", hash, (writeErr) => {
    writeErr && console.error(err);
  });
});