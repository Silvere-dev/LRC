const fs = require("fs");

function uploadFile(file, imageName) {
  const filePath = `${__basedir}/public/resources/images/uploads/${imageName}`;
  const fileContent = fs.readFileSync(file.path);
  fs.writeFileSync(filePath, fileContent);
}

module.exports = uploadFile;
