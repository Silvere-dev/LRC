const sharp = require("sharp");

const getImageSize = (req) => {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", async () => {
      const buffer = Buffer.concat(chunks);

      try {
        const metadata = await sharp(buffer).metadata();

        resolve({
          width: metadata.width,
          height: metadata.height,
          size: buffer.byteLength,
        });
      } catch (error) {
        reject(error);
      }
    });
  });
};
