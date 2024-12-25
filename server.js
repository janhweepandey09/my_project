const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Folder containing images
const imageFolder = path.join(__dirname, "pokieee", "imagesss");

// Serve static files
app.use("/images", express.static(imageFolder));

// API to get all image names
app.get("/api/images", (req, res) => {
  fs.readdir(imageFolder, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to load images" });
    }
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.json(images);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
