const fs = require("fs");

function base64toFile(base64, filename) {
  const base64Data = base64.split(",")[1];
  const bufferData = Buffer.from(base64Data, "base64");
  const file = new fs.WriteStream(filename);

  file.write(bufferData);
  file.end();

  return new Promise((resolve, reject) => {
    file.on("close", () => {
      resolve(new fs.createReadStream(filename));
    });
    file.on("error", reject);
  });
}

module.exports = base64toFile;
