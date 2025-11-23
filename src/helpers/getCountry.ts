import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getCountry = async (country?: string) => {
  const filePath = join(__dirname, "../..", "assets", "data.json");

  console.log(__filename);

  const fileContent = await readFile(filePath, "utf-8");
  const data = JSON.parse(fileContent);

  if (country) {
    return data[country];
  } else {
    return data;
  }
};

getCountry().then(console.log);
