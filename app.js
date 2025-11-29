require("dotenv").config();
const express = require("express");
const cors = require("cors");
const teamRouter = require("./api/team/team.router");
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.use("api/team", teamRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
