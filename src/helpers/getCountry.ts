import { readFile } from "fs/promises";
import { pathToFileURL } from "url";

export const getCountry = async (country?: string) => {
  const url = pathToFileURL("assets/data.json");

  const fileContent = await readFile(url, "utf-8");
  const data = JSON.parse(fileContent);

  if (country) {
    return data[country];
  } else {
    return data;
  }
};
