const fs = require("fs");

fs.rmdir("TEST", (err) => {
  if (err) {
    console.error(err);
  } else {
    return console.log("success removed folder");
  }
});
