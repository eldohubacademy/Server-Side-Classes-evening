const fs = require("fs"); // importing an object fs , from node js built in modules

fs.writeFile("new.css", `body{color: red}`, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file created successfully");
  }
});

let theImage = fs.openSync("eldohub.jpg", "r");

fs.fstat(theImage, (err, info) => {
  console.log(info);
});
