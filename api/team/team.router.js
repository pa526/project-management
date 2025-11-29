const {createTeamValidation} = require("../../validation/team/team.validation");
const {getAllTeam} = require("../team/team.controller");
const router = require("express").Router();

router.get("/all", (req, res) => {
    res.json({
        msg: "this is working",
    })
   console.log("app is working");
});

module.exports = router; 