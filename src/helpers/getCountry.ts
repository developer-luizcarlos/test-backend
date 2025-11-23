import { readFile } from "fs/promises";

export const getCountry = async (country?: string) => {
  const fileContent = await readFile("assets/data.json", "utf-8");
  const data = JSON.parse(fileContent);

  if (country) {
    return data[country];
  } else {
    return data;
  }
};
