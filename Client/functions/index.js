const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I2hBWFNgLvNMG26P9Iycsrgn1qW8kgOObEG1cFN1ifw0cK6bIK1XJrNmBSoTnwMsW81SKGKrtFi6YahrfLLrBxq00QKS6jGJl"
);

//Api config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (req, res) => {
  res.send("hello Clever");
});

app.post("/payments/create/", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received: ", total);

  const pyamentIntent = await stripe.pyamentIntents.create({
    amount: total, //subunit of the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: pyamentIntent.client_secret,
  });
});

//listen the command
exports.api = functions.https.onRequest(app);
