const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require("axios");

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

app.post("/api/image", (req, res) => {
    axios
      .post("https://stablediffusionapi.com/api/v3/text2img", req.body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
          // console.log(response)
        res.status(200).json(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  });