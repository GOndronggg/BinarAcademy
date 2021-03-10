const fs = require("fs");

fs.mkdir("TEST", (err) => {
  if (err) {
    return console.err(err);
  } else {
    return console.log("success create folder");
  }
});
