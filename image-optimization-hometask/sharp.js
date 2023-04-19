const sharp = require("sharp");
const fs = require("fs");

const sizes = [320, 768, 1024, 1920];
const basePath = "./images";

async function transformImages() {
  try {
    sizes.forEach(async (size) => {
      if (!fs.existsSync(`${basePath}/${size}`)) {
        fs.mkdirSync(`${basePath}/${size}`);
      }

      for (let i = 1; i <= 10; i++) {
        await sharp(`${basePath}/image${i}.jpeg`)
          .resize(size)
          .toFile(`${basePath}/${size}/image${i}.webp`);

          await sharp(`${basePath}/image${i}.jpeg`)
          .resize(size)
          .jpeg({quality: 80})
          .toFile(`${basePath}/${size}/image${i}-compressed.jpeg`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

transformImages();
