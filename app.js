import express from "express";
import router from "./router/api.js";

const app = express();

app.use(router);

app.listen(3000, () => {
    console.log("Port is listening at 3000 ...");
});