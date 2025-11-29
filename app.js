require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const teamRouter = require("./api/team/team.router");

app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.use("api/team", teamRouter);
