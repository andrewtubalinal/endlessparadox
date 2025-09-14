import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { year, folder } = req.query;

  const dirPath = path.join(process.cwd(), "public/assets/guild-img", year, folder);

  try {
    const files = fs.readdirSync(dirPath);
    const jpgFiles = files.filter((file) => file.endsWith(".jpg"));
    res.status(200).json(jpgFiles);
  } catch (err) {
    res.status(500).json({ error: "Unable to read folder" });
  }
}
