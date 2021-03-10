const fs = require("fs");

fs.rename("before.json", "after.json", (err) => {
  if (err) {
    return console.error(err);
  } else {
    return console.log("success renamed file");
  }

  //done
});
