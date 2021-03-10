// Node.js program to demonstrate the
// fs.write() method

// Include fs module
const fs = require("fs");

const str = "";
const filename = "politics.html";

fs.open(filename, "a", (err, fd) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.write(fd, str, (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(bytes + " bytes written");
      }
    });
  }
});
