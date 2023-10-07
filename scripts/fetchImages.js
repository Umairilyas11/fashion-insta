const axios = require("axios");
const fs = require("fs");

const imageUrls = [
  "https://media.gq.com/photos/609ee0fd85bdd1881580eef3/16:9/w_2560%2Cc_limit/shop-talk-raggedy-threads-lead-image.jpg",
  "https://assets.teenvogue.com/photos/5d2e185e72f9ef0008fff28f/16:9/w_2560%2Cc_limit/00-story-gucci-montauk.jpg",
  "https://media.gq.com/photos/6079b2d77ce9d04c01de9164/16:9/w_2560%2Cc_limit/4-cash.JPG",
];

const downloadImage = async (imageUrl, filename) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "stream" });
    const writer = fs.createWriteStream(filename);

    response.data.pipe(writer);

    await new Promise((resolve) => {
      writer.on("finish", resolve);
    });

    console.log(`Image downloaded successfully: ${filename}`);
  } catch (error) {
    console.error(`Error downloading image (${filename}): ${error.message}`);
  }
};

imageUrls.forEach((imageUrl, index) => {
  const filename = `src/components/Images/image_${index + 1}.jpg`;
  downloadImage(imageUrl, filename);
});
