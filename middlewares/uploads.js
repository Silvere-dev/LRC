const fs = require("fs");

function uploads(file) {
  const filePath = `${__basedir}/public/resources/images/uploads/${imageName}`;
  const fileContent = fs.readFileSync(file.path);
  fs.writeFileSync(filePath, fileContent);
  req.body.photo = imageName;
  console.log(data.path);
}

module.exports = uploads;
