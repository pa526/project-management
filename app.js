require(dotnet).config;
const cors = require("cors");
const express = require("express");
const app = express();
const teamRouter = require("./api/team/team.router");

app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.use("api/team", teamRouter);
