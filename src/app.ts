import express from "express";
import { getCountry } from "./helpers/getCountry.js";

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/countries", async (req, res) => {
  const countries = await getCountry();
  const countriesNames = Object.keys(countries);

  res.send(countriesNames);
});

app.get("/countries/:country", async (req, res) => {
  const country = await getCountry(req.params.country);

  res.statusCode = country ? 200 : 404;
  res.send(country);
});

app.get("/countries/:country/capital", async (req, res, next) => {
  const country = await getCountry(req.params.country);

  res.statusCode = country ? 200 : 404;

  if (!country) {
    res.end();
  } else {
    next();
  }
});

app.get("/countries/:country/capital", async (req, res) => {
  const country = await getCountry(req.params.country);
  res.send(country.capital);
});

export default app;
