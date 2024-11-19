function checkPassword() {
  console.log("Checking password ");
  console.log("Done!!!");
}
function createSess() {
  console.log("Creating session!!!");
}

// makes this auth.js a module -- exposing thwo functions to other files
module.exports = { checkPassword, createSess };
